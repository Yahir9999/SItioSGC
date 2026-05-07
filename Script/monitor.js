// Actualizar actividad cada minuto

console.log("MONITOR CARGADO");
setInterval(async () => {

  const sessionId = sessionStorage.getItem("sessionId");

  if (!sessionId) return;

  const formData = new FormData();

  formData.append("accion", "actividad");
  formData.append("sessionId", sessionId);

  try {

    await fetch("https://script.google.com/macros/s/AKfycbySeY5KRM7ulbYZ3oBPqqymB_hMUWpy6DmitiFBsGnEz2DoqPxngsY5ipsxihTI_40gpA/exec", {
      method: "POST",
      body: formData
    });

  } catch (error) {
    console.log("Error actualizando actividad");
  }

}, 60000);


// Detectar cierre de pestaña o navegador
window.addEventListener("beforeunload", () => {

  const sessionId = sessionStorage.getItem("sessionId");

  if (!sessionId) return;

  const formData = new FormData();

  formData.append("accion", "logout");
  formData.append("sessionId", sessionId);

  navigator.sendBeacon(
    "https://script.google.com/macros/s/AKfycbySeY5KRM7ulbYZ3oBPqqymB_hMUWpy6DmitiFBsGnEz2DoqPxngsY5ipsxihTI_40gpA/exec",
    formData
  );

});