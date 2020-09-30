//! Habilitar el uso estricto
'use strict';

//! Object literal
const producto = {
  nombre: 'Monitor',
  precio: 300,
  disponibilidad: true,
};

//! Sintaxis de punto
console.log(producto.precio);
console.log(producto['precio']);

//! Agregar propiedades
producto.imagen = 'imagen.jpg';
console.log(producto);

//! Eliminar propiedades
delete producto.disponibilidad;
console.log(producto);

//! Asignar valores de propiedades a una variable
// Forma antigua
const nombreAntiguo = producto.nombre;
// Nueva manera ecmascript6 - Desestructurar (Destructuring):
const { nombre, precio } = producto;
console.log(nombre);
console.log(precio);

//! Crear un objeto dentro de otro objeto
const otroProducto = {
  nombre: 'Monitor',
  precio: 300,
  disponible: true,
  informacion: {
    medidas: { peso: '1Kg', medida: '1m' },
    fabricacion: { pais: 'China' },
  },
};
console.log(otroProducto);
console.log(otroProducto.informacion.medidas.peso); // 1kg

//! Destructuring en objetos complejos
const {
  disponible,
  informacion: {
    fabricacion: { pais },
  },
} = otroProducto;
console.log(pais);

//! Objetos inmutables (métodos)
Object.freeze(producto); // Convierte las propiedades en sólo lectura
//? producto.disponible = true; // error
Object.isFrozen(producto); // true
Object.seal(otroProducto); // No se puede agregar ni eliminar propiedades, pero sí modificar
otroProducto.disponible = false; // No hay error
//? otroProducto.imagen = 'nuevaPropiedad'; // Error
Object.isSealed(otroProducto); // true

//! Unir dos objetos
const currela = {
  nome: 'Paco',
  salario: 1000,
};
const vendor = {
  brand: 'Caquitas, s.a.',
  amount: 323,
};
const unaUnion = Object.assign(currela, vendor);
console.log(unaUnion);
// Spread operator o Rest operator
const otraUnion = { ...producto, ...vendor };
console.log(otraUnion);

//! Palabra clave 'this'
const name = 'Nombre en el scope global';
const objetoComplicado = {
  name: 'Mouse',
  precio: 200,
  disponible: true,
  mostrarInfo: function () {
    console.log(`El producto ${this.name} tiene un precio de ${this.precio}`);
  },
};
objetoComplicado.mostrarInfo();

//! Object constructor (forma antigua - JS ya permite clases)
function ProductoElectronica(nombre, precio) {
  this.nombre = nombre;
  this.precio = precio;
  this.disponible = true;
}
const unProductoElectronico = new ProductoElectronica('Monitor', 300);
console.log(unProductoElectronico);

//! Tres métodos para objetos
console.log(Object.keys(producto)); // Devuelve un array con las keys del objeto
console.log(Object.values(producto)); // Devuelve un array con los valores del objeto
console.log(Object.entries(producto)); // Devuelve un array con elementos clave:valor
