// Factorial de un Numero Natural:
function factorial(n) {
  // caso de corte:
  if (n === 1) return 1;
  //if (n === 0 || n === 1) return 1; // 0! = 1
  //if (n < 0) return "ingresar un numero Natural";
  return n * factorial(n - 1);
}

console.log(factorial(10));

/* // El objeto Set permite almacenar valores únicos de 
// cualquier tipo, incluso valores primitivos u 
// referencias a objetos.
// Un valor en un Set sólo puede estar una vez; éste 
// es único en la colección Set.
/* var array = [1,2,3,4,4,5,5,1,2];
//let user = new Object();------> { }
var mySet    = new Set(array);
console.log('array:', array);   
console.log('set:', mySet);     

mySet.add(1);
mySet.add(5);
mySet.add('some text');

const o = {a: 1, b: 2};
mySet.add(o);
console.log('set modificado:',mySet); 

console.log('size:', mySet.size)

mySet.delete('some text');
console.log('set eliminando 1:',mySet);  */

/* let setO = new Set();

let john = { name: "John" };
let peter = { name: "Peter" };
let mary = { name: "Mary" }; */

// visitas, algunos usuarios lo hacen varias veces
/* setO.add(john);
setO.add(peter);
setO.add(mary);
setO.add(john); */
/* setO.add({ name: "John" });  // tiene diferente posicion de memoria que john
setO.add('peter');
setO.add(['hola', 'mundo']) 
 */

/* console.log( setO ); 

for (let user of setO) {
    console.log(user.name); // John (luego Pete y Mary).. y undefined
}
console.log(typeof(setO))
console.log(typeof(array)) */

/* // Stack:
let array = [];
array.push(1);
array.push(2);
console.log(array);
array.pop();

console.log(array); */

/* // otra manera de definir un stack:
let array1 = [];
array1.unshift(1);
array1.unshift(2);
array1.unshift(3);
console.log(array1);
array1.shift();

console.log(array1); */

/* class Stack {
  constructor() {
    this.stack = [];
  }
  add(data) {
    this.stack.push(data);
  }
  delete() {
    this.stack.pop();
  }
  show() {
    console.log(this.stack);
  }
}
let stack1 = new Stack();
stack1.add(12);
stack1.add(34);
stack1.show();
stack1.delete();
// // justamente en la clase no funcionaba console.log ya que dentro
// // de la clase Stack esta definido el metodo show!!
stack1.show(); */
