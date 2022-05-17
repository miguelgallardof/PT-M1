function Node(data) {
  this.data = data;
  this.next = null;
}

function List() {
  this.length = 0;
  this.head = null;
}

const lista = new List(); // {length: 0, head: node1}
//const nodo1 = new Nodo('Kevin') // {data: 'Kevin', next: null}

lista.add("Kevin"); // {data: 'Kevin', next: null}
lista.add("Jose");
lista.add("Heric");

List.prototype.add = function (data) {
  //Agregar nodo al final de la lista
  var node = new Node(data); //{data: 'Heric', next: null}
  var current = this.head; // current = lista.head = node1

  // Si está vacia
  if (!current) {
    // current === null??
    this.head = node; // apunté head al nodo1
    this._length++;
    return node;
  }
  // Si no esta vacia, recorro hasta encontrar el último
  while (current.next) {
    //current.next !== null
    current = current.next; //desplazando al siguiente nodo
  }
  current.next = node; //Inserto el nuevo nodo
  this._length++;
  return node;
};

//head -> {data: 'Kevin', next: Jose} --> {data: 'Jose', next: Heric} --> {data: 'Heric', next: null}
//                                                                                      c

List.prototype.getAll = function () {
  var current = this.head; //empezamos en la cabeza

  if (!current) {
    //current === null
    console.log("La lista esta vacia!");
    return;
  }
  while (current) {
    // current === valor
    console.log(current.data);
    current = current.next; // se desplaza al siguiente nodo
  }
  return;
};

//H --> nodo1

/**
    {
        head: {data: algo, next: nodo2} --> nos informa quien es el primer nodo de la lista
    }

 */
