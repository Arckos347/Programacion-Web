/*
    ciclo while sirve para ejecutar un codigo de forma ciclica mientras su condición se cumpla.
*/

/*
    Definimos la variable i
*/


/*
var i = 1;
var numero = prompt("Elige un número");

while( i <= numero ) {
    //Aquí va el código que se ejecuta.
    document.write("Hola soy un ciclo <br>");
// sumamos una unidad a la variable i, para que la condición deje de cumplirse.
    // i = i + 1;
    i++;
}
*/

/*
    El ciclo Do while ejecuta un código al menos 1 vez y si se cumple la condición volvera a iterarlo.
*/

var i = 0;
var numero = prompt("Elije un número");

do {
    // Aquí en código que se ejecuta en el ciclo.
    document.write("Alan <br>");
    i++;
} while( i < numero );
