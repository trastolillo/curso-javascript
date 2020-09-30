//! Casting
const cadena = '20';
const numero = 30;
const cadenaFloat = '2.2';

let castingANumber = Number.parseInt(cadena); // 20
typeof castingANumber; // Number
castingANumber = Number.parseFloat(cadenaFloat); // 2.2
typeof castingANumber; // Number

//! Comprobaciones
Number.isInteger(2.2); // false
