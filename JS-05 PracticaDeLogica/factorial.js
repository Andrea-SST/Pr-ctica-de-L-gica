/* FACTORIAL

Write a program that prompts for an intenger number n. Where  1 <= n. Solve this using recursion.

*/

function numeroEntero() {

    let numero = parseInt(prompt("Ingrese un número entero que sea mayor o igual a 1:"));

    if (isNaN(numero) || numero < 1) {
        console.log("Por favor, ingrese un número entero que sea mayor o igual a 1:");
        return numeroEntero();
    } 

    else {
        return numero;
    }
}

let numeroPedido = numeroEntero();

console.log("El número es:", numeroPedido);