/* ALARM

Write a program that asks a user for the amount of seconds needed until an alarm (message) is executed alongside a text to show once those seconds have passed in real time.

Result example: "Time for bed after 10 seconds".

*/

function mostrarAlarma() {
    console.log("Hora de acostarse después de " + segundosAlarma + " segundos.");
}

let segundosAlarma = parseInt(prompt("Ingrese la cantidad de segundos para la alarma:"));

console.log("La cuenta regresiva ha comenzado. Espera " + segundosAlarma + " segundos...");

setTimeout(mostrarAlarma, segundosAlarma * 1000);