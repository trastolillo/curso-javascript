'use strict';
//! Traversing - Desplazarse a través del DOM
const navegacion = document.querySelector('.navegacion');
console.log(navegacion);
navegacion.childNodes; // los espacios en blanco se convierten en elementos
navegacion.children; // lista sólo elementos HTML - nodos
navegacion.children[1].nodeName; // A // La etiqueta
navegacion.children[1].nodeType; // 1 // Tipo de nodo segúń la documentación

const card = document.querySelector('.card');
console.log(card.children[1].children[1]);
console.log(card.children[0]);
card.children[0].src = 'img/hacer3.jpg';

//! Traversing del hijo al padre
console.log(card.parentNode); // tiene en cuenta los espacios en blanco
console.log(card.parentElement.parentElement.parentElement); // Mejor usar este

//! Seleccionar a los hermanos
card.nextElementSibling; // siguiente elemento
card.previousElementSibling; // elemento anterior

//! Más formas de seleccionar elementos con traversing
console.log(navegacion.firstElementChild); // El primer elemento
console.log(navegacion.lastElementChild); // El último elemento

//! Eliminar elementos DOM
const primerEnlace = document.querySelector('a');
primerEnlace.remove();
// Eliminar desde el padre
const naveg = document.querySelector('.navegacion');
naveg.removeChild(naveg.children[1]);
