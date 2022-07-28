const titulo = document.getElementById('title');

console.log(titulo);

// Atributos
 // element.getAttribute('attribute') -----> Devolver el atributo  que tenga delarado en la etiqueta html

 //console.log(titulo.getAttribute('class'));


 //titulo.setAttribute('id', 'big-title');
 //console.log(titulo);


 /*
    clases

    element.classList.add('class' 'class', ...) -> Añadir una o más clases

 */


    /*console.log(titulo.id); // 'title'
    console.log(titulo.className); // 'main-title'
    console.log(titulo.nodeName); // 'H1'
    console.log(titulo.nodeType); // 1
    console.log(titulo.hidden); // false
    console.log(titulo.textContent); //DOM Atributos y Clases desde JavaScript
    console.log(titulo.innerHTML); // DOM Atributos y Clases desde JavaScript

/*
    Atributos "anidados"
*/

//console.log(titulo.firstChild.nodeValue);
//console.log(titulo.firstChild.nodeType);
//console.log(titulo.firstChild.isConnected);

/*
    Atributos NodeList
*/

console.log(titulo.childNodes[0])
console.log(titulo.childNodes[0].length)
console.log(titulo.childNodes[0].nodeName)

console.log(titulo.childNodes[1])
console.log(titulo.childNodes[1].textContent)
console.log(titulo.childNodes[1].hidden)
console.log(titulo.childNodes[1].nodeType)



