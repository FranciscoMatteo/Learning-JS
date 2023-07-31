// ``````````````````````````````````````````````````````````````````````

// Clase 2

/*
= asignacion
== Comparacion de valores
=== comparacion tantod e valor como de dato
*/







/* EJEMPLO 
let edad = 18; 
if (edad >=18) {
    console.log("Puede entrar a la fiesta")
}
*/






/* 
Estructura del if else

if (condicion) {
    codigo a ejecutar cuando la condicion es verdadera o representa algo verdadero
}else {
    condigo a ejecutar cuando la condicion es falsa
}
*/

/*
let respuesta = prompt("Hiciste la tarea?");

if (respuesta.toLowerCase() === "si") {
    alert("Puedes salir a jugar")
} else {
    alert("No puedes salir a jugar")
}
*/





/*
estructura del if else if

if(condicion1){
    codigo a ejecutar cuando la condicion1 es verdadera
} else if(condicion2 {
    codigo a ejecutar cuando la condicion2 es verdadera
} else {
    codigo a ejecutar cuando ninguna de las condiciones anteriores es verdadera
}
*/

/*
let edad = parseInt(prompt("Ingrese su edad"));

if (edad < 14) {
    alert("No puedes entrar a la fiesta");
} else if (edad < 18) {
    alert("Puedes entrar con un adulto responsable");
} else {
    alert("Puedes entrar a la fiesta")
}
*/




/* CICLOS
estructura del bucle for

for(desde; hasta; actualizacion) {
    codigo a repetir
}
*/

//EJEMPLO

/*
for(let i = 0; i <= 100; i++) {
    console.log(i);
}
*/

/*
let numero = parseInt(prompt("Ingrese el numero"));

for(let i = 1; i<=10; i++); {
let resultado = numero * i;
alert(`${numero} X ${i} = ${resultado}`);
}
*/



// EJEMPLO

/*
for (let turno = 1; turno <=7; turno++) {
    let nombre = prompt("Ingrese su nombre");
    alert(`Turno #${turno} Nombre: ${nombre} `);
}
*/

// EMEPLOS DE BRAKE Y CONTINUE

/*
for (let i = 1; i<=10; i++) {
    if(i === 5) {
        break;
    }

    console.log(i);
}

for (let i = 1; i<= 10; i++) {
    if (i === 5) {
        continue;
    }

    console.log(i);
}
*/

/*
ESTRUCTURA DEL WHILE

while(condicion) {
    codigo a ejecutar cada vez que la condicion sea verdadera
}

EJEMPLOS

let clave =prompt("Ingrese su clave");

while(clave != "pepito") {
    alert("clave incorrecta");
    clave =prompt("Ingrese nuevamente su clave");
    }
    
    alert ("Bienvenido");
}
*/

/*
ESTRUCTURA DO WHILE

let repetir = false;

do {
    console.log("hola");
}   while (repetir);

ESTRUCTURA DEL SWITCH 

switch(valor) {
    case valor1:
        codigo a ejecutar cuando valor === valor1
        break;
    
    case valor2
        codigo a ejecutar cuando valor === valor2
    
    .
    .
    .


    default:
        codigo a ejecutar en caso de que no coincida con ningun valor anterior
        break;
}
*/

/*
let moneda = "ars";

switch (moneda) {
    case "ars":
        console.log("Moneda de Argentina");
        break;

    case "cop":
        console.log("Moneda de Colombia");
        break;

    case "clp":
        console.log("Moneda de Chile");
        break;

    default:
        console.log("Moneda no reconocida");
}¨
*/