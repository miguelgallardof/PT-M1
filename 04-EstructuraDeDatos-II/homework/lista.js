const { LinkedList, HashTable } = require("./homework");

const lista = new LinkedList();

lista = {
  //Objeto que nos dice información sobre la lista
  head: {
    value: "Hola",
    next: {
      value: "jaja",
      next: {
        value: "tercer nodo",
        next: null,
      },
    },
  },
  length: 3,
};

lista.add("Hola");

// const lista2 = new LinkedList()
// lista2.add('otro valor')

node = {
  value: "Hola",
  next: null,
};

lista.add("jaja");

node = {
  value: "jaja",
  next: null,
};

lista.add("tercer nodo");

node = {
  value: "tercer nodo",
  next: null,
};

lista.remove();

const lista3 = {
  //Objeto que nos dice información sobre la lista
  head: null,
  length: 0,
};

// head -> {value: 'hola'} -> null

lista = {
  head: {
    value: "Hola",
    next: {
      value: "jaja",
      next: {
        value: "tercer nodo",
        next: null,
      },
    },
  },
  length: 3,
};

// H -> {} -> {} -> null
//                   c

const table = new HashTable();

table = {
  numBuckets: 35,
  casilleros: [],
};

// [ , , , ,   [{},{}]    , , , , , , , , ,    ]
//  0 1 2 3    4     5 6 7 8 9 10 11 ...35
