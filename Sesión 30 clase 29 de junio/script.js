/*
    Instrucciones Práctica Objetos


 - crear una clase Movie con las propiedades: title, gender, year.

 - Crear un método que nos regrese el title.

 - Crear un método que nos regrese toda la información concatenada en un string.

 - Solicitar al usuario tres películas y agregarlas a un array.

 - Crear una función que muestre por consola el title de todas las peliculas.

 - Crear una función que muestre por consola toda la información concatenada en un string de las peliculas.  

*/

class Movie {
    constructor(title,gender,year) {
      this.title  = title
      this.gender = gender
      this.year   = year  
    }

    getTitle() {
      return this.title  
    }

    getInfo() {
      return `Esta película se llama ${this.title} es de género ${this.gender} y se estereno en el año ${this.year}.`  
    }
}

let films = [];

while(films.length < 3) {
    let title  = prompt("Agrega un titulo de película");
    let gender = prompt("¿Cuál es su género?");
    let year   = prompt("¿En que año se estreno?");
    
    films.push( new Movie(title, gender, year) );
}

const showNames = () => {
    for( const film of films ) {
        console.log( film.getTitle() );
    }
}

showNames();