xdescribe('Tests that will pass', () => {
  it('should pass if exact match', () => {
    const number = 3;
    const string = 'Franco';
    expect(number).toBe(3);
    expect(string).toBe('Franco');
  });
  // toEqual verifica recursivamente cada campo de un objeto
  // o de un arreglo.
  it('should pass if recursively match (object)', () => {
    const obj = {name: 'Franco', age: 27};
    expect(obj).toBe({name: 'Franco', age: 27});
  });
  
  it('should pass if recursively match (array)', () => {
    const array = [1,2,3,4,5];
    expect(array).toEqual([1,2,3,4,5]);
  });
})

xdescribe('Tests that will not pass', () => {
  it('should fail if not exact match (object)', () => {
    const obj = {name: 'Franco', age: 27};
    expect(obj).toBe({name: 'Franco', age: 27});
  });
  
  it('should fail if not exact match (array)', () => {
    const array = [1,2,3,4,5];
    expect(array).toBe([1,2,3,4,5]);
  });
})

describe('Extra matchers', () => {

    it('toBeNull', () => {
    // toBeNull coincide solo con null
      expect(null).toBeNull();
      // expect(undefined).toBeNull();
    });
  
    it('toBeUndefined', () => {
    // toBeUndefined coincide solo con undefined 
      expect(undefined).toBeUndefined();
      // expect(null).toBeUndefined();
    });

    it('toBeDefined', () => {
    // toBeDefinedes el opuesto a toBeUndefined  
      expect(2).toBeDefined();
      expect(0).toBeDefined();
      expect('').toBeDefined();
      expect('Franco').toBeDefined();
      expect([]).toBeDefined();
      expect([1,2,3]).toBeDefined();
      expect({}).toBeDefined();
      expect({a: 1}).toBeDefined();
      expect(null).toBeDefined();
      // expect(undefined).toBeDefined();
    });

   // toBeFalsy coincide con lo que sea que el condicional if devuelva como falso
   // toBeTruthy coincide con lo que sea que el condicional if devuelva como verdadero  
   // toBeFalsy --> opposite
    it('toBeTruthy', () => {
      expect(true).toBeTruthy();
      expect(2).toBeTruthy();
      expect('Franco').toBeTruthy();
      expect([]).toBeTruthy();
      expect([1,2,3]).toBeTruthy();
      expect({}).toBeTruthy();
      expect({a: 1}).toBeTruthy();
      // expect(0).toBeTruthy();
      // expect('').toBeTruthy();
      // expect(undefined).toBeTruthy();
      // expect(null).toBeTruthy();
    });
// Para la igualdad de puntos flotantes, usa toBeCloseTo en lugar de toEqual, 
// porque no quiere que una prueba dependa de un pequeño error de redondeo.
// Utilícelo para comparar números de coma flotante para una igualdad aproximada
//  3 * 10.3; //el resultado debería ser 30.9 //pero JS da 30.900000000000002
    it('toBeCloseTo', () => {
      // expect(0.1 + 0.2).toEqual(0.3);
      expect(0.1 + 0.2).toBeCloseTo(0.3);
      // expect(0.11).toBeCloseTo(0.1);
      expect(0.11).toBeCloseTo(0.1, 2);
      expect(0.174927142).toBeCloseTo(0.17492, 4);
    });
    // Puede probar cadenas contra expresiones regulares con toMatch
    it('toMatch', () => {
      expect('Un texto largo que tiene Franco dentro de sus palabras').toMatch('Franco');
      expect('Un texto largo que tiene Franco dentro de sus palabras').toMatch(/Franco/);
      expect('Un texto largo que tiene Franco dentro de sus palabras').toMatch(/palabras$/);
    });
    // Puedes comprobar si un array o iterable contiene un elemento en particular usando toContain
    it('toContain', () => {
      const array = ['Franco', 'Toni', 'Martu', 'Mati'];
      expect(array).toContain('Martu');
      expect(array).not.toContain('Diego');

      expect('Soy Henry').toContain('Henry');
    });
  // Si quiere probar que si una función particular lanza un error al llamarse, use toThrow
  // la función que arroja una excepción necesita ser invocada dentro de una función que la 
  // envuelva, de lo contrario la afirmación toThrow fallará.
  // also used as .toThrowError
  // me permite ver si la funcion arroja el error que yo quiero que muestre.
    it('toThrow', () => {
      function error() {
        throw new TypeError('An error');
      }

      // function definition, not executed!
      expect(error).toThrow();
      expect(error).toThrow('An error');
      // expect(error).toThrow('An errorrrrs');
      expect(error).toThrow('error');
      expect(error).toThrow(/error$/);
      expect(error).toThrow(TypeError);
      // expect(error).toThrow(SyntaxError);
      expect(error).toThrow(new TypeError('An error'));
    });
});




