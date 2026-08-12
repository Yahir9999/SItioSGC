const usuariosBloqueados = [
    "activacionestoluca@gmail.com",
    "activacionyreparacioncamarones@gmail.com",
    "activacionyreparacionchalco@gmail.com",
    "montacargastoluca@gmail.com",
    "activacionyreparaciontultepec@gmail.com",
    "activacionyreparacionvilla@gmail.com",
    "activacionyreparacionveracruz@gmail.com",
    "activacionyreparacionguadalajara@gmail.com",
    "activacionyreparacionirapuato@gmail.com",
    "montacargascamarones@gmail.com",
    "montacargaschalco@gmail.com",
    "montacargastultepec@gmail.com",
    "montacargasvilla@gmail.com",
    "montacargasveracruz@gmail.com",
    "montacargasguadalajara@gmail.com",
    "montacargas@gmail.com",
    "montacargasmerida@gmail.com",
    "activacionyreparacionmerida@gmail.com"
];

const usuarioActual = sessionStorage.getItem("correoUsuario");

if (usuariosBloqueados.includes(usuarioActual)) {

    document.querySelectorAll(".navbar-nav .nav-link").forEach(menu => {

        const texto = menu.textContent.trim();

        if (texto === "Documentación" || texto === "Nosotros") {
            menu.closest(".nav-item").style.display = "none";
        }

    });

}