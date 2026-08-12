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
    console.log("¿Está bloqueado?:", usuariosBloqueados.includes(usuarioActual));

    if (!usuariosBloqueados.includes(usuarioActual)) {
        return;
    }

    // Buscar Documentación por uno de sus enlaces internos
    const enlaceDocumentacion = document.querySelector(
        'a[href*="documentacion_i.html"]'
    );

    // Buscar Nosotros por uno de sus enlaces internos
    const enlaceNosotros = document.querySelector(
        'a[href*="CEDIS.html"]'
    );

    // Ocultar el <li> completo de Documentación
    if (enlaceDocumentacion) {
        const itemDocumentacion = enlaceDocumentacion.closest(".nav-item");

        if (itemDocumentacion) {
            itemDocumentacion.style.display = "none";
        }
    }

    // Ocultar el <li> completo de Nosotros
    if (enlaceNosotros) {
        const itemNosotros = enlaceNosotros.closest(".nav-item");

        if (itemNosotros) {
            itemNosotros.style.display = "none";
        }
    }

});