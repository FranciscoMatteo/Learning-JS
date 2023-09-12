// SECCION DE STOCK
let stockEren = 1;
let stockShinobi = 2;
let stockSasukeBordado = 3;
let stockSasukeDTG = 4;

// SECCION CONTADORA
let contadorEren = 0;
let contadorShinobi = 0;
let contadorSasukeBordado = 0;
let contadorSasukeDTG = 0;

// STORAGES PARA QUE LOS CONTADORES SE GUARDEN EN 0 ANTES DEL EVENTO CLICKEAR EL BOTON
localStorage.setItem("Contador-Eren", JSON.stringify(contadorEren));
localStorage.setItem("Contador-Shinobi", JSON.stringify(contadorShinobi));
localStorage.setItem("Contador-SasukeBordado", JSON.stringify(contadorSasukeBordado));
localStorage.setItem("Contador-SasukeDTG", JSON.stringify(contadorSasukeDTG));

// ARRAY CON CARRITO
const buzos = [
    {id: 1, nombre: "Buzo Eren", precio: 1500},
    {id: 2, nombre: "Buzo Shinobi", precio: 1900},
    {id: 3, nombre: "Buzo Sasuke Bordado", precio: 3000},
    {id: 4, nombre: "Buzo Sasuke DTG", precio: 1500},
];

localStorage.setItem("carrito", JSON.stringify(buzos));

// USO DE EVENTOS
// BOTON NUMERO 1
let botonEren = document.getElementById("botonEren");

botonEren.addEventListener("click", () => {
    //FUNCION A EJECUTAR
    console.log("clickeaste el buzo de eren"); 
    stockEren = stockEren - 1;
    contadorEren = contadorEren + 1;
    localStorage.setItem("Contador-Eren", JSON.stringify(contadorEren));
    // Dejamos estos 2 console log temporalmente para corroborar su correcto funcionamiento
    // console.log(stockEren);
    // console.log(contadorEren);

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
    contadorShinobi = contadorShinobi + 1;
    localStorage.setItem("Contador-Shinobi", JSON.stringify(contadorShinobi));

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
    contadorSasukeBordado = contadorSasukeBordado + 1;
    localStorage.setItem("Contador-SasukeBordado", JSON.stringify(contadorSasukeBordado));

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
    contadorSasukeDTG = contadorSasukeDTG + 1;
    localStorage.setItem("Contador-SasukeDTG", JSON.stringify(contadorSasukeDTG));

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



let prueba;
fetch('https://fakestoreapi.com/products?limit=3')
            .then(res=>res.json())
            .then(json=> {
                prueba = json
                console.log(prueba);
            }
            )

            document.getElementById(`span`).innerText = prueba