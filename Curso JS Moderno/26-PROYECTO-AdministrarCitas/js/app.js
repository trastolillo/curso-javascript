const mascotaInput = document.querySelector('#mascota');
const propietarioInput = document.querySelector('#propietario');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const sintomasInput = document.querySelector('#sintomas');
const formulario = document.querySelector('#nueva-cita');
const contenedorCitas = document.querySelector('#citas');

class Citas {
  constructor() {
    this.citas = [];
  }

  agregarCita(cita) {
    this.citas = [...this.citas, cita];
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

      const telefonoParrafo = document.createElement('p');

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
    console.log(parrafo);
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
  // Agregar un id único
  citaObj.id = Date.now();
  // Creando una nueva cita
  administrarCitas.agregarCita({ ...citaObj });
  reiniciarObjeto();
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
