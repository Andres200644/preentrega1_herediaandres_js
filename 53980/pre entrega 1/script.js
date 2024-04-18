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