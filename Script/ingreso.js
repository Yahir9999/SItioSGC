//Traemos el valor de nuestro formulario y el DIV, donde guardamos el espacio para mostrar el mensaje

const loginForm = document.getElementById("loginform");
const mensaje = document.getElementById("notificacion");

//Acceso para poder utilizar los datos que se han creado

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  //Leemos nuestro contenido del formulario y lo ponemos como una variable 
  const correo = document.getElementById("correo").value.trim();
  const password = document.getElementById("password").value.trim();

  //Enviamos la info al AppScript
  const formData = new FormData();
  formData.append("accion", "validar");
  formData.append("correo", correo);
  formData.append("password", password);

  try {

    const response = await fetch("https://script.google.com/macros/s/AKfycbyJN4tNeGtHEsz77MzKrBvIFP76lpP4L_XFLHhCwyWreKNQQKWqiewVDkCfhSw6Qrv1Gw/exec", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.valido) {

      mensaje.textContent = "Logueo exitoso";
      mensaje.style.color = "green";

      // Guardar sesión
      sessionStorage.setItem("logueado", "true");

      // 🆕 GUARDAR CORREO DEL USUARIO
      sessionStorage.setItem("correoUsuario", correo);

      // Redireccionar
      setTimeout(() => {
        window.location.href = "../../index.html"; 
      }, 1500);

    } else {

      mensaje.textContent = "Usuario y/o contraseña incorrecto";
      mensaje.style.color = "red";
      loginForm.reset();

    }

  } catch (error) {

    mensaje.textContent = "Problema al intentar conectarse con el BackEnd, intente nuevamente";
    mensaje.style.color = "orange";

  }

});