/* ARRAYS

Estructura de un arreglo

[elemento 1, elemento 2, elemento n.....]
*/


// Definiendo arrays

//const vacio = [];
//const numeros = [3, 4, 67];

//                   0             1           2           3
//const nombres = ["Francisco", "Florencia", "Catalina", "Vanesa"];
//const boleanos = [true, false, true, false];
//const varios = [1, "andres", true];

//console.log (nombres [1]); //Estamos llamando al nombre Florencia

/*
for (let index = 0; index < 3; index++) {
    console.log(nombres[index]);
}
*/

// El console solo llega hasta el nombre catalina por el ciclo for, 
//para cambiar eso deberiamos usar el .lenght que nos dice cuantos elementos tiene un array, EJEMPLO:

/*
for (let index = 0; index < nombres.length; index++) {
    console.log(nombres[index]);
}
*/




/*
PUSH permite agregar un elemento al final del array
*/

//nombres.push("Juani");                                                           X
//console.log(nombres);    // [ 'Francisco', 'Florencia', 'Catalina', 'Vanesa', 'Juani' ]




/*
UNSHIFT permite agregar un elemento al principio del array
*/

//nombres.unshift("Lucas");                                                       
//console.log(nombres);    // [ 'Francisco', 'Florencia', 'Catalina', 'Vanesa', 'Juani' ]





//PARA ELIMINAR ELEMENTOS:
// pop PERMITE ELIMINAR UN ELEMENTO FINAL DEL ARRAY

/*
nombres.pop();                                                        //------
console.log(nombres);       // [ 'Francisco', 'Florencia', 'Catalina', 'Vanesa']
*/



// shift PERMITE ELMIMINAR UN ELEMENTO AL INICIO DEL ARRAY

/*
nombres.shift();              
console.log(nombres);       // ['Florencia', 'Catalina']
*/




// splice PERMITE ELIMINAR UNA CANTIDAD DE ELEMENTOS SEGUN LOS INDICES
// PRIMERO DEFINIMOS EN QUE POSICION NOS PARAMOS CONTAMOS CUANTOS ELEMENTOS ELIMINAMOS HACIA ADELANTE


//                   0             1           2           3
const nombres = ["Francisco", "Florencia", "Catalina", "Vanesa"];


//nombres.splice(1,2);
//console.log(nombres);          //[ 'Francisco', 'Vanesa' ]

// Para reemplazar con split
/*
nombres.splice(1,1, "pepito");
console.log(nombres);
*/


// join PERMITE GENERAR UN STRING CON TODOS LOS ELEMENTOS DEL ARRAY

//console.log(nombres.join("  "));    //  Francisco  Florencia  Catalina  Vanesa



//  concat GENERA UN ARRAY CON LOS ELEMENTOS DE VARIOS ARRAYS

/*
const mascotas = ["firulais", "Mia", "Rufus"];
const union = nombres.concat(mascotas);
console.log(union);                                               //['Francisco','Florencia','Catalina','Vanesa','firulais','Mia','Rufus']
*/


//slice PERMITE HACER UNA COPIA DE UN FRAGMENTO DEL ARRAYS 
// PRIMER PARAMETRO ES DONDE NOS PARAMOS, SEGUNDO HASTA DONDE QUEREMOS LLEGAR OCN LA COPIA

/*
const copia = nombres.slice(2,4) //un nro mas de donde nos queremos detener
console.log(copia);
*/


// indexOf permite buscar la posicion de un elemento pasado por parametro
// !! CUANDO NO ENCUENTRA EL ELEMENTO DEVUELVE -1 !!

//console.log(nombres.indexOf("Catalina"));      // 2



// includes permite validar si un elemento esta o no dentro del array

/*
console.log(nombres.includes("pepito"))                  //false
console.log(nombres.includes("Francisco"))              // true


let nombre = prompt ("ingrese el usuario a corroborar");

if (nombres.includes(nombre)) {
    alert("El usuario esta en la lista")
}
else alert("El usuario no esta en la lista");
*/



// reverse INVERTIR EL NOMBRE DEL ARRAY

/*
nombres.reverse();
console.log(nombres);                               // [ 'Vanesa', 'Catalina', 'Florencia', 'Francisco' ]
*/








/*
const eliminar = (nombre) => {
    let index = nombres.indexOf(nombre);

    if(index != -1) {
        nombres.splice(index,1);
        console.log(nombres);
    }
}

eliminar("Francisco");                            // [ 'Florencia', 'Catalina', 'Vanesa' ]
*/



/*
        //NOMBRE ARRAY
const productos = [
    { id: 1, nombres: "Camisa", precio: 150},
    { id: 2, nombres: "Zapatilla", precio: 300},
    { id: 3, nombres: "Pantalon", precio: 250},
    { id: 4, nombres: "Media", precio: 75},    
];


        // solicitamos los producto del array
for (const producto of productos) {
    console.log(item);
}
*/



class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
        this.vendido = false;
    }

    vender() {
        this.vendido = true;
    }
}

const productos = [];

productos.push(new Producto("camisa", 1000));
productos.push(new Producto("zapato", 750));
productos.push(new Producto("gorra", 720));
productos.push(new Producto("media", 10));

let nombre = prompt("Ingrese el nombre del productoa  consultar");

while (nombre != "ESC") {
    let producto;

    for (const item of productos) {
        if (item.nombre === nombre) {
            producto = item;
        }
    }

    if (producto) {
        let mensaje = `
        Nombre: ${producto.nombre}
        Precio: $${producto.precio}
    `;

        alert(mensaje);
    } else {
        alert("El producto no se encuentra disponible");
    }

    nombre = prompt("Ingrese el nombre del productoa  consultar");
}