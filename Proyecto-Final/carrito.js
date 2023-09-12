if (localStorage.getItem("Contador-Eren") > 0) {
    const item1 = document.getElementById("item1");
    item1.innerText = "Buzo Eren Yaeger";
    item1p.innerText = "Cantidad = " + localStorage.getItem("Contador-Eren");
    item11p.innerText = "Precio $" + localStorage.getItem("Contador-Eren") * 1500;
  }

  if (localStorage.getItem("Contador-Shinobi") > 0) {
    const item1 = document.getElementById("item2");
    item2.innerText = "Buzo Shinobi";
    item2p.innerText = "Cantidad = " + localStorage.getItem("Contador-Shinobi");
    item22p.innerText = "Precio $" + localStorage.getItem("Contador-Shinobi") * 1900;
  }

  if (localStorage.getItem("Contador-SasukeBordado") > 0) {
    const item1 = document.getElementById("item1");
    item3.innerText = "Buzo Sasuke Bordado";
    item3p.innerText = "Cantidad = " + localStorage.getItem("Contador-SasukeBordado");
    item33p.innerText = "Precio $" + localStorage.getItem("Contador-SasukeBordado") * 3000;
  }

  if (localStorage.getItem("Contador-SasukeDTG") > 0) {
    const item1 = document.getElementById("item1");
    item4.innerText = "Buzo Sasuke";
    item4p.innerText = "Cantidad = " + localStorage.getItem("Contador-SasukeDTG");
    item44p.innerText = "Precio $" + localStorage.getItem("Contador-SasukeDTG") * 1500;
  }


  let eliminarCarrito = document.getElementById("eliminarCarrito");

  eliminarCarrito.addEventListener("click", () => { 

    alert("Carrito eliminado exitosamente");
    localStorage.clear();
    location.reload();
  });