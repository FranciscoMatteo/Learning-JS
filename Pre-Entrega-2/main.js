const productos = [
    { id: 1, nombre: "buzo", precio: 150},
    { id: 2, nombre: "remera", precio: 75},
    { id: 3, nombre: "pantalon", precio: 250},
    { id: 4, nombre: "zapatillas", precio: 300},    
];

let carrito = []

let seleccion = prompt("¿Hola como estas?¿Quieres comprar algun producto?");

while(seleccion != "si" && seleccion != "no") {
alert("Porfavor, solo responder con si o no");
seleccion = prompt("¿Desea comprar algun producto? ¿Si o no?");
}

if (seleccion == "si") {
    alert("Perfecto, nos pone muy feliz que nos elijas!")
    alert("A continuación, todos nuestros productos con sus precios:")
    let todosLosProductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$")
    alert(todosLosProductos.join(" - "))
} else if (seleccion == "no") {
    alert("Gracias por visitarnos")
}

while (seleccion != "no") {
    let producto = prompt("agrega un producto a tu carrito")
    let precioFinal = 0

    if (producto == "buzo" || producto == "remera" || producto == "pantalon" || producto == "zapatillas") {
    switch(producto) {
        case "buzo":
            precioFinal = 150
            break;

        case "remera":
            precioFinal = 75
            break;
        
        case "pantalon":
            precioFinal = 250
            break;

        case "zapatilla":
            precioFinal = 300
            break;
        }

    let unidades = parseInt(prompt("¿Cuantas unidades quiere llevar?"))

    carrito.push({producto, unidades, precio})
    console.log(carrito)
    } else {
        alert("No contamos con ese producto, porfavor revisa si lo escribiste bien")
    }

    seleccion = prompt("¿Desea seguir comprando?")

    while(seleccion === "no") {
        alert("Gracias por comprarnos")
        carrito.forEach((carritoFinal) => {
            console.log(`Producto: ${carritoFinal.producto}, unidades:${carritoFinal.unidades}
            Total a pagar: ${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break;
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)