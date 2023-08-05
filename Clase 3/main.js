// ``````````````````````````````````````````````````````````````````````

//----------------------------------------------CLASE 3----------------------------------------------------------

/* FUNCIONES

function nombreFuncion() {
    codigo a ejecutar por la funcion
}

para ejecutar la funcion aplicamos los ()

*/


//function saludar() {
//    console.log("Hola");
//}

//saludar();




/* PARA NO REPETIR CODIGO
Utilizamos function para no repetir codigo y en el caso que tengamos que cambiar algo solo lo hacemos cuando se define el function

function saludar() {
    let nombre = prompt("Ingrese su nombre");
    alert(`Su nombre es ${nombre}`)
}

saludar();
saludar();
saludar();

*/



// FUNCTION CON PARAMETROS


/*
function nombreFuncion (parametro1, parametro2, parametro3) {
    codigo a ejecutar
}

nombreFuncion(parametro1;)
*/





/*
function saludar(saludo, nombre) {
    console.log(`${saludo} ${nombre}`);
}

saludar("Hola", "Andres");
saludar("Bienvenida", "Camila");
*/






/*
function sumar(num1,num2) {
    console.log(num1 + num2);
}

sumar(5, 6);
sumar(2, 4);
*/




//   USAMOS EL RETURN PARA QUE NOS DEVUELVA EL RESULTADO DE UNA VARIABLE (en no todas es necesario el return)

/*
function sumar(num1,num2) {
    return num1 + num2;
}

    let resultado = sumar(7, 8);
    console.log(resultado);
*/



/*
function calculadora (num1, num2, operacion) {
    switch (operacion) {
        case "+":
            return num1 + num2;
            break;


        case "-":
            return num1 - num2;
            break;


        case "*":
            return num1 * num2;
            break;


        case "/":
            return num1 / num2;
            break;
    
        default:
            return "Operacion no identificada"
            break;
    }
}

let num1 = parseInt(prompt("Ingrese el numero uno"));
let num2 = parseInt(prompt("Ingrese el numero dos"));
let operacion = parseInt(prompt("Ingrese el simbolo de la operacion"));

let resultado = calculadora(num1, num2, operacion);
alert(`El resultado es ${resultado}`);
*/














// SCOPE (lugar donde se reconoce una variable)

//Depende donde definamos las variables es donde se van a reconocer, no es lo mismo definirlas dentro de un bloque de codigo que fuera, por ejemplo:


/*
{
    let nombre = "Andres"
}

console.log(nombre);
*/


//Esto no va a funcionar ya que la variable se encuentra en un bloque de codigo y la estamos llamando desde afuera, visceversa si funciona







//               FUNCIONES ANONIMAS


// function (a,b) {return a+b}                 Pero vamos a guardarla en una constante




/*
const sumar = function (a,b) {
    return a+b;
};                           

console.log(sumar (5, 4));
*/



//               ARROW FUNCTION

/*
const suma = (a, b) => {
    return a+b;                 //Return implicito con 2 parametros
};                              // Las funciones flecha nos permiten evitar la mala practica de llamar una funcion sin haberla creado

console.log(suma(5,6));
*/

/*
const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const iva = (x) => x * 0.21;

let precioProducto = 1000;
let descuento =100;

let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento)
console.log(nuevoPrecio)
*/






/*
// EJEMPLO VAGO DE LO QUE REALIZA JAVASCRITP EN LA SIGUIENTE OPERACION

= resta(suma(precioProducto, iva(precioProducto)), descuento)

// PRIMERO REEMPLAZA VARIABLES
= resta(suma(1000, iva(1000)), 100)

// REALIZA LAS OPERACIONES DE ADENTRO HACIA AFUERA
= resta(suma(1000, 210), 100)

= resta(1210, 100)

= 1110
*/







//-----------------
/* 
estructura de un objeto
{clave1: valor1, clave2: valor2, ..., claven: valorn}
*/

// let nombre = "pepito";
// let edad = 34;
// let direccion = "AV";

