/*

    Bucles For Of y For In

    Son dos ciclos nuevos determinados, ES6. Simplifican el bucle 'for' tradicional.

    For Tradicional:

    for( i = 0 ; i < 3 ; i++ ){
        // código que se ejecuta
        }

    Estos nuevos ciclos permiten recorrer estructuras de datos como los Arrays y Objetos

    For Of:

    for ( variable of estructura) {
        // Código que se ejecuta
    }    

    For In:

    for ( variable in estructura) {
        // Código que se ejecuta


 - La variable toma el siguiente valor de la estructura en cada iteración
 - No es necesario especificar el número de iteraciones (Vueltas)
 - El bucle se incrementa solo
 - El bucle se detiene automáticamente.

*/

// Estructura de datos

        let pokemones = ['Pikachu', 'Charmander', 'Snorlax'];

        // Ciclo for tradicional

        for (i=0 ; i<3 ; i++) {
            console.log(pokemones[i])
        } 

        // ciclo For Of

        for ( let nombre of pokemones ) {
            console.log(nombre); // Valor de cada posición de la estructura.
        }

        // Ciclo For IN

        for ( let numero in pokemones) {
            console.log(numero); // El indice (index) de los valores de la estructura
        }


        