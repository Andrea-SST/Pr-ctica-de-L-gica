/* FLAT ARRAY

Write a program that takes the following nested matrix and flattens it (makes it a 1D array). Use any type of algorithm you want like callbacks, recursion, etc...
let multiDimension = [1, [2, 3, [4, 5, [6]]]];

*/

let multiDimension = [1, [2, 3, [4, 5, [6]]]];

// Función recursiva para aplanar la matriz
function aplanarMatriz(arr) {
    let resultado = [];
    arr.forEach(function(elemento) {
        if (Array.isArray(elemento)) {
            resultado = resultado.concat(aplanarMatriz(elemento));
        } else {
            resultado.push(elemento);
        }
    });
    return resultado;
}

// Aplanar la matriz multiDimension
let matrizAplanada = aplanarMatriz(multiDimension);

// Mostrar la matriz aplanada
console.log("Matriz aplanada:", matrizAplanada);