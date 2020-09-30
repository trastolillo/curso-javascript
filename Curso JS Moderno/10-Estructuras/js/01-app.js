//! switch
const metodoPago = 'efectivo';
switch (metodoPago) {
  case 'efectivo':
    pagar();
    console.log('Tengo efectivo');
    break;
  default:
    console.log('No has pagado');
}

function pagar() {
  console.log('Pagando...');
}

//! Operadores ternarios
const logeado = true;
const puedePagar = true;
const efectivo = 200;
function checkLogin() {
  return logeado && puedePagar
    ? efectivo > 400
      ? 'Puedes pagar en efectivo, Caquitas...'
      : 'Paga con tarjeta'
    : 'No estás logueado, Caquitas!';
}
console.log(checkLogin());
