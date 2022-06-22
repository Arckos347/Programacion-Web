/*
    Objetos

    Son estructuras de datos que representan propiedades, valores y acciones
    
    Propiedades o atributos

 - Son las características del objeto. (Nombre, Tipo, Poder, Habilidades)
 
 - Se representan por pares de 'clave (Key)' : 'valor (value)'

 - Datos: Strings, Numbers (Int o Float), Booleans, Arrays.

Comportamientos o acciones

 -Es aquello que puede hacer un objeto (Comer, Atacar, Defenderse, Evolucionar)

 - Se definen a través de funciones.

 -----

 Para declarar un objeto escribimos:

 const nombreObjeto = {
     // Pares clave : valor
     key : value,
 }   

 para acceder a las propiedades y accionesdel objeto utilizamos la nomenclatura del punto '.'

 nombreObjeto.key

*/

const pokemon = {
    nombre : 'Pikachu',
    poder : 1000,
    capturado : true,
    habilidades : ['Impactrueno','Rayo','Chispitas']
}

//console.log(pokemon)
/*console.log(pokemon.nombre);
console.log(pokemon.poder);
console.log(pokemon.capturado);
console.log(pokemon.habilidades);
console.log(pokemon.habilidades[0]);
console.log(pokemon.habilidades[1]);
console.log(pokemon.habilidades[2]); */


//ciclo For In -> Objetos 

for(let key in pokemon ){
    console.log(key)
}


for(let value in pokemon ) {
    console.log(pokemon[value])
}

 // Ciclo For Of -> Arrays

 for(let key of pokemon.habilidades) {
     console.log(key)
 }