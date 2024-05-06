let usuariosRegistrados = {};

function registrarUsuario() {
    let nombreUsuario = prompt("Por favor, registra tu nombre de usuario:");
    let contraseña = prompt("Por favor, registra tu contraseña:");

    if (nombreUsuario in usuariosRegistrados) {
        alert("Este nombre de usuario ya está registrado. Por favor, elige otro.");
        registrarUsuario();
    } else {
        usuariosRegistrados[nombreUsuario] = contraseña;
        alert("Usuario registrado exitosamente!");
    }
}

function iniciarSesion() {
    let nombreUsuario = prompt("Por favor, ingresa tu nombre de usuario:");
    let contraseña = prompt("Por favor, ingresa tu contraseña:");

    if (nombreUsuario in usuariosRegistrados && usuariosRegistrados[nombreUsuario] === contraseña) {
        alert("Has iniciado sesión exitosamente!");
    } else {
        alert("Nombre de usuario o contraseña incorrectos. Por favor, intenta de nuevo.");
        iniciarSesion();
    }
}

registrarUsuario();
iniciarSesion();

// clase constructora de productos
class Producto {
    constructor(id, nombre, marca, modelo, categoria, stock, precio, imagen) {
        this.id = id,
            this.nombre = nombre,
            this.marca = marca,
            this.modelo = modelo,
            this.categoria = categoria,
            this.stock = stock,
            this.precio = precio,
            this.imagen = imagen
    }
}

// array de productos
// nombre, marca, modelo, categoria, stock, precio, imagen
let productos  = [
    new Producto(1, "Jordan", "Air Jordan 1 Mid toe",'Jordan Caballeros', 9, 3199,"../pre entrega 1/images/Jordan1.jpg" ),
    new Producto(2, "Jordan", "Air Jordan 1 Mid Black Royal",'Jordan Caballeros',  8, 3199,"../pre entrega 1/images/Jordan2.jpg"),
    new Producto(3, "Jordan", "Air Jordan Jumpman",'Jordan Caballeros', 12, 3800,"../pre entrega 1/images/Jordan3.jpg"),
    new Producto(4, "Jordan",  "Air Jordan Legacy 312 low",'Jordan Caballeros',  10, 4600,"../pre entrega 1/images/jordan4.jpg"),
    new Producto(5, "Jordan", "Air Jordan 5Navy",'Jordan Caballeros', 6, 21999,"../pre entrega 1/images/jordan5.jpg"),
    new Producto(6, "Jordan",  "Air Jordan 4 craft",'Jordan Caballeros',  20, 4600, "../pre entrega 1/images/jordan6.jpg"),
    new Producto(7, "Jordan",  "Air Jordan Legacy 312 low",'Jordan Caballeros',  20, 5100,"../pre entrega 1/images/jordan7.jpg"),
    new Producto(8, "Jordan",  "Air Jordan Legacy 312 Low",'Jordan Caballeros',  7, 24999,"../pre entrega 1/images/jordan8.jpg"),
    new Producto(9, "Jordan",  "Playera Jordan Brand",'Jordan Caballeros',  15, 849,"../pre entrega 1/images/ropa1.jpg"),
    new Producto(10, "Addidas",  "Addidas Originals",'Addidas Caballeros',  20, 799,"../pre entrega 1/images/ropa2.jpg"),
    new Producto(11, "Puma",  "Playera Puma T7",'Puma Caballeros',  3, 1300,"../pre entrega 1/images/ropa3.jpg"),
    new Producto(12, "Addidas",  "Playera Worldwide Hoops City",'Addidas Caballeros',  19, 699,"../pre entrega 1/images/ropa4.jpg"),
    new Producto(13, "Addidas",  "Playera Classic Monogram",'Addidas Caballeros',  9, 1200,"../pre entrega 1/images/ropa5.jpg"),
    new Producto(14, "Nike",  "Playera Sportwear Max90",'   Nike Caballeros',  31, 699,"../pre entrega 1/images/ropa6.jpg"),
    new Producto(15, "Addidas",  "Playera Manchester United",'Addidas Caballeros',  14, 2800,"../pre entrega 1/images/ropa7.jpg"),
    new Producto(16, "Jordan",  "PlayeraJordan Brand",'Jordan Caballeros',  30, 1149,"../pre entrega 1/images/ropa8.jpg"),
    new Producto(17, "Addidas",  "Playera Worldwide Hoops City",'Addidas Caballeros',  10, 699,"../pre entrega 1/images/ropa9.jpg"),
    new Producto(18, "Addidas",  "Playera Liquid Trifoil",'Addidas Caballeros',  23, 511,"../pre entrega 1/images/ropa10.jpg"),
    new Producto(19, "Nike",  "Top Spprtswear",'Addidas Damas',  10, 625,"../pre entrega 1/images/ropaM1.jpg"),
    new Producto(20, "Jordan",  "Playera Jordan Graphic",'Jordan Damas',  18, 575,"../pre entrega 1/images/ropaM2.jpg"),
    new Producto(21, "Addidas",  "  Playera Adidas Trefoil Adicolor",'Addidas Damas',  10, 699,"../pre entrega 1/images/ropaM3.jpg"),
    new Producto(20, "Jordan",  "Playera Jordan Graphic2",'Jordan Damas',  18, 575,"../pre entrega 1/images/ropaM4.jpg"),
    new Producto(20, "Jordan",  "Playera Jordan Graphic2",'Jordan Damas',  18, 575,"../pre entrega 1/images/ropaM5.jpg"),
    new Producto(20, "Jordan",  "Playera Addidas Zebra",'Addidas Damas',  18, 543,"../pre entrega 1/images/ropaM6.jpg"),
    new Producto(20, "Pma",  "Playera Puma Classics",'Puma Damas',  18, 599,"../pre entrega 1/images/ropaM7.jpg"),



]

