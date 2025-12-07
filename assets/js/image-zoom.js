// ========================================
// IMAGE ZOOM MODAL
// Diesel Global Logistics Inc.
// ========================================

document.addEventListener('DOMContentLoaded', function() {
  // Crear modal para zoom
  const modal = document.createElement('div');
  modal.id = 'imageModal';
  modal.className = 'image-modal';
  
  modal.innerHTML = `
    <span class="image-modal-close">&times;</span>
    <img class="image-modal-content" id="modalImage">
    <div class="image-caption" id="caption"></div>
    <div class="zoom-controls" id="zoomControls">
      <button id="zoomIn" title="Acercar">🔍+</button>
      <button id="zoomOut" title="Alejar">🔍−</button>
      <button id="zoomReset" title="Tamaño original">↺</button>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  // Referencias
  const modalImg = document.getElementById('modalImage');
  const captionText = document.getElementById('caption');
  const closeBtn = document.querySelector('.image-modal-close');
  const zoomControls = document.getElementById('zoomControls');
  
  let currentScale = 1;
  
  // Agregar evento click a todas las imágenes dentro de <p align="center">
  document.querySelectorAll('p[align="center"] img').forEach(img => {
    img.classList.add('zoom-image');
    img.style.cursor = 'zoom-in';
    
    img.addEventListener('click', function() {
      modal.style.display = 'block';
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
      zoomControls.style.display = 'block';
      currentScale = 1;
      modalImg.style.transform = `scale(${currentScale})`;
    });
  });
  
  // Cerrar modal
  closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
    currentScale = 1;
  });
  
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.style.display = 'none';
      currentScale = 1;
    }
  });
  
  // Controles de zoom
  document.getElementById('zoomIn').addEventListener('click', function() {
    currentScale += 0.2;
    modalImg.style.transform = `scale(${currentScale})`;
  });
  
  document.getElementById('zoomOut').addEventListener('click', function() {
    if (currentScale > 0.4) {
      currentScale -= 0.2;
      modalImg.style.transform = `scale(${currentScale})`;
    }
  });
  
  document.getElementById('zoomReset').addEventListener('click', function() {
    currentScale = 1;
    modalImg.style.transform = `scale(${currentScale})`;
  });
  
  // Cerrar con ESC
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      modal.style.display = 'none';
      currentScale = 1;
    }
  });
});