//! .querySelectorAll
// La sintaxis para selectores es como CSS
//! Devuelve todos los elementos que cumplen con el selector
const cards = document.querySelectorAll('card'); // Devuelve un arreglo [NodeList], cada elemento es un 'nodo'.
// Si no existe devuelve un NodeList vacíows
console.log(cards);
