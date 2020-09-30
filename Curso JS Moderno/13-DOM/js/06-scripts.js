//! Modificando elementos del DOM
const seleccionandoEncabezado = document.querySelector('.contenido-hero h1');
console.log(seleccionandoEncabezado);

//! .innerText, .textContent, .innerHTML
console.log(seleccionandoEncabezado.innerText); // El texto dentro del h1 tal como se muestra en la página, condicionado al css (p ej. visibility: hidden no lo encuentra)
console.log(seleccionandoEncabezado.textContent); // El texto dentro del h1
console.log(seleccionandoEncabezado.innerHTML); // El código html dentro del h1

//! Cambiar contenidos
const nuevoHeading = 'Hola, Caquitas!';
seleccionandoEncabezado.textContent = nuevoHeading;

//! Cambiar imagen
const imagen = document.querySelector('.card img');
console.log(imagen);
imagen.src = 'img/hacer2.jpg';
