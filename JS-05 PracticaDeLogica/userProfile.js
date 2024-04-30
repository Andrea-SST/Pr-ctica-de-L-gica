/* USER PROFILE

Write a program that prompts a user for their data: username, age, and a list of their favorite movies. Store the information and then showcase it in the console. Take note that the output for the films should add a small message like: 'The film {film} is one of my favorites'.

*/

let nombreUsuario = prompt("Ingrese su nombre:");
let edadUsuario = prompt("Ingrese su edad:");
let peliculasFavoritas = prompt("Ingrese una lista de sus películas favoritas: ");

let listaPeliculas = peliculasFavoritas.split(','); // deben de ir separadas por una coma

console.log("Datos del usuario:");
console.log("Nombre de usuario:", nombreUsuario);
console.log("Edad:", edadUsuario);

console.log("Películas favoritas:");
listaPeliculas.forEach(pelicula => {
    console.log("La película " + pelicula.trim() + " es una de mis favoritas.");
});
