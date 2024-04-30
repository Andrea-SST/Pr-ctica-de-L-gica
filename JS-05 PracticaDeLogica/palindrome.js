/* PALINDROME

Write a program that prompts for a word or sentence (it can be capitalized, have spaces and punctuation). Figure out if the sentence/word is a palindrome or not. Ignoring punctuation, spaces and capitalized letters.

*/


function limpiarTexto(texto) {
    return texto.toLowerCase().replace(/[^a-z]/g, '');
}

function esPalindromo(texto) {

    texto = limpiarTexto(texto);
    let textoInvertido = texto.split('').reverse().join('');
    return texto === textoInvertido;
}

let palabraOracion = prompt("Ingrese una palabra u oración para verificar si es un palíndromo:");

if (esPalindromo(palabraOracion)) {
    console.log("La palabra/u oración ingresada es un palíndromo.");
} 

else {
    console.log("La palabra/u oración ingresada no es un palíndromo.");
}