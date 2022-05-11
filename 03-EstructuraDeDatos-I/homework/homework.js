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

function nFibonacci(n) {
  // Secuencia de Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,…
  // Retorna el enésimo numero de la serie
  // nFibonacci(0) // 0  // el elemento 0 es cero
  // nFibonacci(1) // 1 // el elemento 1 es 1
  // nFibonacci(6) // 1 // el elemento 6 es 8
  if (n === 0) return 0;
  else {
    if (n === 1) return 1;
  }
  return nFibonacci(n - 1) + nFibonacci(n - 2);
  // nFibonacci(6) = nFibonacci(5) + nFibonacci(6 - 2) = 5 + 3 = 8
  // nFibonacci(5) = nFibonacci(4) + nFibonacci(5 - 2) = 3 + 2 = 5
  // nFibonacci(4) = nFibonacci(3) + nFibonacci(4 - 2) = 2 + 1 = 3
  // nFibonacci(3) = nFibonacci(2) + nFibonacci(3 - 2) = 1 + 1 = 2
  // nFibonacci(2) = nFibonacci(1) + nFibonacci(2 - 2) = 1 + 0 = 1
}
console.log(nFibonacci(6));

// Para esta parte no es necesario utilizar recursión.
// Implementa la clase Queue que debe contener los siguientes métodos:
// enqueue: Agrega un valor a la queue. Respeta el orden existente.
// dequeue: Remueve un valor de la queue. Obedece a FIFO y respeta el underflow (devuelve undefined cuando la queue tiene size cero, o sea, cuando no tiene ningún elemento).
// size: Devuelve el número de elementos que contiene la queue.

function Queue() {}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci,
};
