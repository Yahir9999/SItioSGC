//Traemos el valor de nuestro formulario y el DIV, donde guardamos el espacio para mostrar el mensaje

const loginForm = document.getElementById("loginform");
const mensaje = document.getElementById("notificacion");


//Acceso para poder utilizar los datos que se han creado

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  //Leemos nuestro contenido del formulario y lo ponemos como una variable 
  const correo = document.getElementById("correo").value.trim();
  const password = document.getElementById("password").value.trim();

  //Enviamos el la info al AppScript, esto con la finalidad de hacer la comparacion via AppScript, mandando el parametro y  las acciones
  const formData = new FormData();
  formData.append("accion", "validar");
  formData.append("correo", correo);
  formData.append("password", password);

  //Manejo de excepciones
  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycby6n_SvMetq-aInSCjZNDXUffOWLCP7p8ie7MSnCHZEeHNkOBXjs07ek8JW8PW4N59G/exec", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.valido) {
      mensaje.textContent = "Logueo exitoso";
      mensaje.style.color = "green";

      //Guardamos el login, esto para evitar que las personas puedan entrar por otros links y tengan que iniciar sesion
      sessionStorage.setItem("logueado", "true");

      //Condicion para redireccionar a nuestra pagina principal, esto solo en caso de que el correo y la contraseña sean iguales, ademas que  esten en el registro de las cuentas
      
      setTimeout(() => {
        window.location.href = "../../index.html"; 
      }, 1500);

    } else {

      //Envia un mensaje a nuestro DIV, donde tenemos asignado este ID a un elemento el cual permite mostrar los mensajes 
      mensaje.textContent = "Usuario y/o contraseña incorrecto";
      mensaje.style.color = "red";
      loginForm.reset();
    }

  } catch (error) {

    //Metemos un catch error para enviar un mensaje de que no se pudo conectar con el servidor backend (en este caso nuestro documento de excel)
      mensaje.textContent = "Problema al intentar contectarse con el BackEnd, intente nuevamente";
      mensaje.style.color = "orange";
  }
});
 