// let persona = {
//   nombre: "pepito",
//   edad: 34,
//   direccion: "AV",
// };

// console.log(persona.nombre);
// console.log(persona.edad);                              No toma variables declaradas externas
// console.log(persona.direccion);

// console.log(persona["nombre"]);
// console.log(persona["edad"]);                           Toma variables declaradas fuera del bloque de codigo
// console.log(persona["direccion"]);

// let persona = {
//   nombre: "pepito",
//   edad: 34,
//   direccion: "AV",
// };

//let clave = prompt("ingrese el nombre de la clave que desea conocer");
// alert(persona[clave]);                                                 -Este codigo solicita la informacion que nosotros pongamos en el prompt (nombre, edad, direccion, etc)

// let info = `Su nombre es ${persona.nombre}, edad: ${persona.edad}, direccion: ${persona.direccion}`;
// console.log(info);

// let persona = {
//   nombre: "pepito",
//   edad: 34,
//   direccion: "AV",
// };

// persona.nombre = "andres";                             -Cualquiera de las 2 sirven para agregar variables al objeto
// persona["telefono"] = 1234;

// alert(persona);

// function Persona(nombre, edad, direccion) {            -Function constructora
//   this.nombre = nombre;
//   this.edad = edad;
//   this.direccion = direccion;
// }

// const persona1 = new Persona("andres", 26, "AV");       -Asi se define un objeto con la function constructora
// const persona2 = new Persona("jaime", 26, "AV1");
// console.log(persona1.nombre);
// console.log(persona2.nombre);

// function Persona(info) {
//   this.nombre = info.nombre;
//   this.edad = info.edad;
//   this.direccion = info.direccion;
// }

// const persona1 = new Persona({
//   nombre: "andres",
//   edad: 26,
//   direccion: "AV",
// });

// for(const clave in persona1){
//   console.log(clave, persona1[clave]);
// }

// function Persona(info) {
//   this.nombre = info.nombre;
//   this.edad = info.edad;
//   this.direccion = info.direccion;
//   this.hablar = function () {
//     console.log(`hola soy ${this.nombre}`);
//   };
// }

// const persona1 = new Persona({
//   nombre: "andres",
//   edad: 26,
//   direccion: "AV",
// });

// persona1.hablar();

// function Persona(info) {
//   this.nombre = info.nombre;
//   this.edad = info.edad;
//   this.direccion = info.direccion;
//   this.hablar = function () {
//     console.log(`hola soy ${this.nombre}`);
//   };
// }

// class Persona {
//   constructor(nombre, edad, direccion) {
//     this.nombre = nombre;
//     this.edad = edad;
//     this.direccion = direccion;
//   }

//   hablar() {
//     console.log(`hola soy ${this.nombre}`);
//   }
// }

// const persona1 = new Persona("andres", 26, "AV");
// console.log(persona1);
// persona1.hablar();

// class Producto {
//   constructor(nombre, precio, imagen) {
//     this.nombre = nombre;
//     this.precio = precio;
//     this.imagen = imagen;
//     this.vendido = false;
//   }

//   vender() {
//     this.vendido = true;
//   }
// }

// const producto1 = new Producto(
//   "RECOMENDADO Monitor gamer curvo Samsung C27R500FHL",
//   867212,
//   "http://asjkfdgh"
// );

// const producto2 = new Producto(
//   "RECOMENDADO Monitor gamer Samsung F24T35 led 24 azul y gris",
//   666131,
//   "http://asdfhg"
// );

// console.log(producto1);
// producto1.vender();
// console.log(producto1);

/*
class Producto {
    constructor(nombre, precio, imagen, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen;
    this.cantidad = cantidad;
    }

    vender() {
      this.cantidad -= 1; // this.cantidad = this.cantidad - 1
    }
}

const producto1 = new Producto(
    "RECOMENDADO Monitor gamer curvo Samsung C27R500FHL",
    867212,
    "http://asjkfdgh",
    5
);

console.log(producto1);
producto1.vender();
producto1.vender();
producto1.vender();
console.log(producto1);
*/