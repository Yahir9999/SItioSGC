document.querySelectorAll('.open-offcanvas').forEach(button => {
  button.addEventListener('click', () => {
    const title = button.getAttribute('data-title');
    const imgSrc = button.getAttribute('data-img');
    const size = button.getAttribute('data-size');
    const download = button.getAttribute('data-download');

    const offcanvasElement = document.getElementById('dynamicOffcanvas');
    const downloaBtn = document.getElementById("offcanvasDownload");

    // Limpiar tamaños previos
    offcanvasElement.classList.remove('offcanvas-wide', 'offcanvas-xlarge', 'offcanvas-large');


    // Agregar clase según size
    if (size === 'wide') {
      offcanvasElement.classList.add('offcanvas-wide');
    } else if (size === 'xlarge') {
      offcanvasElement.classList.add('offcanvas-xlarge');
    } else if (size === 'large') {
      offcanvasElement.classList.add('offcanvas-large')
    }

    // Actualizar contenido
    document.getElementById('dynamicOffcanvasLabel').textContent = title;
    document.getElementById('offcanvasImage').src = imgSrc;

    //Mostrar y/o ocultar el boton si tenemos link valido (Imagen)
    if (download && download !== '#'){
      downloaBtn.href = download;
      downloaBtn.style.display = 'inline-block';
    } else {
      downloaBtn.style.display = 'none';
    }

    // Mostrar offcanvas
    const offcanvas = new bootstrap.Offcanvas(offcanvasElement);
    offcanvas.show();
  });
});
