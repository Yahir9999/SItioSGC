// Referencia del elemento para poder trabajarlo
const loginform = document.getElementById("loginform");
const mensaje = document.getElementById("notificacion");

// Datos de la cuenta principal que va a tener el ingreso para agregar cuentas
const usuarioValido = {
  correo: "yahir@gmail.com",
  password: "Yahir2025"
};

// Recibir o verificar el formularia a traves del boton de envio de submit 
loginform.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevenir recarga

  //Tomamos los parametros para poder hacer la validacion interna de nuestra cuenta
  const email = document.getElementById("correo").value.trim();
  const password = document.getElementById("password").value.trim();

  if (email === usuarioValido.correo && password === usuarioValido.password) {
    mensaje.textContent = "Acceso permitido";
    mensaje.style.color = "green";

    // Guardar estado de login
    sessionStorage.setItem("logueado", "true");

    // Redirigir tras 1 segundo, para mas comodidad
    setTimeout(() => {
      window.location.href = "../../Menu/Inicio de Sesion/RegistroVisitantes.html";
    }, 1000);
  } else {

    //Mensaje de notificacion que avisa si el correo o la contraseña no exite, o en su caso esta no este registrada en nuestro google sheets
    mensaje.textContent = "Correo y/o contraseña incorrectos";
    mensaje.style.color = "red";
    loginform.reset();
  }
});
 