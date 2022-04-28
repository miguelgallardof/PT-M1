"use strict";

function BinarioADecimal(num) {
  // tu codigo aca
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += num[i] * 2 ** (num.length - i - 1);
  }
  return sum;
  //return parseInt(num, 2);
}

function DecimalABinario(num) {
  // tu codigo aca
  let numero = "";
  while (num > 0) {
    numero = (num % 2) + numero;
    num = Math.floor(num / 2);
  }
  return numero;
  //return num.toString(2);
  //return parseInt(num, 10).toString(2);
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
