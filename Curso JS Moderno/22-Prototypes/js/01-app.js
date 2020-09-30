// Creamos un object a través de constructor
function Cliente(nombre, saldo) {
  this.nombre = nombre;
  this.saldo = saldo;
}
const caquitas = new Cliente('Caquitas', 200);
console.log(caquitas);

//! El problema de no usar prototypes
function formatearCliente(cliente) {
  const { nombre, saldo } = cliente;
  return `el cliente ${nombre} tiene un saldo de ${saldo}`;
}

// Estamos duplicando código innecesariamente
function formatearEmpresa(empresa) {
  const { nombre, saldo, categoria } = empresa;
  return `la empresa ${nombre} tiene un saldo de ${saldo} y pertenece a la categoria ${categoria}`;
}
console.log(formatearCliente(caquitas));

function Empresa(nombre, saldo, categoria) {
  this.nombre = nombre;
  this.saldo = saldo;
  this.categoria = categoria;
}

const caquitasSa = new Empresa('Caquitas SA', 4000, 'Cosas');
console.log(formatearEmpresa(caquitasSa));

//! Con prototypes
// Creamos un prototype
Cliente.prototype.tipoCliente = function () {
  let tipo;
  if (this.saldo > 10000) {
    tipo = 'Gold';
  } else if (this.saldo > 5000) {
    tipo = 'Platinum';
  } else {
    tipo = 'Normal';
  }
  return tipo;
};
Cliente.prototype.nombreClienteSaldo = function () {
  return `Nombre: ${this.nombre}, Saldo:${
    this.saldo
  }, Tipo de cliente: ${this.tipoCliente()}`;
};
Cliente.prototype.retiraSaldo = function (retira) {
  this.saldo -= retira;
};
const paco = new Cliente('Paco', 6000);
console.log(paco);
console.log(paco.tipoCliente());
paco.retiraSaldo(2000);
console.log(paco.nombreClienteSaldo());

//! Herencia

function Persona(nombre, saldo, telefono) {
  Cliente.call(this, nombre, saldo);
  this.telefono = telefono;
}
Persona.prototype = Object.create(Cliente.prototype);
Persona.prototype.constructor = Cliente;
const juan = new Persona('Juan', 5000, 299399234);
console.log(juan);
console.log(juan.nombreClienteSaldo());

Persona.prototype.mostrarTelefono = function () {
  return `El teléfono es ${this.telefono}`;
};
console.log(juan.mostrarTelefono());
console.log(juan.__proto__);
