// Referencia de los elementos, obtenemos el formulario y el parametro de notificacion

const registroformulario = document.getElementById("registro");
const mensaje = document.getElementById("notificacion");

//Escuchar (Validar), el envio de nuestro formulario 

registroformulario.addEventListener("submit", function(e){
    e.preventDefault();

    //Guardamos las variables que se guadaron del formulario y creamos una nueva con un numero aleatorio, esto para poder incluirlo en la contraseña 

    const correo = document.getElementById("Correo").value.trim();
    const nombre = document.getElementById("Nombre").value.trim();
    const apellido = document.getElementById("Apellido").value.trim();
    let numeroid = Math.floor(Math.random()*101);

    //Seleccionamos las dos primeras letras del nombre, las dos del apellido y el numero aleatorio, haciendo esta union un solo string
    const password = `${nombre.substring(0,3).toUpperCase()}${apellido.substring(0,3).toUpperCase()}${numeroid}`;

    //Creamos el form para poder enviar nuestros datos 
    const formData = new FormData();

    //La accion que v a ser enviada a nuestro App Script

    formData.append("accion", "guardar");
    formData.append("correo", correo);
    formData.append("password", password);

    //Enviar al SCRIPT
    fetch("https://script.google.com/macros/s/AKfycby6n_SvMetq-aInSCjZNDXUffOWLCP7p8ie7MSnCHZEeHNkOBXjs07ek8JW8PW4N59G/exec", {method: 'POST', body: formData})
    .then(response => {

        //Condicional que compara el resultado de lo enviado, con lo que se tiene en nuestro ducomento de sheets
        if(response.ok){

            //Mandandos un mensaje via el ID de nuestro item en HTML y este muestra lo que mandamos aqui
            mensaje.textContent = "Registro exitoso";
            mensaje.style.color = "green";
            setTimeout(() => {
                registroformulario.reset();
                window.location.href = "../../Menu/Inicio de Sesion/Inicio.html";
            }, 2000);
        } else {
            throw new Error("Error en la respuesta");
        }

    })
    .catch(error => {

        //Lo mismo que arriba, pero este notifica cuando hay un error al resgistrar
        mensaje.textContent = "Error al dar de alta, intente nuevamente";
        mensaje.style.color = "red";
    });


});