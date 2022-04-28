"use strict";

function BinarioADecimal(num) {
  // tu codigo aca
  //            ^     ---> sentido recorro
  //            2 1 0 ---> posición
  //Recibo string
  //Tomar cada número y multiplicarlo por el resultado de 2 elevado a la posición de atrás para hacia adelante
  //Retornar ese valor binario en string convertido a decimal

  console.log(num);
  console.log(typeof num);
  var decimal = 0;
  for (var i = 0; i < num.length; i++) {
    decimal += num[i] * Math.pow(2, num.length - 1 - i);
  }
  return decimal;

  /*let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += num[i] * 2 ** (num.length - i - 1);
  }
  return sum;*/

  //return parseInt(num, 2);
}

function DecimalABinario(num) {
  //7
  // tu codigo aca

  var binario = [];

  while (num > 0) {
    binario.unshift(num % 2); //agrega al inicio
    num = Math.floor(num / 2); // 7 / 2 --> 3,5 --> 3 --> 1,5 --> 1
  }

  return binario.join(""); // [1, 1, 1].join("") = "111"

  /*let numero = "";
  while (num > 0) {
    numero = (num % 2) + numero;
    num = Math.floor(num / 2);
  }
  return numero;*/

  //return num.toString(2);

  //return parseInt(num, 10).toString(2);
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
