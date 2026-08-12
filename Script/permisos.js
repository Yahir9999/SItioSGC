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

const usuarioActual = sessionStorage
    .getItem("correoUsuario")
    ?.trim()
    .toLowerCase();

if (usuariosBloqueados.includes(usuarioActual)) {

    document.querySelectorAll(".navbar-nav .nav-item").forEach(item => {

        const texto = item.querySelector(".nav-link")
            ?.textContent
            .trim()
            .toLowerCase();

        if (
            texto === "documentación" ||
            texto === "nosotros"
        ) {
            item.style.display = "none";
        }

    });

}