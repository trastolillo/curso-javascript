//! IIFE - Mantiene el encapsulamiento
// Inconveniente - no son facilmente accesibles
(function () {
  console.log('Desde un IIFE');

  const nombreCliente = 'Caquitas';
  window.variableGlobal = 'Soy una variable global';
})();

console.log(variableGlobal);

//! Exportar variables
export const nombreCliente = 'Caquitillas';
export const ahorro = 200;

//! Exportar funciones
export function mostrarInformacion(cliente, ahorro) {
  return `Cliente: ${cliente} - Ahorro: ${ahorro}`;
}
export function tieneSaldo(ahorro) {
  console.log(ahorro > 0);
}

//! Exportar una clase
export class Cliente {
  constructor(nombre, ahorro) {
    this.nombre = nombre;
    this.ahorro = ahorro;
  }

  mostrarInformacion() {
    console.log(`Cliente: ${this.nombre} - Ahorro: ${this.ahorro}`);
  }
}

//! Export default
// Sólo puede haber un export default por archivo
export default function () {
  console.log('este es el export default');
}
