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

/* Depende donde definamos las variables es donde se van a reconocer, no es lo mismo definirlas dentro de un bloque de codigo que fuera, por ejemplo:

{
    let nombre = "Andres"
}

console.log(nombre);

Esto no va a funcionar ya que la variable se encuentra en un bloque de codigo y la estamos llamando desde afuera, visceversa si funciona
*/






//               FUNCIONES ANONIMAS


// function (a,b) {return a+b}                 Pero vamos a guardarla en una constante




/*
const sumar = function (a,b) {
    return a+b;
};                           

console.log(sumar (5, 5));
*/