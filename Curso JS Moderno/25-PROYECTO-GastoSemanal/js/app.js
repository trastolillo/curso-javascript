// Variables y selectores
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');

// Eventos
eventListeners();
function eventListeners() {
  document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
  formulario.addEventListener('submit', agregarGasto);
}
// Clases
class Presupuesto {
  constructor(presupuesto) {
    this.presupuesto = Number(presupuesto);
    this.restante = Number(presupuesto);
    this.gastos = [];
  }

  nuevoGasto(gasto) {
    this.gastos = [...this.gastos, gasto];
    this.calcularRestante();
  }

  eliminarGasto(id) {
    this.gastos = this.gastos.filter((gasto) => gasto.id != id);
    this.calcularRestante();
  }

  calcularRestante() {
    const gastado = this.gastos.reduce(
      (total, gasto) => total + gasto.cantidad,
      0
    );
    this.restante = this.presupuesto - gastado;
  }
}

class UI {
  insertarPresupuesto(cantidad) {
    const { presupuesto, restante } = cantidad;
    document.querySelector('#total').textContent = presupuesto;
    document.querySelector('#restante').textContent = restante;
  }

  imprimirAlerta(mensaje, tipo) {
    const divMensaje = document.createElement('div');
    divMensaje.classList.add('text-center', 'alert');
    if (tipo === 'error') {
      divMensaje.classList.add('alert-danger');
    } else {
      divMensaje.classList.add('alert-success');
    }
    divMensaje.textContent = mensaje;
    document.querySelector('.primario').insertBefore(divMensaje, formulario);
    setTimeout(() => {
      divMensaje.remove();
    }, 3000);
  }

  mostrarGastos(gastos) {
    this.limpiarHTML();
    gastos.forEach((gasto) => {
      const { cantidad, nombre, id } = gasto;
      const nuevoGasto = document.createElement('li');
      nuevoGasto.className =
        'list-group-item d-flex justify-content-between align-items-center';
      // nuevoGasto.setAttribute('data-id', id); // forma antigua
      nuevoGasto.dataset.id = id; // Forma moderna
      const span = document.createElement('span');
      span.textContent = `\$${cantidad}`;
      span.className = 'badge badge-primary badge-pill';
      nuevoGasto.textContent = nombre;
      nuevoGasto.appendChild(span);
      const btnBorrar = document.createElement('button');
      btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto');
      btnBorrar.innerHTML = 'Borrar &times;';
      btnBorrar.onclick = () => eliminarGasto(id);
      nuevoGasto.appendChild(btnBorrar);
      gastoListado.appendChild(nuevoGasto);
    });
  }

  actualizarRestante(restante) {
    document.querySelector('#restante').textContent = restante;
  }

  limpiarHTML() {
    while (gastoListado.firstChild) {
      gastoListado.removeChild(gastoListado.firstChild);
    }
  }

  comprobarPresupuesto(presupuestoObj) {
    const { presupuesto, restante } = presupuestoObj;
    const restanteDiv = document.querySelector('.restante');
    if (restante <= presupuesto * 0.25) {
      restanteDiv.classList.remove('alert-success', 'alert-warning');
      restanteDiv.classList.add('alert-danger');
    } else if (restante <= presupuesto * 0.5) {
      restanteDiv.classList.remove('alert-success', 'alert-danger');
      restanteDiv.classList.add('alert-warning');
    } else {
      restanteDiv.classList.add('alert-success');
      restanteDiv.classList.remove('alert-danger', 'alert-warning');
    }
    if (restante <= 0) {
      ui.imprimirAlerta('El presupuesto se ha agotado', 'error');
      formulario.querySelector('button[type="submit"]').disabled = true;
    }
  }
}
// Instancias
let presupuesto;
const ui = new UI();
// Funciones
function preguntarPresupuesto() {
  const presupuestoUsuario = prompt('Cuál es tu presupuesto?');
  if (
    presupuestoUsuario === '' ||
    presupuestoUsuario === null ||
    isNaN(presupuestoUsuario) ||
    presupuestoUsuario <= 0
  ) {
    window.location.reload();
  }
  presupuesto = new Presupuesto(presupuestoUsuario);
  ui.insertarPresupuesto(presupuesto);
}

function agregarGasto(e) {
  e.preventDefault();
  const nombre = document.querySelector('#gasto').value;
  const cantidad = Number(document.querySelector('#cantidad').value);
  if (nombre === '' || cantidad === '') {
    ui.imprimirAlerta('Ambos campos son obligatorios', 'error');
    return;
  } else if (cantidad <= 0 || isNaN(cantidad)) {
    ui.imprimirAlerta('Cantidad no válida', 'error');
    return;
  }
  //! literal object enhancement:
  const gasto = { nombre, cantidad, id: Date.now() };
  presupuesto.nuevoGasto(gasto);
  ui.imprimirAlerta('Gasto agregado correctamente');
  // Imprimir los gastos
  const { gastos, restante } = presupuesto;
  console.log(presupuesto);
  ui.mostrarGastos(gastos);
  ui.actualizarRestante(restante);
  ui.comprobarPresupuesto(presupuesto);
  // Reiniciar el formulario
  formulario.reset();
}

function eliminarGasto(id) {
  presupuesto.eliminarGasto(id);
  ui.mostrarGastos(presupuesto.gastos);
  ui.actualizarRestante(presupuesto.restante);
  ui.comprobarPresupuesto(presupuesto);
}
