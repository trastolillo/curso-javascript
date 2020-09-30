'use strict';
//! Declaración de función (Function Declaration)
sumar();
function sumar() {
  console.log(2 + 2);
}

//! Expresión de funcion (Function Expression)
// sumar2(); // Error
const sumar2 = function () {
  console.log(3 + 3);
};
sumar2();

/*
Hoisting:
En primer lugar, JS escanea el documento y registra las funciones y determina qué
variables va a crear, pero sin inicializarlas (Etapa de creación).
En la segunda vuelta, es la etapa de ejecución. Por eso en el caso de declaración
de función se puede llamar a la función antes de declararla, pero no en el caso
de expresión de funcíon.
*/

//! Funciones parte del core
// Colocando en consola el comando 'window' se listan todas

//! Métodos
const numero1 = 20;
const numero2 = '20';

parseInt(numero2); // Esto es una función
numero1.toString(); // Esto es un método

//! Parámetros y argumentos

function suma(a, b) {
  // Parámetros (valores genéricos)
  console.log(a + b);
}

suma(100, 200); // Argumentos (valores concretos)

//! Parámetros por defecto
function saludar(nombre = 'Desconocido', apellido = 'Sin apellido') {
  console.log(`Hola, ${nombre} ${apellido}`);
}
saludar('Caquitas');
saludar('Caquitas', 'Caquitoso');

//! Cómo se comunican las funciones entre ellas
iniciarApp();
function iniciarApp() {
  console.log('Iniciando app...');
  segundaFuncion();
}
function segundaFuncion() {
  console.log('Desde la segunda función...');
  usuarioAutenticado();
}
function usuarioAutenticado() {
  console.log('Autenticando...');
  console.log('Autorizado con éxito, Caquitas');
}

//! Funciones con return
function retornaSuma(a, b) {
  return a + b;
}
const resultado = retornaSuma(2, 4);
console.log(resultado);

let total = 0;
function agregarCarrito(precio) {
  return (total += precio);
}
function calcularImpuesto(total) {
  return total * 1.15;
}

agregarCarrito(300);
agregarCarrito(600);
agregarCarrito(100);
const totalPagar = calcularImpuesto(total);
console.log(total);
console.log(totalPagar);

//! Métodos de propiedad (funciones dentro de objetos)
const reproductor = {
  reproducir: function (id) {
    console.log(`Reproduciendo canción con el id ${id}`);
  },
  pausar: () => console.log('Pausando...'),
};
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar = function (id) {
  console.log(`Borrando canción número ${id}`);
};
reproductor.borrar(20);

//! Arrow functions - Funciones de flecha
// Con una línea el return es implícito (igual que en Dart)
const aprendiendo = (tecnologia, tecnologia2) =>
  `Estoy aprendiendo ${tecnologia}, Caquitas!! y ${tecnologia2}`;
console.log(aprendiendo('javascript', 'node.js'));

//! forEach y map con arrow functions
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
const mapRetornaNuevoArray = carroCompra.map((producto) => {
  if (producto.precio > 300) return producto;
});
// console.table(mapRetornaNuevoArray);

//! getter y setter con arrowfunction
const loro = {
  cancion: '',
  reproducir: (id) => console.log(`Reproduciendo canción con el id ${id}`),
  pausar: () => console.log('Pausando...'),
  set nuevaCancion(cancion) {
    this.cancion = cancion;
  },
  get obtenerCancion() {
    console.log(`${this.cancion}`);
  },
};
loro.nuevaCancion = 'Enter Sadman';
loro.obtenerCancion;
