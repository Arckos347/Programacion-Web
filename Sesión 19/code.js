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
    //Así agregamos datos a un array con .push
    pokemones.push([ nombre.value , tipo.value , poder.value ]);
 var i = pokemones.length - 1;   
 //Imprimimos el mensaje en la etiqueta p id mensaje
 mensaje.innerHTML = 'Se Agrego ' + pokemones[i][0];
}


/*
    Definir la función que va a mostrar todos los datos del array
*/

function mostrarPokemones(){
    //Código a ejecutar
    document.write(
        '<ul>' +
        '<li><img src="imagenes/' + pokemones[0][0] + '.png" alt="Imagen Pokemon"></li>' +
        '<li>Pokemon: ' + pokemones[0][0] + '</li>' +
        '<li>Tipo: ' + pokemones[0][1] + '</li>' +
        '<li>Poder: ' + pokemones[0][2] + '</li>' +
    '</ul>'
        );
}
