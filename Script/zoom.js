document.querySelectorAll('.zoom-container').forEach(container => {
  const image = container.querySelector('.zoomable');
  const modal = container.closest('.modal');

  let scale = 1;
  let posX = 0, posY = 0;

  let isDragging = false;
  let startX = 0, startY = 0;

  image.style.transformOrigin = "0 0"; // zoom relativo a esquina superior izquierda
  image.style.cursor = "grab";

  function applyTransform() {
    image.style.transform = `translate(${posX}px, ${posY}px) scale(${scale})`;
  }

  // --- Arrastre ---
  container.addEventListener('mousedown', e => {
    if (scale <= 1) return;
    isDragging = true;
    startX = e.clientX - posX;
    startY = e.clientY - posY;
    image.style.cursor = "grabbing";
    e.preventDefault();
  });

  document.addEventListener('mousemove', e => {
    if (!isDragging) return;
    posX = e.clientX - startX;
    posY = e.clientY - startY;
    applyTransform();
  });

  document.addEventListener('mouseup', e => {
    if (!isDragging) return;
    isDragging = false;
    image.style.cursor = "grab";
  });

  // --- Zoom con rueda del mouse ---
  container.addEventListener('wheel', e => {
    e.preventDefault();
    const rect = image.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    const zoomFactor = e.deltaY < 0 ? 1.1 : 0.9;
    const newScale = Math.min(Math.max(scale * zoomFactor, 1), 10);

    // Ajusta la posición para zoom centrado en cursor
    posX -= (offsetX) * (newScale / scale - 1);
    posY -= (offsetY) * (newScale / scale - 1);

    scale = newScale;
    applyTransform();
  }, { passive: false });

  // --- Doble click zoom estilo Windows ---
  container.addEventListener('dblclick', e => {
    const rect = image.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    if (scale <= 1) {
      scale = 2; // zoom al doble
    } else {
      scale = 1; // reset
      posX = 0; posY = 0;
    }

    // Centrar zoom en cursor
    posX -= (offsetX) * (scale - 1);
    posY -= (offsetY) * (scale - 1);

    applyTransform();
  });

  // --- Touch pinch & drag ---
  let initialDistance = 0;
  let initialScale = 1;
  let touchStartX = 0;
  let touchStartY = 0;
  let touchDragging = false;

  container.addEventListener('touchstart', e => {
    if (e.touches.length === 2) {
      initialDistance = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      initialScale = scale;
    } else if (e.touches.length === 1 && scale > 1) {
      touchDragging = true;
      touchStartX = e.touches[0].clientX - posX;
      touchStartY = e.touches[0].clientY - posY;
    }
  });

  container.addEventListener('touchmove', e => {
    if (e.touches.length === 2) {
      e.preventDefault();
      const newDistance = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      const newScale = Math.min(Math.max(initialScale * (newDistance / initialDistance), 1), 10);

      // Zoom centrado en el punto medio de los dedos
      const centerX = (e.touches[0].clientX + e.touches[1].clientX) / 2;
      const centerY = (e.touches[0].clientY + e.touches[1].clientY) / 2;
      const rect = image.getBoundingClientRect();
      posX -= (centerX - rect.left) * (newScale / scale - 1);
      posY -= (centerY - rect.top) * (newScale / scale - 1);

      scale = newScale;
      applyTransform();
    } else if (e.touches.length === 1 && touchDragging) {
      e.preventDefault();
      posX = e.touches[0].clientX - touchStartX;
      posY = e.touches[0].clientY - touchStartY;
      applyTransform();
    }
  }, { passive: false });

  container.addEventListener('touchend', e => {
    touchDragging = false;
  });

  // --- Reset al abrir modal ---
  modal.addEventListener('shown.bs.modal', () => {
    scale = 1; posX = 0; posY = 0;
    applyTransform();
  });
});

