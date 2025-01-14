document.addEventListener("DOMContentLoaded", () => {
    const formRegistrarse = document.getElementById("form-registrarse");

    formRegistrarse.addEventListener("submit", (event) => {
        if (!validarFormulario()) {
            event.preventDefault();
        }
    });
});

function validarFormulario() {
    const nombre = document.getElementById("nombre-registro").value.trim();
    const apellido = document.getElementById("apellido-registro").value.trim();
    const mail = document.getElementById("mail-registro").value.trim();
    const genero = document.getElementById("genero-registro").value;
    const contrasenia = document.getElementById("contrasenia-registro").value;
    const confirmarContrasenia = document.getElementById("confirmar-contrasenia-registro").value;

    const mensajeErrorNombreApellido = document.getElementById("mensaje-nombre-apellido");
    const mensajeErrorMail = document.getElementById("mensaje-mail");
    const mensajeErrorGenero = document.getElementById("mensaje-genero");
    const mensajeErrorContrasenia = document.getElementById("mensaje-contrasenia");
    const mensajeErrorConfirmarContrasenia = document.getElementById("mensaje-confirmar-contrasenia");

    mensajeErrorNombreApellido.textContent = "";
    mensajeErrorMail.textContent = "";
    mensajeErrorGenero.textContent = "";
    mensajeErrorContrasenia.textContent = "";
    mensajeErrorConfirmarContrasenia.textContent = "";

    let esValido = true;

    if (nombre === "" || apellido === "") {
        mensajeErrorNombreApellido.textContent = "Por favor, completar nombre y/o apellido";
        esValido = false;
        document.getElementById("nombre-registro").focus();
    }

    if (mail === "" || !mail.includes("@") || !mail.includes(".")) {
        mensajeErrorMail.textContent = "Por favor, ingresar un correo válido";
        esValido = false;
        document.getElementById("mail-registro").focus();
    }

    if (genero === "") {
        mensajeErrorGenero.textContent = "Por favor, seleccionar una opción";
        esValido = false;
        document.getElementById("genero-registro").focus();
    }

    if (contrasenia === "" || contrasenia.length < 8) {
        mensajeErrorContrasenia.textContent = "Por favor, ingresar una contraseña válida (mínimo 8 caracteres)";
        esValido = false;
        document.getElementById("contrasenia-registro").focus();
    }

    if (confirmarContrasenia !== contrasenia) {
        mensajeErrorConfirmarContrasenia.textContent = "Las contraseñas no coinciden";
        esValido = false;
        document.getElementById("confirmar-contrasenia-registro").focus();
    }

    if (esValido) {
        Swal.fire({
            title: "Registro exitoso!",
            icon: "success",
          });
        return true;
    } else {
        return false;
    }
}