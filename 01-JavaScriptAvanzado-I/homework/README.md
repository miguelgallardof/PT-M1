# Ejercicios

## JavaScript

### Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
//contexto global
x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
  // function expression
  // a = 8 | b = 9 | c = 10
  var x = 10;
  console.log(x); //10
  console.log(a); //8
  var f = function (a, b, c) {
    // a = 8 | b = 9 | c = 10
    b = a;
    console.log(b); //8
    b = c;
    var x = 5;
  };
  f(a, b, c);
  console.log(b); //9
};
//contexto global
c(8, 9, 10);
console.log(b); //10
console.log(x); //1

//function statement
function algo() {
  return algo;
}

//var --> scope de función / solo vive en el contexto de función
//let --> vive en un bloque de código, statements if {}
//const --> igual que el let, no se puede cambiar su valor
```

```javascript
var bar; // se guarda la declaración | no la asignación
console.log(bar); // undefined --> no tiene valor asignado
console.log(baz); // error | rompe, corta la ejecución
foo();
function foo() {
  console.log("Hola!"); // Hola
}
var bar = 1;
baz = 2; // reasignación de valor
```

```javascript
var instructor = "Tony";
console.log(instructor); // Tony
if (true) {
  // if NO es función
  var instructor = "Franco";
}
console.log(instructor);
```

```javascript
var instructor = "Tony"; // contexto global
console.log(instructor); // Tony
(function () {
  // IIFE, es una función anónima
  if (true) {
    var instructor = "Franco"; // contexto de la función anónima
    console.log(instructor); // Franco
  }
})(); // se autoejecuta
console.log(instructor); // Tony
```

```javascript
var instructor = "Tony"; // contexto global
let pm = "Franco";
if (true) {
  var instructor = "The Flash";
  let pm = "Reverse Flash";
  console.log(instructor); // The Flash
  console.log(pm); // Reverse Flash
}
console.log(instructor); // The Flash
console.log(pm); // Franco
```

### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" //2
"2" * "3" //6
4 + 5 + "px" //9px
"$" + 4 + 5 //$45
"4" - 2 //2
"4px" - 2 //NaN
7 / 0 //Infinity
{}[0] //[0]
parseInt("09") //9
5 && 2 //2
2 && 5 //5
5 || 0 //5
0 || 5 //5
[3]+[3]-[10] //23
3>2>1 //false
[] == ![] //true
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).

### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
  console.log(a); // undefined
  console.log(foo()); // 2

  var a = 1;
  function foo() {
    return 2;
  }
}

test();
```

Y el de este código? :

```javascript
var snack = "Meow Mix";

function getFood(food) {
  // false
  if (food) {
    // false
    var snack = "Friskies";
    return snack;
  }
  return snack;
}

getFood(false); // undefined
```

### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = "Juan Perez";
var obj = {
  fullname: "Natalia Nerea",
  prop: {
    fullname: "Aurelio De Rosa",
    getFullname: function () {
      return this.fullname;
    },
  },
};

console.log(obj.prop.getFullname()); // Aurelio de Rosa

var test = obj.prop.getFullname; //
console.log(test); // function () {return.this.fullname;} window.fullname = 'Juan Perez'

console.log(test()); // Juan Perez
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
  console.log(1); // primero
  setTimeout(function () {
    console.log(2);
  }, 1000); // cuarto
  setTimeout(function () {
    console.log(3);
  }, 0); // tercero
  console.log(4); // segundo
}

printing();
```
