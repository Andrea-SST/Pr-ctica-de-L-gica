/* HIGHEST NUMBER 

Write a program that asks for 10 numbers. Using logical operators and any other javascript functions/structures you've seen before, determine and output the highest of those numbers.

*/

let numeroMayor = 0;

// va a empezar en 0 porque lo tengo que comparar con algo (ej, 1 = 0, sí / no)

// inicia en 1, finaliza con mi numero 10, el i++ es mi intervalo que aun no entiendo muy bien
for (let i = 1; i <= 10; i++) { // <= es por mis iteraciones el 10

    let inputNumero = prompt("Ingrese el " +  i + "° número");
    let numero = Number(inputNumero) //  tengo que poner el tipo de dato que necesito porque sino toma lo que pongo como quiere

    if ((numero > numeroMayor) && numero > 0) { // esto solo sirve si es mayor que 0
        numeroMayor = numero;
    }
    else   console.log("el caracter no es un numero valido o es negativo")
    
}

console.log("mi numero mayor es: " + numeroMayor);