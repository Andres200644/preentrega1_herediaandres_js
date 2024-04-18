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

// Luego intenta iniciar sesión
iniciarSesion();

let boton = document.getElementyId("botonAgregarCarrito")
//boton.addEventListener("click", AgregarCarrito)
boton.oneclick = AgregarCarrito

function agregarProductoAlCarrito(e) {
    console.dir(e.target);
    console.log(e.target.id);

    let idDelProducto = Number(e.target.id);

    let posProductoEnCarrito = carrito.findIndex(producto => producto.id === idDelProducto);
    let productoBuscado = listaProductos.find(producto => producto.id === idDelProducto);

    if (posProductoEnCarrito !== -1) {
        carrito[posProductoEnCarrito].unidades++;
        carrito[posProductoEnCarrito].subtotal = carrito[posProductoEnCarrito].precioUnitario * carrito[posProductoEnCarrito].unidades;
    } else {
        carrito.push({
            id: productoBuscado.id,
            nombre: productoBuscado.nombre,
            precioUnitario: productoBuscado.precio,
            unidades: 1,
            subtotal: productoBuscado.precio
        });
    }

    console.log(carrito);
}

function renderizarProductos(productos, carrito) {
    let contenedorProductos = document.getElementById("contenedorProductos");
    contenedorProductos.innerHTML = "";

    productos.forEach(producto => {
        let tarjetaProducto = document.createElement("div");

        tarjetaProducto.innerHTML =
            `<h3>${producto.nombre}</h3>
            <img src="/images/${producto.rutaImagen}" />
            <h4>Precio: ${producto.precio}</h4>
            <p>Stock: ${producto.stock}</p>
            <button id=${producto.id}>Agregar al carrito</button>`;

        contenedorProductos.appendChild(tarjetaProducto);

        let botonAgregarAlCarrito = document.getElementById(producto.id);
        botonAgregarAlCarrito.addEventListener("click", (e) => agregarProductoAlCarrito(e, productos, carrito));
    });
}
function renderizarCarrito(carrito) {
    let contenedorCarrito = document.getElementById("contenedorCarrito");
    contenedorCarrito.innerHTML = "";

    carrito.forEach(producto => {
        let tarjetaProductoCarrito = document.createElement("div");
        tarjetaProductoCarrito.className = "tarjetaProductoCarrito";

        tarjetaProductoCarrito.innerHTML =
            `<p>${producto.nombre}</p>
            <p>${producto.precioUnitario}</p>
            <p>${producto.unidades}</p>
            <p>${producto.subtotal}</p>`;

        contenedorCarrito.appendChild(tarjetaProductoCarrito);
    });
}
