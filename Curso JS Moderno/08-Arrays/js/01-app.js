'use strict';
//! Arrays
const numeros = [10, 20, 30, 40, 50];
console.log(numeros);

const otraFormaMasRara = new Array('Enero', 'Febrero', 'Marzo');
console.log(otraFormaMasRara);

const arrayConDisintosTipos = [
  ['Otro array', 3],
  'Soy un String',
  200,
  true,
  null,
  { nombre: 'Caquitas', edad: 18 },
];
console.log(arrayConDisintosTipos);

console.log(numeros);

//! Acceder a los valores
console.log(numeros[2]);
console.log(numeros[20]); // En índices fuera de rango: undefined
console.log(arrayConDisintosTipos[0][1]);

//! Recorrer el array
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
console.log(meses);
meses.length; // 6
// Iterador
for (let i = 0; i < meses.length; i++) {
  console.log(meses[i]);
}

//! Modificando los valores del array
meses[0] = 'Mes Caquitas';
meses[6] = 'Agosto';
console.log(meses);

//! Métodos para arrays (forma imperativa)
meses.push('Last month, oh yeah'); // Agregar al final del array
const carrito = [];
const producto = {
  nombre: 'Teclado mecánico',
  precio: 400,
};
const producto2 = {
  nombre: 'Teléfono móvil',
  precio: 900,
};
const producto3 = {
  nombre: 'Monitor',
  precio: 340,
};
carrito.push(producto, producto2);
carrito.unshift(producto3); // Pone producto3 al inicio del array
console.log(carrito);

//! Añadir elementos con el spread operator (métodos declarativos)
const compra = [];
let resultado;
resultado = [...compra, producto];
resultado = [...resultado, producto2];
resultado = [producto3, ...resultado];
console.log(resultado);

//! Eliminar elementos de un array (forma imperativa)
meses.pop(); // Elimina el último elemento del array
meses.shift(); // Elimina del inicio del array
meses.splice(1, 2); // Primer param el index, segundo la cantidad de elementos
console.log(meses);

//! Destructuring con arreglos (forma declarativa)
const [, , tercero] = numeros; // tercero = numeros[2]
console.table(numeros);
console.log(tercero);
const [primero, segundo, ...resto] = numeros; // Resto es un array con el resto
console.log(resto); // [30, 40, 50]

//! forEach para iterar un array
const carroCompra = [
  { nombre: 'Teclado', precio: 110 },
  { nombre: 'Televisión', precio: 1300 },
  { nombre: 'Portátil', precio: 600 },
  { nombre: 'Auriculares', precio: 30 },
  { nombre: 'Monitor', precio: 350 },
  { nombre: 'Móvil', precio: 900 },
  { nombre: 'Tablet', precio: 250 },
];

carroCompra.forEach((producto) =>
  console.log(`${producto.nombre} - ${producto.precio}`)
);

//! map para iterar un array
const mapRetornaNuevoArray = carroCompra.map(
  (producto) => producto.precio > 300
);
console.table(mapRetornaNuevoArray);
