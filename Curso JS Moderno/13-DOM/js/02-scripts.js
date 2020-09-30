//! Selecionar elementos por su clase
const header = document.getElementsByClassName('header'); // Es case sensitive
console.log(header);
const hero = document.getElementsByClassName('hero');
console.log(hero);

//! Si la clase existe más de una vez
const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores); // Devuelve un HTMLCollection(4)
