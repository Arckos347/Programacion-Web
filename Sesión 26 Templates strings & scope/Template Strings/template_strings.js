/* 
Template Strings: Cadenas de texto que permiten simplificar el 
codigo cuando queremos concatenar datos. 
Se delimitan con dos tildes invertidas o acentos graves:

`Template String`

Pueden tener "Expresiones", identificadas con el signo
del dolar y envueltas en llaves
    ${} <--- marcador

Una expresión es cualquier unidad de codigo valido que se
resuelve en un valor.
    x = 'gato'  -   Asignación
    3 + 4       -   Aritmética
    true == true-   Lógica
*/         

var nombre = 'Yato';
var apellido = 'Lopez';
var edad = '33';

//Así concatenamos cadenas de texto y variables 
console.log('Hola ' + nombre + ' ' + apellido + ' tienes ' + edad + ' años'); 

//Así utilizamos los templates strings
console.log(`Hola ${nombre} ${apellido} tienes ${edad} años.`);