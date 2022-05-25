var nombre;
var edad;
var futuro;
var boton;

nombre = document.getElementById("tuNombre");
edad = document.getElementById("tuEdad");
futuro = document.getElementById("tuFuturo");
boton = document.getElementById("miBoton");

boton.addEventListener("click",calcularEdad);

function calcularEdad(){
    var nacimiento = 2050 + edad.value;
    var edadFuturo = futuro.value - nacimiento;
    
 console.log("Hola " + nombre.value + " naciste en el año " + nacimiento + " tu edad en el año " + futuro.value + " sería de " + edadFuturo + " años");

}

console.log