// vacia el div antes de volver a listar
function vaciarDiv() {
    let contenedorTarjetas = document.getElementById("contenedor-tarjetas");
    contenedorTarjetas.className = "container-tarjeta";
    contenedorTarjetas.innerHTML = "";
    return contenedorTarjetas
}

// lista Todos los productos
function listarTodos(arr) {
    productosListados = [];
    //vacia el div
    let contenedorTarjetas = vaciarDiv();
    //listar todos los productos
    arr.forEach(producto => {
        if (producto.stock > 0) {
            listarTarjeta(producto, contenedorTarjetas);
            productosListados.push(producto);
        }
    });
}
// busca productos
function buscarProductos(arr) {
    productosListados = [];
    // Vacía el div
    let contenedorTarjetas = vaciarDiv();
    // Filtrar por búsqueda
    let inputBusqueda = document.getElementById("inputBuscar");
    let textoBusqueda = inputBusqueda.value.toLowerCase();
    let productosFiltrados = arr.filter(producto => {
        let nombreCoincide = producto.nombre.toLowerCase().includes(textoBusqueda);
        let categoriaCoincide = producto.categoria.toLowerCase().includes(textoBusqueda);
        let marcaCoincide = producto.marca.toLowerCase().includes(textoBusqueda);
        let modeloCoincide = producto.modelo.toLowerCase().includes(textoBusqueda);
        return nombreCoincide || categoriaCoincide || marcaCoincide || modeloCoincide;
    });
    productosFiltrados.forEach(producto => {
        if (producto.stock > 0) {
            listarTarjeta(producto, contenedorTarjetas);
        }
    });
    productosListados.push(...productosFiltrados)
}

// selector Sort acomodar por:
let opcionSort = (opcion) => {
    opcion.addEventListener("change", () => {
        let opcionSeleccionada = opcion.value;
        switch (opcionSeleccionada) {
            case "precioMayorAMenor":
                listarPorPrecioMayor(productosListados);
                break;
            case "precioMenorAMayor":
                listarPorPrecioMenor(productosListados);
                break;
            case "NombreAaZ":
                listarPorNombreAZ(productosListados);
                break;
            case "NombreZaA":
                listarPorNombreZA(productosListados);
                break;
            default:
                break;
        }
    });
};

// NOMBRE: A-Z
function listarPorNombreAZ(arr) {
    //vacia el div
    let contenedorTarjetas = vaciarDiv();
    // Ordena los productos alfabéticamente por nombre
    let productosOrdenados = arr.sort((a, b) => a.nombre.localeCompare(b.nombre));
    productosOrdenados.forEach(producto => {
        if (producto.stock > 0) {
            listarTarjeta(producto, contenedorTarjetas);
        }
    });
}

