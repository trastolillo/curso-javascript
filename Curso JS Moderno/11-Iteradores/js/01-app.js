'use strict';
//! for loop
for (let i = 0; i < 10; i++) {
  if (i === 6) {
    console.log('seis');
    continue;
  }
  if (i === 8) break;
  if (i % 2 === 0) console.log(i);
}

const carrito = [
  { nombre: 'Teclado', precio: 110 },
  { nombre: 'Televisión', precio: 1300 },
  { nombre: 'Portátil', precio: 600 },
  { nombre: 'Auriculares', precio: 30 },
  { nombre: 'Monitor', precio: 350 },
  { nombre: 'Móvil', precio: 900 },
  { nombre: 'Tablet', precio: 250 },
];

for (let i in carrito) {
  console.log(carrito[i].nombre);
}

//! Reto del Fizz Buzz
// Elementos del 0 al 100. Múltiplos de 3 sacan por consola 'Fizz'. Los de 5,
// 'Buzz'. Y los múltiplos de 3 y de 5 deben imprimir Fizz Buzz.

for (let i = 1; i < 101; i++) {
  let salida = '';
  if (i % 3 == 0) {
    salida += 'FIZZ ';
    console.log(`Número ${i}: ${salida}`);
  }
  if (i % 5 == 0) {
    salida += 'BUZZ';
    console.log(`Número ${i}: ${salida}`);
  }
}

//! forEach y map
const pendientes = [
  'Tarea',
  'Comer',
  'Proyecto',
  'Estudiar',
  'Hablar con Caquitas',
];

pendientes.forEach((element, index) => console.log(`${index}: ${element}`));
carrito.forEach((element) => console.log(element));
const nuevoCarrito = carrito.map((element) => element.nombre);
console.table(nuevoCarrito);

//! for..of y for..in
// Itera el valor. Itera sobre arrays
for (let pendiente of pendientes) {
  console.log(pendiente);
}
const automovil = {
  modelo: 'Fiesta',
  year: 1977,
  motor: 'Gasolina',
};

// for (let propiedad of automovil) {
//   console.log(propiedad); // Error 'propiedad' no es iterable
// }

// Itera el index. Itera sobre objetos
for (let propiedad in automovil) {
  console.log(propiedad);
}
for (let i in pendientes) {
  console.log(i);
}

//! Novedad en ecmascript7
for (let [llave, valor] of Object.entries(automovil)) {
  console.log(`LLave: ${llave} - Valor: ${valor}`);
}
