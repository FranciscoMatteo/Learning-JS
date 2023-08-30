let stockEren = 1;
let stockShinobi = 2;
let stockSasukeBordado = 3;
let stockSasukeDTG = 4;

let carritoConCosas = false;

const buzos = [
    {id: 1, nombre: "Buzo Eren", precio: 1500},
    {id: 2, nombre: "Buzo Shinobi", precio: 1900},
    {id: 3, nombre: "Buzo Sasuke Bordado", precio: 3000},
    {id: 4, nombre: "Buzo Sasuke DTG", precio: 1500},
];


// USO DE EVENTOS
// BOTON NUMERO 1
let botonEren = document.getElementById("botonEren");

botonEren.addEventListener("click", () => {
    //FUNCION A EJECUTAR
    console.log("clickeaste el buzo de eren"); // Dejamos estos 2 console log temporalmente para corroborar su correcto funcionamiento
    stockEren = stockEren - 1;
    console.log(stockEren);
    carritoConCosas = true;

    if (carritoConCosas = true) {
        const carritoVacio = document.getElementById("carritoVacio");
        const carritoLleno = document.getElementById("carritoLleno");
    
        carritoVacio.style.display= "none";
        carritoLleno.style.display= "block";
    }

    if (stockEren < 0) {
        alert("No tenemos mas stock del buzo seleccionado");
        const botonEren = document.getElementById("botonEren");
        const botonSinStock = document.getElementById("botonSinStock");

        botonEren.style.display = "none";
        botonSinStock.style.display = "flex";
        botonSinStock.style.margin = "auto";
        botonSinStock.style.maxWidth = "35%";
        botonSinStock.style.justifyContent = "center";
    } 
});





// BOTON NUMERO 2
let botonShinobi = document.getElementById("botonShinobi");

botonShinobi.addEventListener("click", () => {
    //FUNCION A EJECUTAR
    console.log("clickeaste el buzo de Shinobi");
    stockShinobi = stockShinobi - 1;
    console.log(stockShinobi);
    carritoConCosas = true;

    if (stockShinobi < 0) {
        alert("No tenemos mas stock del buzo seleccionado");
        const botonShinobi = document.getElementById("botonShinobi");
        const botonSinStock2 = document.getElementById("botonSinStock2");

        botonShinobi.style.display = "none";
        botonSinStock2.style.display = "flex";
        botonSinStock2.style.margin = "auto";
        botonSinStock2.style.maxWidth = "35%";
        botonSinStock2.style.justifyContent = "center";
    } 
});






// BOTON NUMERO 4
let botonSasukeBordado = document.getElementById("botonSasukeBordado");

botonSasukeBordado.addEventListener("click", () => {
    //FUNCION A EJECUTAR
    console.log("clickeaste el buzo de Shinobi");
    stockSasukeBordado = stockSasukeBordado - 1;
    console.log(stockSasukeBordado);
    carritoConCosas = true;

    if (stockSasukeBordado < 0) {
        alert("No tenemos mas stock del buzo seleccionado");
        const botonSasukeBordado = document.getElementById("botonSasukeBordado");
        const botonSinStock3 = document.getElementById("botonSinStock3");

        botonSasukeBordado.style.display = "none";
        botonSinStock3.style.display = "flex";
        botonSinStock3.style.margin = "auto";
        botonSinStock3.style.maxWidth = "35%";
        botonSinStock3.style.justifyContent = "center";
    } 
});





// BOTON NUMERO 4
let botonSasukeDTG = document.getElementById("botonSasukeDTG");

botonSasukeDTG.addEventListener("click", () => {
    //FUNCION A EJECUTAR
    console.log("clickeaste el buzo de Shinobi");
    stockSasukeDTG = stockSasukeDTG - 1;
    console.log(stockSasukeDTG);
    carritoConCosas = true;

    if (stockSasukeDTG < 0) {
        alert("No tenemos mas stock del buzo seleccionado");
        const botonSasukeDTG = document.getElementById("botonSasukeDTG");
        const botonSinStock4 = document.getElementById("botonSinStock4");

        botonSasukeDTG.style.display = "none";
        botonSinStock4.style.display = "flex";
        botonSinStock4.style.margin = "auto";
        botonSinStock4.style.maxWidth = "35%";
        botonSinStock4.style.justifyContent = "center";
    } 
});

// HASTA ESTE PUNTO LOGRAMOS QUE LOS BUZOS TENGAN UN STOCK Y SE VEAN REFLEJADOS EN LA PAGINA




// EN ESTA SIGUIENTE SECCION VAMOS A TRATAR DE CREAR UN PUNTO DE NOTIFIACION EN EL LOGO DEL CARRITO CUANDO SE AGREGUE CUALQUIER PRENDA
