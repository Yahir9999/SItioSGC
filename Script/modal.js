        document.addEventListener('DOMContentLoaded', function() {
            // Obtener referencia al modal
            const modalElement = document.getElementById('exampleModal');
            const modal = new bootstrap.Modal(modalElement);
            
            // Configurar event listeners para los botones
            document.querySelectorAll('.open-modal').forEach(button => {
                button.addEventListener('click', () => {
                    // Obtener datos del botón
                    const titulo = button.getAttribute('data-title');
                    const direccion = button.getAttribute('data-direction');
                    const iframe = button.getAttribute('data-iframe');
                    const directorio = button.getAttribute('data-directorio');

                    // Obtener elementos del modal
                    const titulo_cedi = document.getElementById('tituloModal');
                    const direccion_cedi = document.getElementById('direccionModal');
                    const iframe_cedi = document.getElementById('modaliFrame');
                    const directorios_cedis = document.getElementById('directorioModal');

                    // Asignar valores
                    titulo_cedi.textContent = titulo;
                    direccion_cedi.textContent = direccion;
                    iframe_cedi.src = iframe;
                    directorios_cedis.href = directorio;

                    // Mostrar modal
                    modal.show();
                });
            });

            // Limpiar el iframe cuando el modal se cierre
            modalElement.addEventListener('hidden.bs.modal', function () {
                document.getElementById('modaliFrame').src = '';
            });
        });
