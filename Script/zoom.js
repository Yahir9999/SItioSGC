document.querySelectorAll('.zoom-container').forEach(contenedor => {
  const imagen = contenedor.querySelector('.zoomable');
  const modal = contenedor.closest('.modal');
  const controls = modal.querySelector('.zoom-controls');
  const btnIn = controls.querySelector('.zoom-in');
  const btnOut = controls.querySelector('.zoom-out');
  const btnReset = controls.querySelector('.zoom-reset');

  let scale = 1;
  let posX = 0, posY = 0;
  let isDragging = false;
  let startX, startY;

  function applyTransform() {
    imagen.style.transform = `translate(${posX}px, ${posY}px) scale(${scale})`;
  }

  // Zoom con botones
  btnIn.addEventListener('click', () => {
    scale = Math.min(scale + 0.2, 5);
    applyTransform();
  });

  btnOut.addEventListener('click', () => {
    scale = Math.max(scale - 0.2, 1);
    applyTransform();
  });

  btnReset.addEventListener('click', () => {
    scale = 1;
    posX = 0;
    posY = 0;
    applyTransform();
  });

  // Arrastrar imagen
 // contenedor.addEventListener('mousedown', e => {
 //   isDragging = true;
  //  startX = e.clientX - posX;
  //  startY = e.clientY - posY;
   // contenedor.style.cursor = "grabbing";
 // });

  //document.addEventListener('mouseup', () => {
   // isDragging = false;
   // contenedor.style.cursor = "grab";
 // });

 // document.addEventListener('mousemove', e => {
   // if (!isDragging) return;
   // posX = e.clientX - startX;
  //  posY = e.clientY - startY;
  //  applyTransform();
  //});

  // Reset automático al abrir el modal
  modal.addEventListener('shown.bs.modal', () => {
    scale = 1;
    posX = 0;
    posY = 0;
    applyTransform();
  });
});