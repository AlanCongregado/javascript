class Producto {
  constructor(nombre, precio, marca) {
    this.nombre = nombre;
    this.precio = precio;
    this.marca = marca;
  }
}

const productos = [
  new Producto("disco 5kg", 2000, "strong"),
  new Producto("disco 10kg", 3000, "strong"),
  new Producto("disco 15kg", 4000, "G-fitness"),
  new Producto("disco 20kg", 5000, "G-fitness"),
];

const carrito = [];

let criterio = parseInt(prompt('Elegí el criterio deseado:\n1 - Precio (A a Z) \n2 - Precio (Z a A)));

function ordenar(criterio, array){
    let arrayOrdenado = array.slice(0);


    switch (criterio) {
        case 1:
            let nombreAscendente = arrayOrdenado.sort((a, b) => a.precio.localeCompare(b.precio));
            return nombreAscendente;
        case 2:
            let nombreDescendente = arrayOrdenado.sort((a, b) => b.precio.localeCompare(a.precio));
            return nombreDescendente;
        default:
            alert('Criterio inválido');
            break;

    }
}
