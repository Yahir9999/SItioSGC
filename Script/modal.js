document.querySelectorAll('.open-modal').forEach(button =>{
    button.addEventListener('click', () =>{
        // Seccion que recibe como variable los datos que se envia al dar click a ese boton

        const titulo = button.getAttribute('data-title');
        const direccion= button.getAttribute('data-direction');
        const iframe = button.getAttribute('data-iframe');
        const directorio = button.getAttribute('data-directorio');

        // Seccion que lee los id donde vamos a incluir los valores que recibimos arriba

        const titulo_cedi = document.getElementById('tituloModal');
        const direccion_cedi = document.getElementById('direccionModal');
        const iframe_cedi = document.getElementById('modaliFrame');
        const directorios_cedis = document.getElementById('directorioModal');

        //Mandamos esos valores como sustitutos (asignacion de valores dinamicos) 

        titulo_cedi.textContent = titulo;
        direccion_cedi.textContent = direccion;
        iframe_cedi.src = iframe;
        directorios_cedis.href = directorio;

        //Mostrar modal
        const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
        modal.show();

        // Borramos el modal para que se vuelva a cargar 
        document.getElementById('exampleModal').addEventListener('hidden.bs.modal', function () {
        document.getElementById('modaliFrame').src = '';
        });

    });
});