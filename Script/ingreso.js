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

    const response = await fetch("https://script.google.com/macros/s/AKfycbySeY5KRM7ulbYZ3oBPqqymB_hMUWpy6DmitiFBsGnEz2DoqPxngsY5ipsxihTI_40gpA/exec", {
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

      const dispositivo = navigator.userAgent;

        const sesionData = new FormData();

        sesionData.append("accion", "registrarSesion");
        sesionData.append("correo", correo);
        sesionData.append("dispositivo", dispositivo);

        const sesionResponse = await fetch("https://script.google.com/macros/s/AKfycbySeY5KRM7ulbYZ3oBPqqymB_hMUWpy6DmitiFBsGnEz2DoqPxngsY5ipsxihTI_40gpA/exec", {
          method: "POST",
          body: sesionData
        });

        const sesionJson = await sesionResponse.json();
        if (sesionJson.sessionId) {
  sessionStorage.setItem("sessionId", sesionJson.sessionId);
}

        

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