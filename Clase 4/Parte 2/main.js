// Funcion de orden superior
// Retorno de funciones

/*
function mayorQue(n) {
    return (m) => m > n;
}

let mayoQueCinco = mayorQue(5); 

console.log(mayorQueCinco(6));
console.log(mayorQueCinco(3));
*/


/*
function generarOperacion(operacion) {
    if (operacion === "sumar"){
        return (num1,num2) => num1 + num2;
    }

    if (operacion === "restar"){
        return (num1,num2) => num1 - num2;
    }

    if (operacion === "multiplicar"){
        return (num1,num2) => num1 * num2;
    }

    if (operacion === "dividir"){
        return (num1,num2) => num1 / num2;
    }
}

let suma = generarOperacion("sumar");
console.log(suma(5, 6));

let dividir = generarOperacion("dividir");
console.log(dividir(100, 5));
*/




/*
function iterador(arreglo, funcion) {
    for (const item of arreglo) {
        funcion(item);
    }
}

iterador([12, 34, 56, 67, 5], console.log);
*/



const productos = [
{ id:1, nombre: "media", precio: 100},
{ id:2, nombre: "zapato", precio: 200},
{ id:3, nombre: "gorra", precio: 300},
{ id:4, nombre: "remera", precio: 400},
]




// forEach RECORRE EL ARREGLO
/*
productos.forEach(item =>{
    console.log(item.nombre);
    console.log(item.precio);
    console.log(item.id);
});
*/


//const producto = productos.find((item) => item.nombre === "remera");
//console.log(producto);



//   nombre = prompt("Ingrese el nombre del producto a verificar");
// }

// const productos = [
//   { id: 1, nombre: "media", precio: 1000 },
//   { id: 2, nombre: "gorra", precio: 750 },
//   { id: 3, nombre: "zapato", precio: 1200 },
//   { id: 4, nombre: "camisa", precio: 375 },
// ];

//filter filtra el arreglo dad una condicion
// const filtrados = productos.filter((item) => item.precio > 500);
// console.log(filtrados);

// let precio = parseInt(prompt("Ingrese el precio minimo"));

// const filtrados = productos.filter((item) => item.precio > precio);

// filtrados.forEach((item) => {
//   let mensaje = `
//     Id: ${item.id}
//     Nombre: ${item.nombre}
//     Precio: $${item.precio}
//   `;

//   alert(mensaje);
// });

//some valida si existe al menos un elemento que cumple la condicion
// console.log(productos.some((item) => item.nombre === "camisa"));
// console.log(productos.some((item) => item.nombre === "camisa12341234"));

// const productos = [
//   { id: 1, nombre: "media", precio: 1000 },
//   { id: 2, nombre: "gorra", precio: 750 },
//   { id: 3, nombre: "zapato", precio: 1200 },
//   { id: 4, nombre: "camisa", precio: 375 },
// ];

//map transforma la informacion
// const nombres = productos.map((item) => item.nombre);
// console.log(nombres);

// const precios = productos.map((item) => item.precio);
// console.log(precios);

// const nuevosPrecios = productos.map((item) => {
//   return {
//     id: item.id,
//     nombre: item.nombre,
//     precio: item.precio - item.precio * 0.21,
//   };
// });

// console.log(nuevosPrecios);

//reduce reduce un arreglo a un solo valor
// const numeros = [2, 3, 5, 7, 8];
// const total = numeros.reduce((acumulador, item) => acumulador + item, 0);
// console.log(total);

// const productos = [
//   { id: 1, nombre: "media", precio: 1000 },
//   { id: 2, nombre: "gorra", precio: 750 },
//   { id: 3, nombre: "zapato", precio: 1200 },
//   { id: 4, nombre: "camisa", precio: 375 },
// ];

// const total = productos.reduce((acumulador, item) => acumulador + item.precio, 0);
// console.log(total);

// const numeros = [40, 1, 5, 200];
// console.log(numeros.sort((a, b) => a - b));
// console.log(numeros.sort((a, b) => b - a));

// const items = [
//   { name: "Pikachu", price: 21 },
//   { name: "Charmander", price: 37 },
//   { name: "Pidgey", price: 45 },
//   { name: "Squirtle", price: 60 },
// ];

// console.log(
//   items.sort((a, b) => {
//     if (a.name > b.name) {
//       return 1;
//     }
//     if (a.name < b.name) {
//       return -1;
//     }
//     // a es igual a b
//     return 0;
//   })
// );

// forEach, find, filter, map






// Math permite funciones matematicas
/*
console.log(Math.E);
console.log(Math.PI);
console.log(Math.max(1, 2, 67, 89, 10000));
console.log(Math.min(1, 2, 67, 89, 10000, -1));
console.log(Math.ceil(3.2));
console.log(Math.floor(3.2));
console.log(Math.round(5.4));
console.log(Math.round(5.5));
console.log(Math.sqrt(9));
*/

/*
console.log(Math.random());
console.log(Math.random() * 10);
console.log(Math.round(Math.random() * 10));
*/



// Date
//console.log(Date());
//console.log(new Date(2023, 7, 5));
//console.log(new Date("August 5, 2023"));}

//let hoy = new Date("August 5, 2023");

/*
console.log(hoy.toDateString());
console.log(hoy.toLocaleString());
console.log(hoy.toLocaleDateString());
console.log(hoy.toTimeString());

console.log(hoy.getFullYear());
console.log(hoy.getMonth());
console.log(hoy.getDay());
*/




/*
const navidad = new date ("December 25, 2023");
const hoy = new Date("August 5, 2023");

console.log(navidad - hoy);

const milisegundosPorDia = 86400000;

console.log((navidad - hoy) / milisegundosPorDia);
*/