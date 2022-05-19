"use strict";
// resolve estos ejercicios usando recursión

// Binary Seach Tree
// 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
// corre breadth-first cuando breadthFirstForEach() es ejecutado
// Observar imagen de la carpeta "homework" llamada "bst.png". Allí encontraran dibujado el arbol utilizado para los tests
function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.insert = function (value) {
  if (value > this.value) {
    // El valor que quiero insertar es más grande que el nodo actual
    if (!this.right) {
      // La posición está libre
      this.right = new BinarySearchTree(value);
    } else {
      // La posición está ocupada
      this.right.insert(value);
    }
  } else {
    // El valor que quiero insertar es menor que el nodo actual
    if (!this.left) {
      // La posición está libre
      this.left = new BinarySearchTree(value);
    } else {
      // La posición está ocupada
      this.left.insert(value);
    }
  }
};

BinarySearchTree.prototype.contains = function (value) {
  if (value === this.value) {
    return true;
  }
  if (value > this.value) {
    if (!this.right) {
      return false;
    }
    return this.right.contains(value);
  } else {
    if (!this.left) {
      return false;
    }
    return this.left.contains(value);
  }
};

// Validando si el dato a buscar es menor

/* BinarySearchTree.prototype.contains = function (value) {
  if (value === this.value) {
    return true;
  }
  if (value < this.value) {
    if (!this.left) {
      return false;
    }
    return this.left.contains(value);
  } else {
    if (!this.right) {
      return false;
    }
    return this.right.contains(value);
  }
}; */

BinarySearchTree.prototype.depthFirstForEach = function (
  cb,
  order = "in-order"
) {
  switch (order) {
    case "in-order": {
      // izq - root - der
      this.left?.depthFirstForEach(cb, order);
      cb(this.value);
      this.right?.depthFirstForEach(cb, order);
      break;
    }
    case "pre-order": {
      // root - izq - der
      cb(this.value);
      this.left?.depthFirstForEach(cb, order);
      this.right?.depthFirstForEach(cb, order);
      break;
    }
    case "post-order": {
      // izq - der - root
      this.left?.depthFirstForEach(cb, order);
      this.right?.depthFirstForEach(cb, order);
      cb(this.value);
      break;
    }
  }
};

// Otra forma de resolverlo usando if

/* BinarySearchTree.prototype.depthFirstForEach = function (cb, order) {
  if (!order || order === "in-order") {
    // izq - root - der
    if (this.left) this.left.depthFirstForEach(cb, order);
    // this.left && left.depthFirstForEach(cb, order)
    cb(this.value);
    if (this.right) this.right.depthFirstForEach(cb, order);
  } else if (order === "pre-order") {
    // root - izq - der
    cb(this.value);
    if (this.left) this.left.depthFirstForEach(cb, order);
    if (this.right) this.right.depthFirstForEach(cb, order);
  } else {
    // izq - der - root
    if (this.left) this.left.depthFirstForEach(cb, order);
    if (this.right) this.right.depthFirstForEach(cb, order);
    cb(this.value);
  }
}; */

BinarySearchTree.prototype.breadthFirstForEach = function (cb, array = []) {
  if (this.left) array.push(this.left);
  if (this.right) array.push(this.right);
  cb(this.value);
  /* let next = array.shift();
  if (next) {
    next.breadthFirstForEach(cb, array);
  } */
  array.length && array.shift().breadthFirstForEach(cb, array);
};

BinarySearchTree.prototype.size = function () {
  if (!this.left && !this.right) {
    return 1;
  }
  // Nodo con un solo hijo izquierdo
  if (!this.right) {
    return 1 + this.left.size();
  }
  // Nodo con un solo hijo derecho
  if (!this.left) {
    return 1 + this.right.size();
  }
  return 1 + this.left.size() + this.right.size();
};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
