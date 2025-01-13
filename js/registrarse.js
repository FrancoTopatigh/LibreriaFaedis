let formRegistrarse = document.querySelector("#form-registrarse");
let mensajeNombreApellido = document.querySelector("#mensaje-nombre-apellido");
let mensajeMail = document.querySelector("#mensaje-mail");
let mensajeContrasenia = document.querySelector("#mensaje-contrasenia");
let mensajeConfirmarContrasenia = document.querySelector("#mensaje-confirmar-contrasenia");
let btnRegistro = document.querySelector(".btn-registrarse");
let nombreRegistro = document.querySelector("#nombre-registro");
let apellidoRegistro = document.querySelector("#apellido-registro");
let mailRegistro = document.querySelector("#mail-registro");
let contraseniaRegistro = document.querySelector("#contrasenia-registro");
let confirmarContraseniaRegistro = document.querySelector("#confirmar-contrasenia-registro");

nombreRegistro.addEventListener("input", desactivarBoton);
apellidoRegistro.addEventListener("input", desactivarBoton);
mailRegistro.addEventListener("input", desactivarBoton);
contraseniaRegistro.addEventListener("input", desactivarBoton);
confirmarContraseniaRegistro.addEventListener("input", desactivarBoton);

desactivarBoton();

function desactivarBoton() {
    if (
        nombreRegistro.value.trim() === "" ||
        apellidoRegistro.value.trim() === "" ||
        mailRegistro.value.trim() === "" ||
        contraseniaRegistro.value.trim() === "" ||
        confirmarContraseniaRegistro.value.trim() === ""
    ) {
        btnRegistro.disabled = true;
    } else {
        btnRegistro.disabled = false;
    }
}

formRegistrarse.addEventListener("submit", (e) => {
    e.preventDefault();
    validacionRegistrarse();
});

function validacionRegistrarse() {
    limpiarErrores();
    let error = false;

    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexContrasenia = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,12}/;

    if (nombreRegistro.value === "" || apellidoRegistro.value === "") {
        error = true;
        mostrarError(mensajeNombreApellido, "Nombre y/o apellido inválido. Por favor, completar.");
        nombreRegistro.focus();
    }

    if (mailRegistro.value === "" || !regexCorreo.test(mailRegistro.value)) {
        error = true;
        mostrarError(mensajeMail, "Correo electrónico inválido.");
        mailRegistro.focus();
    }

    if (contraseniaRegistro.value === "" || !regexContrasenia.test(contraseniaRegistro.value)) {
        error = true;
        mostrarError(mensajeContrasenia, "Contraseña inválida.");
        contraseniaRegistro.focus();
    }

    if (confirmarContraseniaRegistro.value !== contraseniaRegistro.value) {
        error = true;
        mostrarError(mensajeConfirmarContrasenia, "Las contraseñas no coinciden.");
        confirmarContraseniaRegistro.focus();
    }

    if (!error) {
        formRegistrarse.submit();
    }
}

function limpiarErrores() {
    mensajeNombreApellido.innerHTML = "";
    mensajeMail.innerHTML = "";
    mensajeContrasenia.innerHTML = "";
    mensajeConfirmarContrasenia.innerHTML = "";
}

function mostrarError(container, message) {
    let mensajeError = document.createElement("p");
    mensajeError.textContent = message;
    container.appendChild(mensajeError);
}




// console.log({
//     formRegistrarse,
//     mensajeNombreApellido,
//     mensajeMail,
//     mensajeContrasenia,
//     mensajeConfirmarContrasenia,
//     btnRegistro,
//     nombreRegistro,
//     apellidoRegistro,
//     mailRegistro,
//     contraseniaRegistro,
//     confirmarContraseniaRegistro,
// });

