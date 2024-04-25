//algoritmo con condicional y con ciclo 
let nombreUsuarioRegistrado;
let contrasenaRegistrada;

function registrarUsuario() {
    nombreUsuarioRegistrado = prompt("Registra tu nombre de usuario:");
    contrasenaRegistrada = prompt("Registra tu contraseña:");
}

function iniciarSesion() {
    let nombreUsuario = prompt("Introduce tu nombre de usuario:");
    let contrasena = prompt("Introduce tu contraseña:");

    while (nombreUsuario !== nombreUsuarioRegistrado || contrasena !== contrasenaRegistrada) {
        alert("Nombre de usuario o contraseña incorrectos. Inténtalo de nuevo.");
        nombreUsuario = prompt("Introduce tu nombre de usuario:");
        contrasena = prompt("Introduce tu contraseña:");
    }

    alert("¡Inicio de sesión exitoso!");
}
// Primero registra un nuevo usuario
registrarUsuario();

let listaProductos = [
    { id: 12, nombre: "playera", categoria: "indumentaria", stock: 7, precio: 675, rutaImagen: "ropa1.jpg" },
    { id: 15, nombre: "playera", categoria: "indumentaria", stock: 8, precio: 575, rutaImagen: "ropa2.jpg" },
    { id: 7, nombre: "playera", categoria : "indumentaria" , stock :2 , precio :750 , rutaImagen : "ropa3.jpg" },
    { id :9 , nombre :" playera ", categoria :" indumentaria ", stock :4 , precio :680 , rutaImagen :" ropa4.jpg"},
    { id :17 , nombre :" playera ", categoria :" indumentaria ", stock :7 , precio :575 , rutaImagen :" ropa5.jpg"},
];

function crearTarjetasDeProductos (productos) {
   let contenedorProductos = document.getElementById("contenedorProductos");
   productos.forEach(producto => {
       let tarjetaProducto = document.createElement("div");
       tarjetaProducto.innerHTML =
           `<h3>${producto.nombre}</h3>
            <img src="${producto.rutaImagen}" alt="${producto.nombre}">
            <p>Precio: ${producto.precio}</p>
            <p>Stock: ${producto.stock}</p>`;
       contenedorProductos.appendChild(tarjetaProducto);
   });
}
