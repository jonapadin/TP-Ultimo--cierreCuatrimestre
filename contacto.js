const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const email = document.getElementById('email');
const telefono = document.getElementById('telefono');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');
const check = document.getElementById('check');

let informacion = [];

btnEnviar.addEventListener("click", (e) => {
    e.preventDefault();

    let valorValido = false;
    let errores = "";

    if (nombre.value.length < 3) {
        errores += "Error de longitud del nombre, ingrese un nombre correcto. ";
        valorValido = true;
    }

    if (apellido.value.length < 3) {
        errores += "Error de longitud de apellido, ingrese un apellido correcto. ";
        valorValido = true;
    }

    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!regexEmail.test(email.value)) {
        errores += "Error de email, por favor ingrese un email correcto.";
        valorValido = true;
    }

    let regexTelefono = /^[0-9]{6,10}$/;

    if (!regexTelefono.test(telefono.value)) {
        errores += "Telefono invalido, debe contener entre 6 y 10 numeros. ";
        valorValido = true;
    }

    if (mensaje.value.length < 20) {
        errores += "Error de longitud del mensaje, necesitas mas de 50 caracteres.";
        valorValido = true;
    }

    if (valorValido) {
        check.classList.add('error');
        check.innerText = errores;
    } else {
        informacion = [
            nombre.value,
            apellido.value,
            email.value,
            telefono.value,
            mensaje.value
        ];

        let blob = new Blob([informacion], {type: "text/plain;charset=utf-8"});
        saveAs(blob, "contacto.txt");

        check.classList.remove('error');
        check.classList.add('confirma');
        check.innerText = "¡Mensaje enviado con éxito!";
        nombre.value = "";
        apellido.value = "";
        email.value = "";
        telefono.value = "";
        mensaje.value = "";
    }
});


