
let nombre = document.getElementById('nombre');
let apellido = document.getElementById('apellido');
let email = document.getElementById('email');
let telefono = document.getElementById('telefono');
let mensaje = document.getElementById('mensaje');
let btnEnviar = document.getElementById('enviar');

let informacion = [];

btnEnviar.addEventListener("click", (e)=>{
    e.preventDefault(); //Previene la accion del form de actualizar la pag

    informacion[0] = nombre.value;
    informacion[1] = apellido.value;
    informacion[2] = email.value;
    informacion[3] = telefono.value;
    informacion[4] = mensaje.value;

    let blob = new Blob ([informacion], {type: "text/plain;charset=utf-8"});

    saveAs(blob, "contacto.txt");

    let check = document.getElementById('check')
    check.classList.add('confirma')
    check.innerText = `¡Mensaje enviado con exito!`;
})

