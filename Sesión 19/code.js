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

var pokemones = [];

/*
    Traemos los datos de los inputs
*/

var nombre = document.getElementById('nombre');
var tipo = document.getElementById('tipo');
var poder = document.getElementById('poder');
var mensaje = document.getElementById('mensaje');

var agregar = document.getElementById('agregar');
agregar.addEventListener('click',agregarPokemon);

var mostrar = document.getElementById('mostrar');
mostrar.addEventListener('click',mostrarPokemones);

/*
    Definir la función que va a agregar pokemones al array
*/

function agregarPokemon(){ 
    /* Aqui va nuestro codigo */
    /* Condicional if */

if(nombre.value === '') {
    /*Codigo que se ejecuta*/
    mensaje.innerHTML = 'Hey! primero completa los datos y luego agrega un pokemon!!';
} else {
    /* Ejecuta esto si no se cumple una condición*/
    //Así agregamos datos a un array con .push
    pokemones.push([ nombre.value , tipo.value , poder.value ]);
 var i = pokemones.length - 1;   
 //Imprimimos el mensaje en la etiqueta p id mensaje
 mensaje.innerHTML = 'Se Agrego ' + pokemones[i][0];
};

}

/*
    Definir la función que va a mostrar todos los datos del array
*/

function mostrarPokemones(){
    //Código a ejecutar
    // Condición if/Else
    if(pokemones.length == 0) {
        mensaje.innerHTML = 'Para ver tus pokemones, primero agrega uno';  
    } else {
/* Ciclo for -> Repetir código*/
for(var r = 0; r < 3; r++) {
    
    /* Codigo que se repite */ 
    document.write(
        '<ul>' +
        '<li><img src="imagenes/' + pokemones[r][0] + '.png" alt="Imagen Pokemon"></li>' +
        '<li>Pokemon: ' + pokemones[r][0] + '</li>' +
        '<li>Tipo: ' + pokemones[r][1] + '</li>' +
        '<li>Poder: ' + pokemones[r][2] + '</li>' +
        '</ul>'
    );
    };

}          
};


