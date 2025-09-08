document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("loginBtn");
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  const errorAlert = document.getElementById("errorAlert");
  const errorMessage = document.getElementById("errorMessage");

  let selectedPdf = "";
  let selectedFile = "";
  let selectedAction = "";

  const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQzdlogsRKtl8eL_BcbjtowWrqoIVU20l7LuQEeShvuCA1QRCOkuOFYJTBm4zvZU9oL3EBkQ412bbVp/pub?gid=0&single=true&output=csv";

  // Guardar la acción seleccionada
  document.querySelectorAll("[data-action]").forEach(item => {
    item.addEventListener("click", function() {
      selectedAction = this.getAttribute("data-action");
      selectedPdf = this.getAttribute("data-pdf") || "";
      selectedFile = this.getAttribute("data-file") || "";
    });
  });

  loginBtn.addEventListener("click", async function() {
    const usuario = username.value.trim();
    const contraseña = password.value.trim();

    try {
      const response = await fetch(SHEET_URL);
      const csvText = await response.text();

      const rows = csvText.trim().split("\n").map(r => r.split(","));
      rows.shift(); // quitar cabeceras

      const userRow = rows.find(row => row[0] === usuario && row[2] === contraseña);

      if (userRow) {
        const puesto = userRow[1];

        if (puesto === "Gerente") {
          const modalElement = document.getElementById("loginModal");
          const modalInstance = bootstrap.Modal.getInstance(modalElement) || new bootstrap.Modal(modalElement);
          modalInstance.hide();

          errorAlert.classList.add("d-none");

          if (selectedAction === "view" && selectedPdf) {
            // Mostrar PDF en iframe
            document.getElementById("pdfViewer").src = selectedPdf;
            const collapseEl = document.getElementById("collapseGerencia");
            new bootstrap.Collapse(collapseEl, { show: true });
          }

          if (selectedAction === "download" && selectedFile) {
            // Descargar archivo automáticamente
            const link = document.createElement("a");
            link.href = selectedFile;
            link.download = selectedFile.split("/").pop(); // nombre del archivo
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }

        } else {
          errorMessage.textContent = "Acceso restringido: solo Gerentes pueden entrar";
          errorAlert.classList.remove("d-none");
        }
      } else {
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
