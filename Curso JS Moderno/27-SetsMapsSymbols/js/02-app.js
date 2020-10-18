//! Iteradore personalizado
function crearIterador(carrito) {
  let i = 0;
  return {
    siguiente: () => {
      const fin = i >= carrito.length;
      const valor = !fin ? carrito[i++] : undefined;
      return {
        fin,
        valor,
      };
    },
  };
}

const carrito = ['producto 1', 'producto 2', 'producto 3'];

const recorrerCarrito = crearIterador(carrito);
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());

//! Generadores
// Un generador es una función que retorna un iterador
function* crearGenerador() {
  yield 1;
  yield 'Caquitas';
  yield 3 + 3;
  yield false;
}

const iterador = crearGenerador();

console.log(iterador);
console.log(iterador.next());
console.log(iterador.next().value);
console.log(iterador.next().done);

// Generador para array
function* generadorCarrito(carrito) {
  for (let i = 0; i < carrito.length; i++) {
    yield carrito[i];
  }
}

const otroIterador = generadorCarrito(carrito);

console.log(otroIterador.next());

//! Iteradores
const ciudades = ['Londres', 'Santander', 'París'];
const ordenes = new Set([123, 231, 131, 102]);
const datos = new Map();
datos.set('Nombre', 'Caquitas');
datos.set('Profesión', 'Sus labores');

// Iterador entries
for (let entry of ciudades.entries()) {
  console.log(entry); // Imprime llave (index) y valor
}

for (let entry of ordenes.entries()) {
  console.log(entry); // Imprime llave (index) y valor
}

// Iterador Values
for (let value of datos.values()) {
  console.log(value); // Imprime valores
}

// Iterador Keys
for (let keys of ciudades.keys()) {
  console.log(keys); // Imprime las claves
}

// Iterador por default
// Cada tipo tiene su propio iterador
for (let ciudad of ciudades) {
  console.log(ciudad);
}

for (let orden of ordenes) {
  console.log(orden);
}

for (let dato of datos) {
  console.log(dato);
}
