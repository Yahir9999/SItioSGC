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

  // --- Arrastre con mouse ---
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

  document.addEventListener('mouseup', () => {
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

    posX -= offsetX * (newScale / scale - 1);
    posY -= offsetY * (newScale / scale - 1);

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

    posX -= offsetX * (scale - 1);
    posY -= offsetY * (scale - 1);

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

  container.addEventListener('touchend', () => {
    touchDragging = false;
  });

  // --- Reset al abrir modal ---
  if (modal) {
    modal.addEventListener('shown.bs.modal', () => {
      scale = 1; posX = 0; posY = 0;
      applyTransform();
    });
  }

  // --- Botones de control ---
  const controls = container.parentElement.querySelector('.zoom-controls');
const btnIn = controls.querySelector('.zoom-in');
const btnOut = controls.querySelector('.zoom-out');
const btnReset = controls.querySelector('.zoom-reset');

  if (btnIn) {
    btnIn.addEventListener('click', () => {
      const newScale = Math.min(scale * 1.2, 10);
      posX -= (image.clientWidth / 2) * (newScale / scale - 1);
      posY -= (image.clientHeight / 2) * (newScale / scale - 1);
      scale = newScale;
      applyTransform();
    });
  }

  if (btnOut) {
    btnOut.addEventListener('click', () => {
      const newScale = Math.max(scale / 1.2, 1);
      posX -= (image.clientWidth / 2) * (newScale / scale - 1);
      posY -= (image.clientHeight / 2) * (newScale / scale - 1);
      scale = newScale;
      applyTransform();
    });
  }

  if (btnReset) {
    btnReset.addEventListener('click', () => {
      scale = 1;
      posX = 0;
      posY = 0;
      applyTransform();
    });
  }
});


