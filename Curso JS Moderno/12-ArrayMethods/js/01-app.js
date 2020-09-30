'use strict';

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
  { nombre: 'Monitor 27 Pulgadas', precio: 500 },
  { nombre: 'Televisión', precio: 100 },
  { nombre: 'Tablet', precio: 200 },
  { nombre: 'Audifonos', precio: 300 },
  { nombre: 'Teclado', precio: 400 },
  { nombre: 'Celular', precio: 700 },
];

//! Comprobar si un valor existe en un array
// include no vale para arrays de objetos
meses.includes('Enero'); // true
// En arrays de objetos:
carrito.some((producto) => producto.nombre == 'Tablet'); // true

//! findIndex
meses.findIndex((mes) => mes == 'Abril'); // 3
meses.findIndex((mes) => mes == 'String que no está'); // -1

// Encontrar índice en un array de objetos
// Retorna el índice del primer elemento que encuentre
carrito.findIndex((producto) => producto.precio == 100); // 1

//! .reduce
// El 0 es el valor inicial de sumaAcumulada
let resultado = carrito.reduce(
  (sumaAcumulada, producto) => sumaAcumulada + producto.precio,
  0
);
console.log(resultado);

//! .filter
const filtrado = carrito.filter((producto) => producto.precio > 400);
console.table(filtrado);
const otroFiltrado = carrito.filter(
  (producto) => producto.nombre != 'Audífonos'
);
console.table(otroFiltrado);

//! .find
// Sólo retorna el primer elemento que cumple la condición. Para todos los
// resultados hay que usar .filter
const resultadoFind = carrito.find((producto) => producto.nombre == 'Tablet');
console.log(resultadoFind);

//! .every
// Cada uno de lo elementos debe cumplir la condición para que retorne true
// Para que se revise sólo si alguno lo cumple sería .some
carrito.every((producto) => producto.precio < 1000); // true

//! .concat
const meses2 = ['Agosto', 'Septiembre'];
const meses3 = ['Octubre', 'Noviembre', 'Diciembre'];
const mesesTotal = meses.concat(meses2);
console.log(mesesTotal);

//! rest o spread operator
const otraForma = [...meses, ...meses2, ...meses3];
console.log(otraForma);
// Con objetos
const unProducto = { nombre: 'Disco duro', precio: 300 };
const carrito2 = [...carrito, unProducto];
console.table(carrito2);
