import nuevaFuncion, {
  nombreCliente,
  ahorro,
  mostrarInformacion,
  tieneSaldo,
  Cliente,
} from './cliente.js';
// Importar Empresa
import { Empresa } from './empresa.js';

console.log(nombreCliente, ahorro);
console.log(mostrarInformacion(nombreCliente, ahorro));
tieneSaldo(ahorro);

const cliente = new Cliente(nombreCliente, ahorro);
cliente.mostrarInformacion();

const empresa = new Empresa('Caquitas SA', 4000, 'Desatranques');
empresa.mostrarInformacion();

nuevaFuncion(); // se importa con un alias, podría tener otro nombre
