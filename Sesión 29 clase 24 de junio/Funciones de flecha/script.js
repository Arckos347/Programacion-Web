/*

    Funciones

    Son fragemntos de código que esdribimos para ejecutar una tarea y volver a escribir el mismo más de una vez.

    -Modularizamos el código.
    -Es más solventar errores.
    -Deben realizar una sola tarea.

 Esta es la sintaxis tradicional

    function nombreFuncion () {
        // El código a ejecutar
    };

    Esta es la forma con Es6

    Const nombreFuncion = () => {
     // Código a ejecutar
    }

    1.Las Funciones pueden recibir parámetros y van entre los parentesis.

    ... (parametro1, parametro2) ...

    Estos parametros se usaran dentro de la funcion.

    2.Las funciones pueden devolver valores y se usa la palabra reservada 'return'

    ... {
        return parametro1 + parametro2
    }

    3.Las funciones tienen que invocadas y las tenemos que llamar por fuera de la función.    

    nombreFuncion();

*/

// Tradicional

function saludar() {
    console.log('¡Hola!');
}

saludar();

// Nueva Forma Funcion de Flecha

const despedida = () => {
    console.log('¡Adios!');
}

despedida();

// Funcion Flecha con parámetros

const mensajito = (dia) => {
    console.log(`Hoy es ${dia}`);
}

mensajito('Viernes');
mensajito('Lunes');
mensajito('Martes');