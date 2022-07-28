class Producto {
  constructor(nombre, precio, marca) {
    this.nombre = nombre;
    this.precio = precio;
    this.marca = marca;
  }
}
let usuario = prompt("Ingrese su nombre de usuario");
let pinUsuario = "1287";
let ingresar = false;

function saludar(usuario) {
  let saludo = "Hola " + usuario + " bienvenido";
  return saludo;
}

for (let i = 2; i >= 0; i--) {
  let pinIngresado = prompt("ingrese su pin");
  if (pinIngresado == pinUsuario) {
    alert(saludar(usuario));
    ingresar = true;
    break;
  } else {
    alert("Error. te quedan " + i + " intentos");
  }
}

if (ingresar == true) {
  let opcion = prompt(
    "que vas a comprar? \n1.disco de 5kg=$200 \n2.disco de 10kg=$300 \n3.disco de 15kg=$400m \n4.disco de 20kg=$500. \nsi queres salir presioná x."
  );
  let cantidad = parseInt(prompt("Cuantos discos vas a llevar?"));
  let disco5 = 200;
  let disco10 = 300;
  let disco15 = 400;
  let disco20 = 500;
  let iva = 1.21;
  function total(a, b, c) {
    let importeTotal = a * b * c;
    return importeTotal;
  }
}

const productos = [
  new Producto("disco 5kg", 2000, "strong"),
  new Producto("disco 10kg", 3000, "strong"),
  new Producto("disco 15kg", 4000, "G-fitness"),
  new Producto("disco 20kg", 5000, "G-fitness"),
];

const carrito = [];

let criterio = parseInt(
  prompt("Elegí el criterio deseado:\n1 - Precio (A a Z) \n2 - Precio (Z a A)")
);

function ordernado(criterio, array) {
  let arrayOrdenado = array.slice(0);

  switch (criterio) {
    case 1:
      let nombreAscendente = arrayOrdenado.sort((a, b) =>
        a.precio.localeCompare(b.precio)
      );
      return nombreAscendente;
    case 2:
      let nombreDescendente = arrayOrdenado.sort((a, b) =>
        b.precio.localeCompare(a.precio)
      );
      return nombreDescendente;
    default:
      alert("Criterio inválido");
      break;
  }
}

const addProduct = document.getElementsByClassName(".product-add");

addProduct.addEventListener("click", () => {
  console.log("Le diste click");
});
