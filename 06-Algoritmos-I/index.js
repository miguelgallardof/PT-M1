


// 1 2 3 4 5 6 7 8 9 10      3      1
//                    |


// Solución 1:
// - RECORRER TODOS LOS NÚMEROS --> Búsqueda lineal


// 1 --> acerté 1 oprtunidad
// 10 --> 10 oportunidades 


//Solución 2: 

// 5? --> es menor?    2
// 1 2 3 4 
//   |

//2? --> es mayor

// 3 4       3
//   |
//4? --> es menor?

// 3  --> gané   4



// 1.000.000
// 500.000
// 250.000
// etc.


// ¿Cuál de las 2 soluciones que vimos antes es mejor?
// Ninguna!! 



//Encontrar el máximo
// max = 3
// [1, 2, 10000000000...........]
//        i

function a(array) {
    var max = array[0];  //1 vez
    for( var i = 1; i <= array.lenght; i++){ // 1 millón veces 
        if( array[i] > max)	{ // N veces
            max = array[i]; // N veces
        }
    }
    console.log(max); // 1 vez
}

a()

// O(1 + N + N + N + 1)
// O(2 + 3N)
// O(3N)
// O(N) --> o de n --> Complejidad lineal


[1, 20, 10, 1, 30, 2, 0, 5]
         i
         j

function b(array) {
    for( var i = 2; i <= array.lenght; i++){ // N veces  10 elem
        for( var j = 0; j <= array.lenght; j++){ // N veces  10 * 10 
            if(array[i] === array[j]){ // N veces
                return true; // 1 vez 
            }
        }
    };

}

//O(N * N + N + 1)
//O(N^2 + N + 1 )
//O(N^2) --> Complejidad cuadrática






function sumArray(array, n) {
    var fin = array.length - 1; //1 vez
    var ini = 0; //1 vez
    while (ini < fin) { //N veces 
      var suma = array[ini] + array[fin]; //N veces 
      if( suma === n) return true; //N veces 
      if( suma > n) fin = fin - 1; // N veces 
      if( suma < n) ini = ini + 1; // N veces 
    }
    return false; // 1 vez
};

//O(3 + 5N)
//O(N) --> complejidad lineal


function c(array) {
    return 'Recibiste este ' + array
}


// 1 2 3 4
// 2 3 4 1
// 3 4 1 2 
//