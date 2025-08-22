const registroformulario = document.getElementById("registro");
const mensaje = document.getElementById("notificacion");

registroformulario.addEventListener("submit", function(e){
    e.preventDefault();

    // Obtenemos los valores del formulario
    const nombre = document.getElementById("Nombre").value.trim();
    const apellido = document.getElementById("Apellido").value.trim();
    const puesto = document.getElementById("Puesto").value.trim();
    const correo = document.getElementById("Correo").value.trim();

    // Creamos un número aleatorio para la contraseña
    const numeroid = Math.floor(Math.random() * 101);

    // Generamos la contraseña: primeras 3 letras del nombre + primeras 3 del apellido + número aleatorio
    const password = `${nombre.substring(0,3).toUpperCase()}${apellido.substring(0,3).toUpperCase()}${numeroid}`;

    // Preparamos los datos a enviar al Apps Script
    const data = new URLSearchParams();
    data.append("accion", "guardar");
    data.append("correo", correo);
    data.append("puesto", puesto);
    data.append("password", password);

    // URL de tu Web App de Google Apps Script
    const url = "https://script.google.com/macros/s/AKfycbyJN4tNeGtHEsz77MzKrBvIFP76lpP4L_XFLHhCwyWreKNQQKWqiewVDkCfhSw6Qrv1Gw/exec";

    fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: data
    })
    .then(response => response.json())
    .then(response => {
        if(response.resultado){
            mensaje.textContent = `Registro exitoso. Contraseña: ${password}`;
            mensaje.style.color = "green";
            setTimeout(() => {
                registroformulario.reset();
                window.location.href = "../../Menu/Inicio de Sesion/Inicio.html"; 
            }, 2000);
        } else {
            mensaje.textContent = response.error || "Error desconocido";
            mensaje.style.color = "red";
        }
    })
    .catch(error => {
        mensaje.textContent = "Error al dar de alta, intente nuevamente";
        mensaje.style.color = "red";
        console.error(error);
    });
});

