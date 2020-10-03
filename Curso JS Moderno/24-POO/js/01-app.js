// Class expression
const UnaClase = class {};
// Class declaration
class Cliente {
  #nombre;
  constructor(nombre, saldo) {
    // con # la propiedad se convierte en privada
    this.#nombre = nombre;
    this.saldo = saldo;
  }

  getNombre() {
    return this.#nombre;
  }

  mostrarInformacion() {
    return `Cliente: ${this.#nombre}, Saldo: ${this.saldo}`;
  }

  static bienvenida() {
    return 'Bienvenido al cajero, toma tu pasta';
  }
}

//! Herencia
class Empresa extends Cliente {
  constructor(nombre, saldo, telefono, categoria) {
    super(nombre, saldo);
    this.telefono = telefono;
    this.categoria = categoria;
  }

  // Sobreescritura
  static bienvenida() {
    return 'Bienvenido a la empresa';
  }
}

const caquitas = new Cliente('Caquitas', 400);
console.log(caquitas.mostrarInformacion());
console.log(Cliente.bienvenida());
console.log(caquitas);
const empresa = new Empresa(
  'Empresaurios, S.A.',
  100,
  66664003,
  'Explotadores'
);
console.log(empresa.mostrarInformacion());
console.log(Empresa.bienvenida());
console.log(empresa);
console.log(empresa.getNombre());
