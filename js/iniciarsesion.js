document.addEventListener("DOMContentLoaded", () => {
    const formIniciarSesion = document.getElementById("form-iniciarsesion");

    formIniciarSesion.addEventListener("submit", (event) => {
        if(!validarFormulario()){
            event.preventDefault();
        }
    })
})

function validarFormulario(){
    const mail = document.getElementById("mail-iniciar-sesion").value.trim();
    const contrasenia = document.getElementById("contrasenia-iniciar-sesion").value.trim();

    const mensajeErrorMail = document.getElementById("mensaje-mail-iniciar-sesion");
    const mensajeErrorContrasenia = document.getElementById("mensaje-contrasenia-iniciar-sesion");

    mensajeErrorMail.textContent = "";
    mensajeErrorContrasenia.textContent = "";

    let esValido = true;

    if(mail === ""){
        mensajeErrorMail.textContent = "Por favor, ingresar un mail valido";
        esValido = false;
        document.getElementById("mail-iniciar-sesion").focus();
    }

    if(contrasenia === "" || contrasenia.length < 8){
        mensajeErrorContrasenia.textContent = "Por favor, ingresar contraseña valida (8 caracteres minimo)";
        esValido = false;
        document.getElementById("contrasenia-iniciar-sesion").focus();
    }

    if(esValido){
        Swal.fire({
            title: "Inicio de sesion exitoso!",
            icon: "success",
          });
        return true;
    } else {
        return false;
    }
}

