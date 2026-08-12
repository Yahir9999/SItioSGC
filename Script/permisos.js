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

document.addEventListener("DOMContentLoaded", function () {

    const usuarioActual = (sessionStorage.getItem("correoUsuario") || "")
        .trim()
        .toLowerCase();

    console.log("Usuario actual:", usuarioActual);
    console.log(
        "¿Está bloqueado?:",
        usuariosBloqueados.includes(usuarioActual)
    );

    // Si no está bloqueado, no hacemos nada
    if (!usuariosBloqueados.includes(usuarioActual)) {
        return;
    }

    // Buscar todos los elementos principales del menú
    document.querySelectorAll(".navbar-nav > .nav-item").forEach(item => {

        const enlace = item.querySelector(":scope > .nav-link");

        if (!enlace) {
            return;
        }

        const texto = enlace.textContent
            .trim()
            .toLowerCase();

        // Ocultar Documentación y Nosotros
        if (
            texto === "documentación" ||
            texto === "nosotros"
        ) {
            item.style.setProperty("display", "none", "important");
        }

    });

});