/* calcular cuanto cobrará un vendedor teniendo en cuenta que tiene una comision de 5% sobre las ventas totales*/

/* function sueldoVendedor(){
let sueldoFijo = parseInt(prompt("Ingrese venta total del vendedor"));
let comision = 0.05;
let sueldoTotal = sueldoFijo + (sueldoFijo * comision)
return sueldoTotal;
}

sueldoVendedor() */


/* programa para determinar si un alumno "promociona","aprueba" o "reprueba" */

/* let nota = parseFloat(prompt("Ingrese la nota del alumno"))

if (nota < 4){
    console.log("Reprobado");
} else if (nota <= 7){
    console.log("Aprobado");
} else if(nota < 7 || nota <= 10) {
    console.log("Promociona");
} else{
    console.log("Nota invalida");
} */

/* Pedir 10 números y mostrar el mayor por pantalla */

/* let mayor = 0;

for (let i = 0; i < 10; i++) {
    let numeroUsuario = parseInt(prompt("Ingrese un número"))
    if (numeroUsuario > mayor) {
        mayor = numeroUsuario;
    }
} console.log(mayor);
 */

/* Contar hasta 50 de 5 en 5 */

/* let numero = 0;

while (numero <= 50) {
    console.log(numero);
    numero +=5;
} */

/* Desafio 2 */

let pinUsuario = '1287';
let ingresar = false;

for(let i = 2; i >= 0; i--){
    let pinIngresado = prompt("ingrese su pin");
    if(pinIngresado == pinUsuario){
        alert('Login exitoso');
        ingresar = true;
        break
    }else {
        alert('Error. te quedan ' + i + ' intentos');
    }
}

if(ingresar){
    
}


