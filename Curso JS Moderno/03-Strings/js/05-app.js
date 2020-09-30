const producto = 'Monitor 20 pulgadas';
const cadena = '0123456789';

//! Reemplazar texto de una cadena
console.log(producto.replace(' pulgadas', '"'));

//! Cortar parte de una cadena de texto
console.log(producto.slice(0, 10)); // Monitor 20
console.log(producto.slice(8)); // 20 pulgadas
console.log(producto.substring(0, 10)); // Monitor 20
console.log(cadena.substring(2, 1));
console.log(cadena.substring(2, 5));

//! Seleccionar un carácter de la cadena
console.log(producto.charAt(0));
console.log(cadena.charAt(4));
