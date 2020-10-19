//! Set
const carrito = new Set();
carrito.add('Camisa');
carrito.add('Disco 1');
carrito.add('Camisa'); // No lo agrega, no valores repetidos
carrito.has('Camisa'); // true
carrito.delete('Disco 1'); // Borra y devuelve true si borra o false si no
carrito.clear();
carrito.add('otro');
carrito.add('otro2');
carrito.add('otro3');
carrito.forEach((producto, index, pertenece) => {
  console.log('producto: ' + producto);
  console.log('index: ' + index);
  console.log(pertenece);
});
console.log(carrito.size);
console.log(carrito);

// Ejemplo: eliminar duplicados de un array
const numeros = [10, 20, 30, 40, 50, 10, 20];
const noDuplicados = new Set(numeros);
console.log(noDuplicados);

//! set débil o WeakSet
// No son iterables
// No disponen de propiedad .size
const weakset = new WeakSet(); // Sólo se le  pueden pasar objetos

const cliente = {
  nombre: 'Gabi',
  saldo: 300,
};

weakset.add(cliente);

console.log(weakset);

//! Maps
// Un objeto con una sola propiedad
// A diferencia de los objetos, la llave puede ser cualquier tipo de dato
const clienteMap = new Map();
clienteMap.set('nombre', 'Caquitas');
clienteMap.set('tipo', 'Premium');
clienteMap.set('saldo', 3000);
clienteMap.set([0], true);
console.log(clienteMap);
console.log(clienteMap.size);
console.log(clienteMap.get('nombre')); // Devuelve un valor

const paciente = new Map([
  ['nombre', 'paciente'],
  ['cuarto', 'no definido'],
]);
console.log(paciente);

paciente.forEach((dato, llave) => console.log(dato, llave));

//! WeakMap
// Sirven bien para mantener una serie de datos como privados
const producto = {
  idProducto: 10,
};
const weakMap = new WeakMap();
weakMap.set(producto, 'Monitor');
console.log(weakMap.has(producto)); // true
console.log(weakMap.get(producto)); // Monitor

//! Symbols
const sym = Symbol();
const sym2 = Symbol();
// Ningún symbol es igual a otro
console.log(sym === sym2); // false

const nombre = Symbol();
const apellido = Symbol();
const persona = {};
persona[nombre] = 'Caquitas';
persona[apellido] = 'Blanditas';
persona.tipoCliente = 'Premium';
persona.saldo = 500;
console.log(persona);
// No funciona la nomenclatura del punto
console.log(persona.nombre); // undefined
console.log(persona[nombre]); // Caquitas
// Las propiedades que usan un symbol no son iterables
// Se puede definir una descripción del symbol
const nombreCliente = Symbol('Nombre del cliente');
const unCliente = {};
unCliente[nombreCliente] = 'Pedro';
console.log(unCliente);
