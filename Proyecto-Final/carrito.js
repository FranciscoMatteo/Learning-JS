// TRAEMOS EL CARRITO DEL LOCAL STORAGE 
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
console.log(carrito);

//RECORREMOS EL CARRITO
document.addEventListener("DOMContentLoaded", function () {
  const carritoDiv = document.querySelector(".mostrandoCarrito");

  // Muestra los datos del carrito en el HTML
  carrito.forEach(producto => {
    const productoElement = document.createElement("div");
    // div.classList.add("contenedorCarrito");
    productoElement.innerHTML = `
      <h2>Nombre: ${producto.title}</h2>
      <h5>Descripcion: ${producto.description}</h5>
    <div class="imagenCarritoCarta">
      <img src="${producto.image}" alt="asd">
      <h4 class="verde">Precio: ${producto.price}</h4>
      <h5>Cantidad: ${producto.cantidad}</h5>
    </div>
    <p>Precio total = $${producto.cantidad * producto.price}"</p>
      <hr>
    `;
    carritoDiv.appendChild(productoElement);
  });
});


//CREANDO CALCULO DE PRECIO TOTAL DEL CARRITO
const calcularPrecioTotal = () => {
  let precioTotal = 0;
  carrito.forEach((producto) => {
      precioTotal += producto.price * producto.cantidad;
  });
  return precioTotal;
};

// MOSTRANDO PRECIO TOTAL EN HTML
const precioTotalElement = document.querySelector(".precio-total");
precioTotalElement.textContent = "Precio total del carrito: $" + calcularPrecioTotal();

// BOTON PARA ELIMINAR CARRITO, FUNCIONA :D
  let eliminarCarrito = document.getElementById("eliminarCarrito");

  eliminarCarrito.addEventListener("click", () => { 

    alert("Carrito eliminado exitosamente");
    localStorage.clear();
    location.reload();
  });

  // BOTON COMPRAR
  let botonComprar = document.getElementById("botonComprar");

  botonComprar.addEventListener("click", () => { 

    alert("Gracias por elegirnos, su compra llegara a su destino en los proximos 15 minutos, y con envio gratis ;)");
  });