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
let listaProductos = [
    { id: 12, nombre: "remera manga larga", categoria: "indumentaria", stock: 3, precio: 7300, rutaImagen: "short.jpg" },
    { id: 15, nombre: "short de basquet", categoria: "indumentaria", stock: 8, precio: 5000, rutaImagen: "short.jpg" },
    { id: 2, nombre: "pelota de futbol", categoria:"deportes" , stock :2 , precio :5800 , rutaImagen :"pelota-futbol.jpg"},
    { id :7 , nombre :"remera mangas cortas" , categoria :"indumentaria" , stock :4 , precio :4500 , rutaImagen :"remera.jpg"},
    { id :9 , nombre :"pelota de volley" , categoria :"deportes" , stock :1 , precio :2800 , rutaImagen :"pelota-voley.jpg"},
    { id :5 , nombre :"gorra 1" ,"categoria":"indumentaria","stock":7,"precio":2650,"rutaImagen":"gorra.jpg"},
    { id :17 ,"nombre":"gorra 2","categoria":"indumentariaaa","stock":7,"precio":2650,"rutaImagen":"gorra2.jpg"}
  ];
  
  principal(listaProductos)
  
  function principal(productos) {
    let carrito = []
    let carritoLS = JSON.parse(localStorage.getItem("carrito"))
    if (carritoLS) {
      carrito = carritoLS
    }
    renderizarCarrito(carrito)
  
    let botonBuscar = document.getElementById("botonBuscar")
    botonBuscar.addEventListener("click", () => filtrarYRenderizar(productos, carrito))
    renderizarProductos(productos, carrito)
  
    let botonComprar = document.getElementById("botonComprar")
    botonComprar.addEventListener("click", finalizarCompra())
  }
  
  function finalizarCompra() {
    localStorage.removeItem("carrito")
  }
  


let boton = document.getElementyId("botonAgregarCarrito")
//boton.addEventListener("click", AgregarCarrito)
boton.oneclick = AgregarCarrito

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

// BUSCAR PRODUCTO
function buscarProducto(arr, busqueda, propiedad) {
    const resultado = arr.filter((producto) => producto[propiedad].includes(busqueda));
    if(resultado.length === 0) {
        alert('No se encontraron productos.');
    } else {                                                
        const mensajeResultado = resultado.map((producto) =>
        `ID: ${producto.id}
        Producto: ${producto.nombre}
        Marca: ${producto.marca}
        Modelo: ${producto.modelo}
        Categoria: ${producto.categoria}
        Stock: ${producto.stock}
        Precio: ${producto.precio}`).join('\n');
        alert(`Productos encontrados (${resultado.length}) resultados:\n${mensajeResultado}`)
    }
}

function principal(productos) {
    let carrito = []
    let carritoLS = JSON.parse(localStorage.getItem("carrito"))
    if (carritoLS) {
        carrito = carritoLS
        renderizarCarrito(carrito)
    }
    
    let botonBuscar = document.getElementById("botonBuscar")
    botonBuscar.addEventListener("click", () => filtrarYRenderizar(productos, carrito))
    
    let botonComprar = document.getElementById("botonComprar")
    botonComprar.addEventListener("click", finalizarCompra)
}

function obtenerCarritoLS() {
    let carrito = []
    let carritoLS = JSON.parse(localStorage.getItem("carrito"))
    if (carritoLS) {
        carrito += carritoLS
     }
     return carrito
}


