/*

    Clases

    Es una estructura de Es6, que funciona como una plantilla o molde pra crear objetos.

    Definimos una clase usando la palabra reservada class seguido de nombre de la clase.

    Cuando creamos un objeto se le llama 'instancear' 

    Para crear una clase necesitamos de una funcion constructora. se llama OBLIGATORIAMENTE 'constructor' y se jecuta cada vez que creamos un objeto.

        class Pokemon {
          constructor (nombre, tipo, poder) {
            this.nombre = nombre
          } 

          // Aquí van los métodos (funciones)

        }

    - Cuando definimos clases la primera letrade su nombre va en MAYUSCULAS.
    - Los parametros van entre los parentesis y son las propiedades que van a tener los objetos.
    - Para asignar los parámetros al objetos utilizamos la palabra reservada 'this' -> Hace referencia al objeto.

'Esta propiedad del objeto' = 'Este parámetro'

Simplemente estamos asociando las propiedades del objeto con los valores que enviamos por parámeteros.

-----

Métodos

Son funciones asociadas a los objetos.

Los Métodos se declararan dentro de la clase, pero fuer del constructor.

pokedex(){
    return `Este es ${this.nombre}`
}
    
    No se usa la palabra reservada 'function', ni flecha. Esta es la sintaxis de un método dentro de la clase.

-------

    Crear un objeto

    Necesitamos usar la palabra reservada 'new' y el nombre de la clase.

    const pikachu = new pokemon('Pikachu','Electrico',1000);

    Una vez instanciado el objeto podremos acceder a sus propiedades y métodos utilizando la nomenclatura de punto '.'

    pikachu.nombre;
    pikachu.poder;
    pikachu.tipo;
    pikachu.pokedex();

*/

class Pokemon {
    constructor (nombre, tipo, poder){
        this.nombre = nombre
        this.tipo = tipo
        this.poder = poder
    } 

    pokedex(){
        return `Este es ${this.nombre}es un pokemon de tipo ${this.tipo} y su poder es de ${this.poder}`
    }
}