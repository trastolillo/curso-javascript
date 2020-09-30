// Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];
// EventListeners
eventListeners();
function eventListeners() {
  document.addEventListener('DOMContentLoaded', () => {
    tweets = JSON.parse(localStorage.getItem('tweets')) || [];
    console.log(tweets);
    crearHTML();
  });
  formulario.addEventListener('submit', agregarTweet);
}
// Funciones
function agregarTweet(e) {
  e.preventDefault();
  // Area donde el usuario escribe
  const tweet = document.querySelector('#tweet').value;
  // Validación
  if (tweet === '') {
    mostrarError('No se puede enviar un tweet vacío');
    return; // Evita que continue el flujo de código
  }
  // Agregar tweet
  const tweetObj = {
    id: Date.now(),
    tweet, // Es igual a tweet: tweet
  };
  tweets = [...tweets, tweetObj];
  console.log(tweets);
  // Agregar HTML
  crearHTML();
  // Reiniciar el formulario
  formulario.reset();
}

function mostrarError(error) {
  const mensajeError = document.createElement('p');
  mensajeError.textContent = error;
  mensajeError.classList.add('error');
  const contenido = document.querySelector('#contenido');
  contenido.appendChild(mensajeError);
  setTimeout(() => {
    mensajeError.remove();
  }, 3000);
}

function crearHTML() {
  limpiarHTML();
  if (tweets.length > 0) {
    tweets.forEach((tweet) => {
      // Crea un botón para eliminar los tuits añadidos
      const btnEliminar = document.createElement('a');
      btnEliminar.classList.add('borrar-tweet');
      btnEliminar.innerText = 'x';
      btnEliminar.onclick = () => {
        borrarTweet(tweet.id);
      };
      const li = document.createElement('li');
      li.innerText = tweet.tweet;
      // Asignar el botón
      li.appendChild(btnEliminar);
      listaTweets.appendChild(li);
    });
  }
  sincronizarStorage();
}

function sincronizarStorage() {
  localStorage.setItem('tweets', JSON.stringify(tweets));
}

function borrarTweet(id) {
  tweets = tweets.filter((tweet) => tweet.id !== id);
  crearHTML();
}

function limpiarHTML() {
  while (listaTweets.firstChild) {
    listaTweets.removeChild(listaTweets.firstChild);
  }
}
