//algoritmo con condicional y con ciclo 
function iniciarSesion(nombreUsuario, contrasena) {
    let nombreUsuarioCorrecto = "usuario";
    let contrasenaCorrecta = "contrasena";

    while (nombreUsuario !== nombreUsuarioCorrecto || contrasena !== contrasenaCorrecta) {
        alert("Nombre de usuario o contraseña incorrectos. Inténtalo de nuevo.");
        nombreUsuario = prompt("Introduce tu nombre de usuario:");
        contrasena = prompt("Introduce tu contraseña:");
    }

    if (nombreUsuario === nombreUsuarioCorrecto && contrasena === contrasenaCorrecta) {
        alert("¡Inicio de sesión exitoso!");
    }
}

iniciarSesion(prompt("Introduce tu nombre de usuario:"), prompt("Introduce tu contraseña:"));
