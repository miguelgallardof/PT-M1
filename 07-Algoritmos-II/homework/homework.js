"use strict";
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  // Caso de corte | Caso base
  if (array.length <= 1) {
    return array;
  }
  // Separar en left, pivot, right
  // let indexRandom = Math.random() * array.length; // Para pivot random
  var pivot = array[0];
  var left = [];
  var right = [];
  for (var i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  // Recursión
  return quickSort(left).concat(pivot, quickSort(right));
  //return quickSort(left).concat(pivot).concat(quickSort(right));
}

function merge(left, right) {
  // Implementar el método conocido como merge para unir dos arrays ordenados
  // Devolver el array resultante
  // Tu código:
  let leftIndex = 0;
  let rightIndex = 0;
  let result = [];
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  // Caso de corte | Caso base
  if (array.length === 1) return array;
  // Dividir el array en 2
  let mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid);
  // Recursión
  return merge(mergeSort(left), mergeSort(right));
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
