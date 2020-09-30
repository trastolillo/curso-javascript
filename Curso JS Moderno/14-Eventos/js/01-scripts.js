'use strict';

document.addEventListener('DOMContentLoaded', () => {
  console.log('Página cargada');
});

const nav = document.querySelector('.navegacion');

//! Eventos de ratón
nav.addEventListener('click', () => {
  console.log('Click en nav, Caquitas');
});
// El ratón entra en un área
nav.addEventListener('mouseenter', () => {
  nav.style.backgroundColor = 'white';
  //   console.log('El ratón está en nav');
});
// El ratón sale de un área
nav.addEventListener('mouseout', () => {
  nav.style.backgroundColor = 'transparent';
  //   console.log('El ratón se va de nav');
});

const busqueda = document.querySelector('.busqueda');
//! Eventos de teclado
busqueda.addEventListener('keydown', () => {
  console.log('Escribiendo...');
});
// blur es bueno para validaciones
busqueda.addEventListener('blur', () => {
  console.log('Cuando el campo pierde el foco');
});
// input es el más común, engloba casi todos los otros eventos
// excepto blur.
busqueda.addEventListener('input', (eventoQueSucede) => {
  console.log(eventoQueSucede.target.value);
});

//! Submit a un formulario
const formulario = document.querySelector('#formulario');
formulario.addEventListener('submit', validarFormulario);

function validarFormulario(evento) {
  // Previene la acción determinada en el atributo 'action' del formulario HTML
  evento.preventDefault();
  // La acción por defecto:
  console.log(evento.target.action);
}

//! Eventos de scroll
// Los eventos de scroll ocurren en la ventana global [window]
window.addEventListener('scroll', () => {
  // Devuelve el scroll vertical en pixeles
  const scrollPx = window.scrollY;
  const premium = document.querySelector('.premium');
  // Devuelve la distancia al elemento del DOM
  const ubicacion = premium.getBoundingClientRect();
  ubicacion.top < 784
    ? console.log('El elemento es visible')
    : console.log('El elemento NO es visible');
});

//! Event Bubbling
// Es cuando presionas en un evento, y éste se propaga dando resultados
// que no son los esperados.
const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo = document.querySelector('.titulo');

// cardDiv.addEventListener('click', (e) => {
//   console.log('click en card');
// });
// infoDiv.addEventListener('click', (e) => {
//   e.stopPropagation();
//   console.log('click en info');
// });
// titulo.addEventListener('click', (e) => {
//   e.stopPropagation();
//   console.log('click en titulo');
// });

//! Tećnica 'delegation' para prevenir el event bubbling
cardDiv.addEventListener('click', (e) => {
  if (e.target.classList.contains('titulo')) {
    console.log('click en titulo');
  }
  if (e.target.classList.contains('precio')) {
    console.log('click en precio');
  }
  if (e.target.classList.contains('card')) {
    console.log('click en card');
  }
});
