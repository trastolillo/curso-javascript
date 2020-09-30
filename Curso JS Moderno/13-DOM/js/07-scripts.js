//! Cambiar CSS
const encabezado = document.querySelector('h1');
console.log(encabezado);

// La apariencia es responsabilidad del CSS, este código es mejor no usarlo
encabezado.style.backgroundColor = 'red';
encabezado.style.fontFamily = 'Arial';
encabezado.style.textTransform = 'uppercase';

//! Cambiar clases css (el uso más común)
const card = document.querySelector('.card');
// .classlist devuelve un array, .classname devuelve un string
card.classList.add('nueva-clase', 'segunda-clase');
card.classList.remove('card');
console.log(card.classList);
