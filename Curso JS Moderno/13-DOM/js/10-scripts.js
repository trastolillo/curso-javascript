//! Generar HTML
// Antes de añadirlo podemos modificar atributos
const enlace = document.createElement('a');
enlace.textContent = 'Nuevo enlace';
enlace.href = 'http://www.google.com';
enlace.target = '_blank';
enlace.setAttribute('data-enlace', 'nuevo-enlace');
enlace.classList.add('otra/clase');
console.log(enlace);
enlace.onclick = miFuncion;
const navegacion = document.querySelector('.navegacion');
// Una manera
navegacion.appendChild(enlace);
// Otra controlando la posición
navegacion.insertBefore(enlace, navegacion.children[1]);

function miFuncion() {
  alert('Diste click, caquitas');
}
// Ahora con las cards de la página de ejemplo
const parrafo1 = document.createElement('p');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria', 'concierto');
console.log(parrafo1);
const parrafo2 = document.createElement('p');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add = 'titulo';
const parrafo3 = document.createElement('p');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add = 'precio';

// Ahora creamos el div con la clase info
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

// Crear la imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';
imagen.alt = 'Texto alternativo';

// Crear el card
const card = document.createElement('div');
card.classList.add('card');
card.appendChild(imagen);
card.appendChild(info);
console.log(card);

// Insertar en el HTML
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.insertBefore(card, contenedor.children[0]);
