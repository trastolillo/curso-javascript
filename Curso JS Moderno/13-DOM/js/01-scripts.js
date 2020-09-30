let elemento;
elemento = document.all;
elemento = document.head;
elemento = document.body;
elemento = document.domain; // url actual
elemento = document.forms; // Lista los formularios en un array htmlCollection
console.log(elemento);
elemento = document.forms[0].id;
console.log(elemento);
elemento = document.forms[0].id;
elemento = document.forms[0].method; // post (forma de envio de datos)
elemento = document.forms[0].classLst; // clases que tiene el formulario
elemento = document.forms[0].action; // accion que realiza al pulsar enviar
elemento = document.links; // .. Todos los enlaces en un htmlCollection
elemento = document.links[4].className; // Un enlace concreto
console.log(elemento);
elemento = document.images; // Número de imágenes
elemento = document.scripts; // Número de scripts - archivos js
