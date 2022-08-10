/*
DOM Crear e Insertar Elementos

    document.creatElement('ELEMENT')

    Escribir siempre el elemnto en mayusculas y guardarlo en una constante
*/

// Añadir contenido a un elemento existente

const title = document.getElementById('title')

//title.textContent = 'Hola Nariz De Bola';
//title.innerHTML = 'Hola Nariz De Bola</i>';
//title.innerText = 'Estoy obsoleto';

// Crear elemento 

const paragraph = document.createElement('p');
paragraph.textContent = 'Yo solo se, que no se nada...'
document.body.appendChild(paragraph);

//Localizamos al papa por id y le agregamos a su hijo

const main = document.getElementById('main');

const subtitle = document.createElement('H2')
subtitle.textContent = 'Wohoo! ya es viernes...'

main.appendChild(subtitle);