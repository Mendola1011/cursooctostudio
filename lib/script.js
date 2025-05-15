function toggleLightbox(button = null) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  if (!isMobile) return;

  if (lightbox.classList.contains('active')) {
    lightbox.classList.remove('active');
    lightboxImg.src = '';
  } else {
    if (button) {
      const img = button.parentElement.nextElementSibling.querySelector('img');
      lightboxImg.src = img.src;
    }
    lightbox.classList.add('active');
  }
}