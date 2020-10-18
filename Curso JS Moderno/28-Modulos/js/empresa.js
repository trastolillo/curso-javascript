//! Heredar una clase que está siendo importada
import { Cliente } from './cliente.js';

export class Empresa extends Cliente {
  constructor(nombre, ahorro, categoria) {
    super(nombre, ahorro);
    this.categoria = categoria;
  }

  mostrarInformacion() {
    console.log(
      `Cliente: ${this.nombre} - Ahorro: ${this.ahorro} - Categoría: ${this.categoria}`
    );
  }
}
