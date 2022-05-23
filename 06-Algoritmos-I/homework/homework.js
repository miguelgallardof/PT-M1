"use strict";
// No cambies los nombres de las funciones.

// 18 / 2
//  9 / 3
//  3 / 3
//  1 --> [1, 2, 3, 3]

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let primeNumbers = [1];
  let div = 2;
  while (num !== 1) {
    if (num % div === 0) {
      // 180 / 2 -> residuo es 0
      primeNumbers.push(div);
      num = num / div; // num = 180 / 2 = 90
    } else {
      div++;
    }
  }
  return primeNumbers;
}

// [5, 1, 4, 2, 8]
// [1, 5, 4, 2, 8]
// [1, 4, 5, 2, 8]
// [1, 2, 4, 5, 8]

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let swap = true;
  while (swap) {
    swap = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        let aux = array[i];
        array[i] = array[i + 1];
        array[i + 1] = aux;
        swap = true;
      }
    }
  }
  return array;
}

// [5, 1, 4, 2, 8]
// [1, 5, 4, 2, 8]
// [1, 4, 5, 2, 8]
// [1, 2, 4, 5, 8]

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  for (let i = 1; i < array.length; i++) {
    // i = 1
    let aux = array[i];
    let j = i - 1; // j = 0
    while (j >= 0 && array[j] > aux) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = aux;
  }
  return array;
}

// [5, 1, 4, 2, 8]
// [1, 5, 4, 2, 8]
// [1, 4, 5, 2, 8]
// [1, 2, 4, 5, 8]

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    let aux = array[i];
    if (min !== i) {
      array[i] = array[min]; // array[0] = array [1]
      array[min] = aux;
    }
  }
  return array;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
