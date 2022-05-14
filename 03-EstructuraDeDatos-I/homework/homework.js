"use strict";
// Las funciones nFactoria y nFibonacci deben resolverlas
// usando recursión. Una vez realizadas de esa forma pueden probar hacerlas
// de forma iterativa pero esto último no es obligatorio.

function nFactorial(n) {
  // devolvé el factorial de n (n!)
  // ej:
  // el factorial de 3 es 6 (3 * 2 * 1)
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * nFactorial(n - 1);
  // nFactorial(6) = 6 * nFactorial(5) = 6 * 120 = 720
  // nFactorial(5) = 5 * nFactorial(4) = 5 * 24 = 120
  // nFactorial(4) = 4 * nFactorial(3) = 4 * 6 = 24
  // nFactorial(3) = 3 * nFactorial(2) = 3 * 2 = 6
  // nFactorial(2) = 2 * nFactorial(1) = 2 * 1 = 2
  // nFactorial(1) = 1
}
console.log(nFactorial(6));

/* // Con for
function nFactorial(n) {
  nFactorial[0] = 1;
  nFactorial[1] = 1;
  for (var i = 2; i <= n; i++) {
    nFactorial[i] = i * nFactorial[i - 1];
  }
  return nFactorial[n];
}
console.log(nFactorial(6)); */

function nFibonacci(n) {
  // Secuencia de Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,…
  // Retorna el enésimo numero de la serie
  // nFibonacci(0) // 0  // el elemento 0 es cero
  // nFibonacci(1) // 1 // el elemento 1 es 1
  // nFibonacci(6) // 1 // el elemento 6 es 8
  if (n <= 1) {
    return n;
  }
  return nFibonacci(n - 1) + nFibonacci(n - 2);
  // nFibonacci(6) = nFibonacci(5) + nFibonacci(6 - 2) = 5 + 3 = 8
  // nFibonacci(5) = nFibonacci(4) + nFibonacci(5 - 2) = 3 + 2 = 5
  // nFibonacci(4) = nFibonacci(3) + nFibonacci(4 - 2) = 2 + 1 = 3
  // nFibonacci(3) = nFibonacci(2) + nFibonacci(3 - 2) = 1 + 1 = 2
  // nFibonacci(2) = nFibonacci(1) + nFibonacci(2 - 2) = 1 + 0 = 1
}
console.log(nFibonacci(6));

/* // Con for
function nFibonacci(n) {
  nFibonacci[0] = 0;
  nFibonacci[1] = 1;
  for (let i = 2; i <= n; i++) {
    nFibonacci[i] = nFibonacci[i - 1] + nFibonacci[i - 2];
  }
  return nFibonacci[n];
}
console.log(nFibonacci(6)); */

// Para esta parte no es necesario utilizar recursión.
// Implementa la clase Queue que debe contener los siguientes métodos:
// enqueue: Agrega un valor a la queue. Respeta el orden existente.
// dequeue: Remueve un valor de la queue. Obedece a FIFO y respeta el underflow (devuelve undefined cuando la queue tiene size cero, o sea, cuando no tiene ningún elemento).
// size: Devuelve el número de elementos que contiene la queue.

function Queue() {
  this.__Queue__ = [];
  /*   this.enqueue = function (value) {
    this.__Queue__.push(value);
  };
  this.dequeue = function () {
    return this.__Queue__.shift();
  };
  this.size = function () {
    return this.__Queue__.length;
  }; */
}

Queue.prototype.enqueue = function (value) {
  this.__Queue__.push(value);
};

Queue.prototype.dequeue = function () {
  return this.__Queue__.shift();
};

Queue.prototype.size = function () {
  return this.__Queue__.length;
};

/* // Con clase
class Queue {
  constructor() {
    this.__Queue__ = [];
  }
  enqueue(value) {
    this.__Queue__.push(value);
  }
  dequeue() {
    return this.__Queue__.shift();
  }
  size() {
    return this.__Queue__.length;
  }
} */

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue();
console.log(queue);
queue.dequeue();
queue.dequeue();
queue.dequeue();
console.log(queue);
console.log(queue.dequeue());
console.log(queue.size());

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci,
};

// Binario a decimal usando recursión
function BinarioADecimal(num1) {
  var res = 0;
  var num2 = Array.from(num1);

  if (num2.length === 1) {
    return (res += num2[0] * 1);
  }

  // Variable de elevación
  var i = num2.length - 1;

  // Calcular el binario
  var res = num2[0] * Math.pow(2, i);

  console.log(res);

  // Modificación de número para llamarlo
  var num3 = num2.shift();

  // Llamada recursiva
  return res + BinarioADecimal(num2);
}

//Decimal a binario usando recursión
function DecimalABinario(num) {
  if (num === 1) {
    return "1";
  }
  return DecimalABinario(Math.floor(num / 2)) + (num % 2);
}
