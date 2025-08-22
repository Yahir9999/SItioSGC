document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("loginBtn");
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  const errorAlert = document.getElementById("errorAlert");
  const errorMessage = document.getElementById("errorMessage");

  let selectedPdf = "";

  // URL del CSV publicado desde Google Sheets
  const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQzdlogsRKtl8eL_BcbjtowWrqoIVU20l7LuQEeShvuCA1QRCOkuOFYJTBm4zvZU9oL3EBkQ412bbVp/pub?gid=0&single=true&output=csv";

  // Cuando hagan clic en un doc restringido guardamos su ruta
  document.querySelectorAll("[data-pdf]").forEach(item => {
    item.addEventListener("click", function() {
      selectedPdf = this.getAttribute("data-pdf");
    });
  });

  loginBtn.addEventListener("click", async function() {
    const usuario = username.value.trim();
    const contraseña = password.value.trim();

    try {
      // Leer el CSV
      const response = await fetch(SHEET_URL);
      const csvText = await response.text();

      // Procesar filas
      const rows = csvText.trim().split("\n").map(r => r.split(","));
      const headers = rows.shift(); // ["correo","puesto","password"]

      // Buscar usuario con sus columnas
      const userRow = rows.find(row => row[0] === usuario && row[2] === contraseña);

      if (userRow) {
        const puesto = userRow[1]; // Columna "puesto"

        if (puesto === "Gerente") {
          // ✅ Usuario correcto y con puesto Gerente
          const modalElement = document.getElementById("loginModal");
          const modalInstance = bootstrap.Modal.getInstance(modalElement) || new bootstrap.Modal(modalElement);
          modalInstance.hide();

          if (selectedPdf) {
            document.getElementById("pdfViewer").src = selectedPdf;
          }

          const collapseEl = document.getElementById("collapseGerencia");
          new bootstrap.Collapse(collapseEl, { show: true });

          errorAlert.classList.add("d-none");
        } else {
          // Usuario existe, pero no es gerente
          errorMessage.textContent = "Acceso restringido: solo Gerentes pueden entrar";
          errorAlert.classList.remove("d-none");
        }
      } else {
        // Usuario o contraseña incorrectos
        errorMessage.textContent = "Usuario o contraseña incorrectos";
        errorAlert.classList.remove("d-none");
      }
    } catch (err) {
      console.error("Error al leer Google Sheets:", err);
      errorMessage.textContent = "No se pudo conectar con la hoja de usuarios";
      errorAlert.classList.remove("d-none");
    }
  });
});
