// getElementById

/*
let div = document.getElementById("aplicacion");

console.log(div.innerHTML);         //Trae el codifo
console.log(div.innerText);         //Trae el texto
*/

/*
let parrafo = document.getElementById("parrafo");
console.log(parrafo.innerHTML);
console.log(parrafo.innerText);
*/








//getElementsByClassName


/*
let perritos = document.getElementsByClassName("perritos");


console.log(perritos[0].innerHTML);
console.log(perritos[1].innerHTML);
console.log(perritos[2].innerHTML);


for (const perrito of perritos) {
    console.log(perrito.innerHTML);
}
*/







//getElementsByTagName

/*
let divs = document.getElementsByTagName("div");
console.log(divs[0].innerHTML);
console.log(divs[1].innerHTML);
console.log(divs[2].innerHTML);
*/








// MODIFICACION DE NODOS
/*
let saludo = document.getElementById("saludo");
saludo.innerHTML = "Hola coder";

// Ejemplo de para q sirve cambiar via js

let seccion = prompt("ingrese la seccion deseada");

if (seccion === "carrito") {
    saludo.innerHTML = "Bienvenido al carrito";
}     else if (seccion === "favoritos") {
    saludo.innerHTML = "Bienvenido a los favoritos"
}     else {
    saludo.innerHTML = "Bienvenido a nuestra pagina"
}
*/








// AGREGAR O QUITAR NODOS
/*
let parrafo = document.createElement("p"); // Creacion de la etiqueta
parrafo.innerHTML = "<h1> hola a todos</h1>" //Asignacion del contenido  
document.body.append(parrafo); //append para agregas



let contenedor = document.getElementById("contenedor");
contenedor.append(parrafo); //Asignacion del padre
*/


// PARA ELIMINAR NODOS
/*
let contenedor = document.getElementById("contenedor");
contenedor.remove();
*/





/*
let contenedor = document.getElementById("contenedor");
const personas = ["Juan", "Luios", "Fran"];

personas.forEach((item)) => {
    let div =document.createElement("div");
    div.innerHTML = `<h1>${item}</h1>`;
    document.body.append(div);
}
*/



