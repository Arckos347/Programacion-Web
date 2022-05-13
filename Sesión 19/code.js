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

var agregar = document.getElementById('agregar');
agregar.addEventListener('click',agregarPokemon);

/*
    Definir la función que va a agregar pokemones al array
*/

function agregarPokemon(){
    /* Aqui va nuestro codigo */
    //Así agregamos datos a un array con .push
    pokemones.push([ nombre.value , tipo.value , poder.value ]);
}