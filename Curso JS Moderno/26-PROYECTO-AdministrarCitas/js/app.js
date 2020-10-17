const mascotaInput = document.querySelector('#mascota');
const propietarioInput = document.querySelector('#propietario');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const sintomasInput = document.querySelector('#sintomas');
const formulario = document.querySelector('#nueva-cita');
const contenedorCitas = document.querySelector('#citas');
let editando;

class Citas {
  constructor() {
    this.citas = [];
  }

  agregarCita(cita) {
    this.citas = [...this.citas, cita];
  }

  eliminarCita(id) {
    this.citas = this.citas.filter((cita) => cita.id !== id);
  }

  editarCita(citaActualizada) {
    this.citas = this.citas.map((cita) =>
      cita.id === citaActualizada.id ? citaActualizada : cita
    );
  }
}

class UI {
  imprimirAlerta(mensaje, tipo) {
    const divMensaje = document.createElement('div');
    divMensaje.classList.add('text-center', 'alert', 'd-block', 'col-12');
    if (tipo === 'error') {
      divMensaje.classList.add('alert-danger');
    } else {
      divMensaje.classList.add('alert-success');
    }
    divMensaje.textContent = mensaje;
    document
      .querySelector('#contenido')
      .insertBefore(divMensaje, document.querySelector('.agregar-cita'));
    setTimeout(() => {
      divMensaje.remove();
    }, 3000);
  }

  imprimirCitas({ citas }) {
    this.#limpiarHTML(contenedorCitas);

    citas.forEach((cita) => {
      const {
        mascota,
        propietario,
        telefono,
        fecha,
        hora,
        sintomas,
        id,
      } = cita;
      const divCita = document.createElement('div');
      divCita.classList.add('cita', 'p-3');
      divCita.dataset.id = id;

      // Scripting de los elementos de la cita

      const mascotaParrafo = document.createElement('h2');
      mascotaParrafo.classList.add('card-title', 'font-weight-bolder');
      mascotaParrafo.textContent = mascota;
      divCita.appendChild(mascotaParrafo);

      this.#imprimeCampo(divCita, 'Propietario', propietario);
      this.#imprimeCampo(divCita, 'Teléfono', telefono);
      this.#imprimeCampo(divCita, 'Fecha', fecha);
      this.#imprimeCampo(divCita, 'Hora', hora);
      this.#imprimeCampo(divCita, 'Síntomas', sintomas);

      // Botón para eliminar esta cita
      const btnEliminar = document.createElement('button');
      btnEliminar.classList.add('btn', 'btn-danger', 'mr-2');
      btnEliminar.innerHTML =
        'Eliminar <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /> </svg>';
      divCita.appendChild(btnEliminar);
      btnEliminar.onclick = () => eliminarCita(id);
      // Botón para editar una cita
      const btnEditar = document.createElement('button');
      btnEditar.classList.add('btn', 'btn-info');
      btnEditar.innerHTML =
        'Editar <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /> </svg>';
      btnEditar.onclick = () => cargarEdicion(cita);
      divCita.appendChild(btnEditar);
      // Agregar las citas al HTML
      contenedorCitas.appendChild(divCita);
    });
  }

  #limpiarHTML(contenedor) {
    while (contenedor.firstChild) {
      contenedor.removeChild(contenedor.firstChild);
    }
  }

  #imprimeCampo(contenedor, texto, campo) {
    const parrafo = document.createElement('p');
    const span = this.#creaSpan(texto);
    parrafo.textContent = campo;
    parrafo.prepend(span);
    contenedor.appendChild(parrafo);
  }

  #creaSpan(texto) {
    const span = document.createElement('span');
    span.classList.add('font-weight-bolder');
    span.textContent = `${texto}: `;
    return span;
  }
}

const administrarCitas = new Citas();
const ui = new UI();

eventListeners();
function eventListeners() {
  mascotaInput.addEventListener('input', datosCita);
  propietarioInput.addEventListener('input', datosCita);
  telefonoInput.addEventListener('input', datosCita);
  fechaInput.addEventListener('input', datosCita);
  horaInput.addEventListener('input', datosCita);
  sintomasInput.addEventListener('input', datosCita);
  formulario.addEventListener('submit', nuevaCita);
}

const citaObj = {
  mascota: '',
  propietario: '',
  telefono: '',
  fecha: '',
  hora: '',
  sintomas: '',
};

function datosCita(e) {
  citaObj[e.target.name] = e.target.value;
}

// Valida y agrega nueva cita
function nuevaCita(e) {
  e.preventDefault();
  const { mascota, propietario, telefono, fecha, hora, sintomas } = citaObj;
  if (
    mascota === '' ||
    propietario === '' ||
    telefono === '' ||
    fecha === '' ||
    hora === '' ||
    sintomas === ''
  ) {
    ui.imprimirAlerta('Todos los campos son obligatorios', 'error');
    return;
  }

  if (editando) {
    ui.imprimirAlerta('Editado correctamente');
    // Pasar el objeto de la cita a edición
    administrarCitas.editarCita({ ...citaObj });
    // Quitar modo edición
    formulario.querySelector('button[type="submit"]').textContent =
      'Crear cita';
    editando = false;
  } else {
    // Agregar un id único
    citaObj.id = Date.now();
    // Creando una nueva cita
    administrarCitas.agregarCita({ ...citaObj });
    // Mensaje de agregado correctamente
    ui.imprimirAlerta('Se agregó correctamente');
  }

  // Reiniciar objeto para la validación
  reiniciarObjeto();
  // Reiniciar el formulario
  formulario.reset();
  // Mostrar el HTML
  ui.imprimirCitas(administrarCitas);
}

function reiniciarObjeto() {
  citaObj.mascota = '';
  citaObj.propietario = '';
  citaObj.telefono = '';
  citaObj.fecha = '';
  citaObj.hora = '';
  citaObj.sintomas = '';
}

function eliminarCita(id) {
  // Eliminar la cita
  administrarCitas.eliminarCita(id);
  // Mostrar mensaje
  ui.imprimirAlerta('La cita se ha eliminado correctamente');
  // Refrescar la cita
  ui.imprimirCitas(administrarCitas);
}

// Carga los datos y el modo edición
function cargarEdicion(cita) {
  const { mascota, propietario, telefono, fecha, hora, sintomas, id } = cita;
  // Llenar los inputs
  mascotaInput.value = mascota;
  propietarioInput.value = propietario;
  telefonoInput.value = telefono;
  fechaInput.value = fecha;
  horaInput.value = hora;
  sintomasInput.value = sintomas;
  // Llenar el objeto
  citaObj.mascota = mascota;
  citaObj.propietario = propietario;
  citaObj.telefono = telefono;
  citaObj.fecha = fecha;
  citaObj.hora = hora;
  citaObj.sintomas = sintomas;
  citaObj.id = id;
  // Cambiar el texto del botón
  formulario.querySelector('button[type="submit"]').textContent =
    'Guardar cambios';
  editando = true;
}
