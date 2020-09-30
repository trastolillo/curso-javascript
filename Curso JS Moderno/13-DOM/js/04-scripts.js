//! queryselector
// Retorna máximo un elemento.
// Se emplea en vez de getElementById y getElementsByClass
const card = document.querySelector('.card'); // Sólo el primero
console.log(card);

//! Podemos tener selectores específicos como en CSS
const info = document.querySelector('.premium .info'); // Especificidad
const segundoCard = document.querySelector(
  'section.hospedaje .card:nth-child(2)'
);

//! Seleccionando id's
const formulario2 = document.querySelector('#formulario');

//! Seleccionar elementos HTML
const navegacion = document.querySelector('nav');
