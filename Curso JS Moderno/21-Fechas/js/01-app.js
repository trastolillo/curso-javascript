'use strict';
const hoy = new Date();
const unDia = new Date('12-11-1974');
const otroDia = new Date('January 5 2000');

console.log(hoy);
console.log(unDia);
console.log(otroDia);

console.log(hoy.getFullYear());
console.log(hoy.getMonth()); // inicia enero en 0
console.log(hoy.getTime()); // Milisegundos
console.log(new Date().toLocaleString());
console.log(Date.now()); // Fecha actual en milisegundos, no necesita instanciarse

//! Libreria moment
moment.locale('es');
console.log(moment().format('MMMM Do YYYY hh:mm:ss a'));
