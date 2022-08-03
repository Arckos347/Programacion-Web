const button = document.getElementById('button');
const box = document.getElementById('box');
const input = document.getElementById('input');

/*
    Eventos del Ratón

    Click ---> Pulsar el botón izquierdo 
    dbclick ---> Pulsar dos veces deguidas el botón izquierdo.
    mouseleave ---> salimos de la zona que tiene el evento
    mousedown ---> pulsamos el boton izquierdo en la zona del evento
    mousemove ---> movemos el raton en la zona del evento


*/

//button.addEventListener('click' , () =>  console.log("Pulsaste un click") )
//button.addEventListener('dbclick' , () =>  console.log("Diste Doble Click") )

//box.addEventListener('mouseenter', () => console.log('Entraste') );
//box.addEventListener('mouseleave', () => console.log('Saliste') );

//box.addEventListener('mousedown', () => console.log('Puchaste') );
//box.addEventListener('mouseup', () => console.log('Despegaste') );

//box.addEventListener('mousemove', () => console.log('Te moviste') );

/*
    Eventos del teclado

    Keydown ---> Pulsamos una tecla
    Keyup ---> Soltamos una tecla
    Keypress ---> Pulsamos una teclas y no la soltamos

*/

//input.addEventListener('keydown', () => console.log('Pulsaste una tecla') );
input.addEventListener('keyup', () => console.log('Soltaste una tecla') );
input.addEventListener('keypress', () => console.log('Mantienes presionado') );