//Definimos nuestro arreglo multidimencional con los datos de los pokemones.

var pokemones = [
  ['Pikachu' ,      'Electrico', 1000],       // Indice 0
  ['Charmander',    'Fuego' ,     900],      // Indice 1  
  ['Rei chiquita', 'Legendario', 100000]    // Indice 2
  //     0              1           2           
];


// Creamos las variables que traeran el id de HTML
var miImagen = document.getElementById('imagen');
var miNombre = document.getElementById('nombre')
var miTipo = document.getElementById('tipo')
var miPoder = document.getElementById('poder')

var numero = prompt('Elije un numero del 0 al 2');

// Insertar texto dentro del elemento HTML
miImagen.innerHTML = '<img src="Imagenes/' + pokemones[numero][0] + '.png">';
miNombre.innerText = 'Pokemon: ' + pokemones[numero][0];
miTipo.innerText = 'Tipo: ' + pokemones[numero][1];
miPoder.innerText = 'Poder: ' + pokemones[numero][2];