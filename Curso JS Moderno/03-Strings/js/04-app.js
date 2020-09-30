const producto = '    Monitor 20 pulgadas   ';

console.log(producto);
console.log(producto.length);

//! Eliminar espacios en blanco
// Al inicio
console.log(producto.trimStart());
// Al final
console.log(producto.trimEnd());
// Chainging - Encadenar métodos
console.log(producto.trimStart().trimEnd());
// Esto es lo mismo que:
console.log(producto.trim());
