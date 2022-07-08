/* 
scope o ambito es la zona donde existe una variable o constante 

"Variables" son espacios que reservamos para almacenar infromacion que
podria cambiar a lo largo del uso del programa 

- Se declaran  -->  var nombre;
- Se inicializan  -->  var nombre = 'Roberto';
- Se modifican  -->  nombre = 'Rob';

Con Ecma Sprit 6 (Ultima versión de JS) se usa para delcarar variavlesd la palabra 
'Let' , no se recomienda usar 'var', esto es por un concepto 
recientemente llamado 'hoisting'.

Las variables o constantes pueden ser de dos tipos (contexto)

Global: Podemos acceder a ellas desde cualquier parte del codigo 
local: Variables o constantes creados dentro de una duncion, solo se puede
aceder a ellas dentro de la funcion o funcion anidado.
*/

let nombre= 'Roberto'; // Inicializamos una variable global

console.log(`Mi nombre es ${nombre}`);

function saludar() { 
    console.log(`Hola ${nombre}`); //Usamos variable global
    let apellido = 'Blas'; // Var ambito local
    console.log(`Tú nombre completo es ${nombre} ${apellido}`)

    //Funcion anidada
    function despedida() {
        //Código que se ejecuta y función anidada

        nombre= 'Robsito'; 
        console.log(nombre);
    }
despedida();
}

saludar(); //Invocamos la funcón
