### Closures

Resolvé los ejercicios en el archivo `homework.js`.
Para ejecutar los test, anda a esta carpeta y ejecutá:
`npm install` y luego:
`npm test`.

## Extra Credit

## OOP - Prototypes

### Repeatify

Crear un método `repeatify` que este disponible para _todos_ los objetos `Strings`. Esta función debe aceptar un `entero` que indica cuantas veces el string tiene que repetirse. La función retorna el string repetido el número de veces que indicamos. Controlar que el número no sea menor que cero, y si es cero que devuelva `''` (String vacío).

```javascript
String.prototype.repeatify = function (entero) {
  if (entero < 0) {
    return console.log("error, la cantidad debe ser mayor a 0");
  } else if (entero === 0) {
    return "";
  }

  var string2 = "";
  for (var i = 0; i < entero; i++) {
    string2 = string2 + this;
  }
  return string2;
};
console.log("hola".repeatify(3)); //holaholahola
```

### Shapes

- Crea un objeto llamado `shape` que tenga una propiedad `type` y un método `getType`.
- Ahora defini una función `Triangle` cuyo prototipo sea `shape`. Los objetos creados con `Triangle` deberían tener tres propiedades: `a`, `b` y `c`. Que representan cada lado del triángulo. `type` debe ser `Triangle`.
- Agregá un nuevo método al prototipo llamado `getPerimeter`.

Probá tu solución con el siguiente código:

```javascript
class Shape {
  constructor(type) {
    this.type = type;
  }
  getType() {
    return this.type;
  }
}

class Triangle extends Shape {
  constructor(a, b, c) {
    super("Triangle");
    (this.a = a), (this.b = b), (this.c = c);
  }
  getPerimeter() {
    return this.a + this.b + this.c;
  }
}

var t = new Triangle(1, 2, 3);
t instanceof Triangle;
// true
Shape.prototype.isPrototypeOf(t);
// true
t.getPerimeter();
// 6
t.getType();
// "Triangle"
```

- Ahora creá un nuevo constructor que herede de `shape`, llamado `Circle`. Implementalo de tal modo que puedas calcular su perímetro en la función `getPerimeter`.

Probá tu solución con el siguiente código:

```javascript
class Shape {
  constructor(type) {
    this.type = type;
  }
  getType() {
    return this.type;
  }
}

class Circle extends Shape {
  constructor(r) {
    super("Circle");
    this.r = r;
  }
  getPerimeter() {
    return this.r * 2 * Math.PI;
  }
}

var c = new Circle(2);
c instanceof Circle;
// true
Shape.prototype.isPrototypeOf(c);
// true
c.getPerimeter();
// 12.566370614359172
c.getType();
// "Circle"
```

- Creá una última `shape` llamada `Square`.
- Agregá el método `getArea` de todas las `shape`s.

```javascript
class Shape {
  constructor(type) {
    this.type = type;
  }
  getType() {
    return this.type;
  }
}

class Square extends Shape {
  constructor(l) {
    super("Square");
    this.l = l;
  }
  getArea() {
    return this.l * this.l;
  }
}

var s = new Square(4);
s instanceof Square;
// true
Shape.prototype.isPrototypeOf(s);
// true
s.getArea();
// 16
s.getType();
// "Square"
```
