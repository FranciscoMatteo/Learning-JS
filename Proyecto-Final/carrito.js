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


// BOTON PARA ELIMINAR CARRITO, FUNCIONA :D
  let eliminarCarrito = document.getElementById("eliminarCarrito");

  eliminarCarrito.addEventListener("click", () => { 

    alert("Carrito eliminado exitosamente");
    localStorage.clear();
    location.reload();
  });