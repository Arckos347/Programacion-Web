/* 
	Propiedades y Métodos de Strings

	Propiedades son las características que tiene un elemento.

		P. ej. Los strings tienen una longitud. (Cantidad de caracteres) -> 'length'

	Métodos son las acciones o comportamientos que un elemento puede hacer o tener.
	
		P. ej. Los strings pueden convertirse en mayúsculas. -> 'toUpperCase'

	Para utilizar estas propiedades y métodos, se usa la nomenclatura del punto '.'

		cadena.propiedad
		cadena.metodo(parametro) <- En los métodos usamos paréntesis, porque pueden recibir parámetros.
*/

/* 
	String (cadena de caracteres)
*/

let cadena = 'Hola Mundo'; // Asignar el string

/* 
	Propiedades

	length -> Devolver la longitud de la cadena.

	Devolver: Respuesta a nuestra petición.
*/

/* console.log(cadena.length); */

/* 
	Diferencia en tre el index y el numero de caracter de un string

	H	o	l	a		M	u	n	d	o
	1 2 3 4 5 6 7 8 9 10 <- Longitud (lenght)

	H	o	l	a		M	u	n	d	o
	0 1 2 3 4 5 6 7 8 9	 <- Indice (index)

*/

/* 

	Métodos

	Todos los métodos devuelven una cadena nueva. La cadena original no será modificada. 

	toUpperCase() -> Deuelve la candena en mayúsculas.

*/

/* console.log(cadena.toUpperCase());

let cadenaMayus = cadena.toLocaleUpperCase();  // Guardamos el resultado del método en una nueva variable.*/

/* 

	toLowerCase() -> devuelve la candena en minúsculas.

*/

/* console.log( cadena.toLowerCase() ); // JS es un lenguaje Case Sensitive, es decir que hace diferencia entre mayúsculas y minúsculas. 
 */

/* 

	indexof(string) -> Devuelve la posición en la se encuentra el string o el carácter, si no lo encuentra devolverá -1.

	H	o	l	a		M	u	n	d	o
	0 1 2 3 4 5 6 7 8 9	 <- Indice (index)

*/

/* console.log(cadena.indexOf('u'));
console.log(cadena.indexOf('Mundo')); */

/* 

	replace(valor a buscar , valor nuevo) -> Remplaza la candena que le indiquemos y coloca el nuevo valor.

*/

/* console.log( cadena.replace('Mundo' , 'Mamá') ); */

/* 

	substring(inicio [,fin]) // [] -> el dato es opcionel
	
	Extrae los caracteres desde 'inicio' hasta 'fin'.
	Si no se incluye el 'fin' extrae hasta el final.

	H	o	l	a		M	u	n	d	o
	0 1 2 3 4 5 6 7 8 9	 <- Indice (index)
*/

/* console.log( cadena.substring(5));
console.log(cadena.substring(0,8)); */

/* 

	slice(inicio [,fin]) Igual que substring pero admite valores negativos.
	
	Si ponemos valores negativos comienza desde atrás.

	si no incluye 'fin' se extiende hasta el final.

	H		o	l	a		M	u	n	d	o
	1 	2 3 4 5 6 7 8 9 10 <- Longitud (lenght)
	10  9 8 7 6 5 4 3 2 1 <- longitud negativos (-)
*/

/* console.log( cadena.slice(2) );
console.log( cadena.slice(-3) );
console.log( cadena.slice(1,6) );
console.log( cadena.slice(5, -2) ); */

/* 

	trim() -> Elimina los espacios al inicio y al final de la cadena

*/

let cadena2 = '       Hola Mundo       ';
console.log(cadena2.trim());
let cadenaSinEspacios = cadena2.trim();