// NOMBRE: Z-A
function listarPorNombreZA(arr) {
    //vacia el div
    let contenedorTarjetas = vaciarDiv();
    // Ordenar los productos alfabéticamente de forma descendente (Z-A)
    let productosOrdenados = arr.sort((a, b) => b.nombre.localeCompare(a.nombre));
    productosOrdenados.forEach(producto => {
        if (producto.stock > 0) {
            listarTarjeta(producto, contenedorTarjetas);
        }
    });
}

// PRECIO: MENOR a MAYOR
function listarPorPrecioMenor(arr) {
    //vacia el div
    let contenedorTarjetas = vaciarDiv();
    // Ordenar los productos por precio de menor a mayor
    let productosOrdenados = arr.sort((a, b) => a.precio - b.precio);
    contenedorTarjetas.innerHTML = ""
    productosOrdenados.forEach(producto => {
        if (producto.stock > 0) {
            listarTarjeta(producto, contenedorTarjetas);
        }
    });
}

// PRECIO: MAYOR a MENOR
function listarPorPrecioMayor(arr) {
    //vacia el div
    let contenedorTarjetas = vaciarDiv();
    // Ordenar los productos por precio de mayor a menor
    let productosOrdenados = arr.sort((a, b) => b.precio - a.precio);
    contenedorTarjetas.innerHTML = ""
    productosOrdenados.forEach(producto => {
        if (producto.stock > 0) {
            listarTarjeta(producto, contenedorTarjetas);
        }
    });
}

//generador de tarjeta
function listarTarjeta(producto, contenedor) {
    let tarjetaProducto = document.createElement("div");
    tarjetaProducto.className = "tarjeta-producto";
    tarjetaProducto.innerHTML =
        `
        <img id="imagenTarjeta" src=${producto.imagen} alt="Motherboard" class="tarjeta-producto-imagen">
        <div class="linea-separadora"></div>
        <h3 class="tarjeta-producto-nombre">${producto.nombre}</h3>
        <p class="tarjeta-producto-detalles">Marca: <span class="brand">${producto.marca}</span></p>
        <p class="tarjeta-producto-detalles">Modelo: <span class="model">${producto.modelo}</span></p>
        <p class="tarjeta-producto-detalles">Categoría: <span class="model">${producto.categoria}</span></p>
        <p class="tarjeta-producto-precio">$${producto.precio}</p>
        <div class="linea-separadora"></div>
        <div class="container-botones">
            <button class="btn-producto btn-ver-producto">Ver</button>
            <button class="btn-producto btn-agregar-al-carrito">Agregar al carrito</button>
        </div>
        `;
    contenedor.appendChild(tarjetaProducto);
}

// funcion principal
function principal() {

    //lista todos los productos
    listarTodos(productos);
    // BOTONES
    //Botones Menu Principal
    let btnMenuPrincipalProductos = document.getElementById("btnMenuPrincipalProductos");
    btnMenuPrincipalProductos.onclick = () => listarTodos(productos);

    // Botones del Menu Categorias
    //boton Jordan
    let btnCategoriasJordan = document.getElementById("btnCategoriasJordan");
    btnCategoriasMotherboards.onclick = () => filtrarPorCategoria(productos, "Jordan");
    //boton Ropa
    let btnCategoriasRopa = document.getElementById("btnCategoriasRopa");
    btnCategoriasRopa.onclick = () => filtrarPorCategoria(productos, "Ropa");
    //boton Ropa Mujer
    let btnCategoriasRopaMujer = document.getElementById("btnCategoriasRopaMujer");
    btnCategoriasRopaMujer.onclick = () => filtrarPorCategoria(productos, "RopaMujer");
    // boton Buscar
    let btnBuscar = document.getElementById("btnBuscar");
    btnBuscar.onclick = () => buscarProductos(productos);

    // selector opciones sort
    let opcion = document.getElementsByClassName("selectorSort")[0];
    opcion.onclick = () => opcionSort(opcion);
}

//-----------------------------------------------------------------------------
//Ejecucion
principal()
