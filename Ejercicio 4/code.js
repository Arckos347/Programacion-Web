/*  var miArray = ['Dato 1', 'Dato2', 'Dato3']
var arrMulti = [ 
['Dato1','Dato2','Dato3'],  // Indíce 0
['Dato1','Dato2','Dato3'],  // Indíce 1
['Dato1','Dato2','Dato3']   // Indíce 2
  //Sub0   Sub1    Sub2
];  */

/*
    Definimos nuestro array vacio
*/

var color = [];

/*
    Traemos los datos de los inputs
*/

var nombre = document.getElementById('nombre');
var mensaje = document.getElementById('mensaje');

var agregar = document.getElementById('agregar');
agregar.addEventListener('click',agregarColor);

var mostrar = document.getElementById('mostrar');
mostrar.addEventListener('click',mostrarColores);

/*
    Definir la función que va a agregar pokemones al array
*/

function agregarColor(){ 
    /* Aqui va nuestro codigo */
    /* Condicional if */

if(nombre.value === '') {
    /*Codigo que se ejecuta*/
    mensaje.innerHTML = 'Hey! primero completa los datos y luego agrega un color!!';
} else {
    /* Ejecuta esto si no se cumple una condición*/
    //Así agregamos datos a un array con .push
    color.push([ color.value  ]);
 var i = color.length - 1;   
 //Imprimimos el mensaje en la etiqueta p id mensaje
 mensaje.innerHTML = 'Se Agrego ' + color[i][0];
};

}

/*
    Definir la función que va a mostrar todos los datos del array
*/

function mostrarColores(){
    //Código a ejecutar
    // Condición if/Else
    if(color.length == 0) {
        mensaje.innerHTML = 'Para ver tus colores, primero agrega uno';  
    } else {
/* Ciclo for -> Repetir código*/
for(var r = 0; r < 3; r++) {
    
    /* Codigo que se repite */ 
    document.write(
        '<ul>' +
        '<li>color: ' + color[r][0] + '</li>' 
    );
    };

}          
};


