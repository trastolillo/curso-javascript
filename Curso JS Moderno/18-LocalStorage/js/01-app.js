//! Agregar elementos al LocalStorage
localStorage.setItem('nombre', 'Caquitas');
sessionStorage.setItem('nombre de Sesion', 'Caquitas de sesion');

const producto = {
  nombre: 'monitor',
  precio: 300,
};

// LocalStorage solo acepta strings, pero hay formas de almacenar objetos
// y arrays
const productoString = JSON.stringify(producto);
localStorage.setItem('productoString', productoString);

const meses = ['Enero', 'Febrero', 'Marzo'];
const mesesString = JSON.stringify(meses);
localStorage.setItem('meses', mesesString);

//! Recuperar los datos
const nombre = localStorage.getItem('nombre');
console.log(nombre); // Si no existe devuelve null
const productoJSON = localStorage.getItem('productoString');
console.log(JSON.parse(productoJSON));
const mesesJson = localStorage.getItem('meses');
console.log(JSON.parse(mesesJson));

//! Eliminar elementos del local storage
localStorage.removeItem('nombre');
// Borrar todo
localStorage.clear();

//! Actualizar un registro
localStorage.setItem('meses', JSON.stringify(meses));
const mesesArray = JSON.parse(mesesJson);
mesesArray.push('nuevo mes');
localStorage.setItem('meses', JSON.stringify(mesesArray));
