const producto = 'Monitor 20 pulgadas';

//! repeat para repetir una cadena de texto
const texto = 'en promoción'.repeat(3);
console.log(texto);
console.log(`${producto} ${texto} `);

//! split para dividir una cadena de texto
const actividad = 'Estoy aprendiendo, Caquitas';
const actividadSplit = actividad.split(' ');
console.log(actividad.split(' ')); // Retorna un array
console.log(actividadSplit[1]); // aprendiendo,

const hobbies =
  'Leer, caminar, escuchar música, escribir, aprender a programar';
const hobbie = hobbies.split(', ');
console.log(hobbie);
