"use strict";
// Implementa la clase LinkedList
// tiene metodos `add`, `remove`, y `search`
// add: Agrega un nuevo nodo en el final de la lista
// Ej:      Head --> null
// add(1):  Head --> 1 --> null
// add(2):  Head --> 1 --> 2 --> null
// remove:  Elimina el último nodo de la lista y devuelve su valor. (Tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía)
// Ej:         Head --> 1
// remove():   Head --> null y devuelve 1
// search: Busca un valor dentro de la lista. Puede recibir un valor o una función. Si no hubiera resultados, devuelve null.

function LinkedList() {
  this.length = 0;
  this.head = null;
}

function Node(value) {
  this.value = value;
  this.next = null;
}

LinkedList.prototype.add = function (value) {
  let node = new Node(value);
  var current = this.head;
  //La lista está vacía
  if (!current) {
    // current === null
    this.head = node; //Insertando el nodo
  } else {
    //Hay elementos en la lista
    while (current.next) {
      current = current.next;
    }
    current.next = node; //Inserto el nodo
  }
  this.length++;
  return node;
};

/* LinkedList.prototype.add = function (value) {
  var node = new Node(value);
  var current = this.head;

  if (!current) {
    this.head = node;
    this._length++;
    return node;
  }
  while (current.next) {
    current = current.next;
  }
  current.next = node;
  this._length++;
  return node;
}; */

LinkedList.prototype.remove = function () {
  let current = this.head;
  //Si la lista está vacía
  if (this.length === 0) return null;
  else if (this.length === 1) {
    let value = current.value; // 'Hola'
    this.head = null;
    this.length--;
    return value;
  }
  while (current.next.next) {
    current = current.next; //me desplazo por la lista
  }
  let value = current.next.value;
  current.next = null;
  this.length--;
  return value;
};

/* LinkedList.prototype.remove = function () {
  let value;
  const current = this.head;
  if (!current) {
    value = null;
  } else if (!current.next) {
    value = current.value;
    this.head = null;
    this.length--;
    return value;
  } else {
    while (current.next.next) {
      current = current.next;
    }
    value = current.next.value;
    current.next = null;
  }
  this.length--;
  return value;
}; */

LinkedList.prototype.search = function (value) {
  let current = this.head;
  while (current) {
    if (current.value === value) {
      return current.value;
    } else if (typeof value === "function") {
      if (value(current.value)) {
        return current.value;
      }
    }
    current = current.next;
  }
  return null;
};

LinkedList.prototype.getAll = function () {
  var current = this.head; //empezamos en la cabeza

  if (!current) {
    //current === null
    console.log("La lista esta vacia!");
    return;
  }
  while (current) {
    // current === value
    console.log(current.value);
    current = current.next; // se desplaza al siguiente nodo
  }
  return;
};

const lista = new LinkedList();

lista.add("Miguel");
lista.add("Walter");
lista.add("Jimmy");

console.log(lista);

// Hash Table( ver información en: https://es.wikipedia.org/wiki/Tabla_hash)
// Una Hash table contiene un arreglo de "contenedores" o buckets donde puede guardar información.
// Para este ejercicio, generar 35 buckets para la Hash Table, y realizar los métodos, get, hasKey
// Para almacenar un valor asociado a una key (string):
//    - Se pasa ese valor a la función hash(Pista: usar la función charCodeAt), que determina la posición en que debe ir en el arreglo.
//    - Luego el elemento se inserta(llamando al método set) en la posición(índice) devuelta.
// Para buscar el valor por su key:
//    - Sólo habrá que pasarle a la función hash la clave del elemento a buscar y ésta determinará la posición
//      en que se encuentra.
//    - Usar el número obtenido, para buscar(llamando al método get) el contenedor o bucket donde está el valor.
//    - Retornar dicho valor.

function HashTable() {
  this.numBuckets = 35;
  this.buckets = [];
}

HashTable.prototype.hash = function (value) {
  let sum = 0;
  for (let i = 0; i < value.length; i++) {
    sum += value.charCodeAt(i);
  }
  return sum % this.numBuckets;
};

HashTable.prototype.set = function (key, value) {
  if (typeof key != "string") {
    throw new TypeError("Keys must be strings");
  }
  const index = this.hash(key);
  this.buckets[index] = this.buckets[index] || [];
  this.buckets[index].unshift({ key: key, value: value });
};

HashTable.prototype.get = function (key) {
  const index = this.hash(key);
  let array = this.buckets[index];
  for (let i = 0; i < array.length; i++) {
    if (array[i].key === key) {
      return array[i].value;
    }
  }
  return false;
};

HashTable.prototype.hasKey = function (key) {
  if (this.get(key)) {
    return true;
  } else {
    return false;
  }
};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
