  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.getElementById('lightbox-close');

  // Ao clicar no botão "Mostrar Imagem", ativa o lightbox
  document.querySelectorAll('.show-image-btn').forEach(button => {
    button.addEventListener('click', () => {
      const imgSrc = button.getAttribute('data-img');
      lightboxImg.src = imgSrc;
      lightbox.style.display = 'flex';
    });
  });

  // Fecha o lightbox ao clicar no botão de fechar
  closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
    lightboxImg.src = '';
  });

  // Fecha o lightbox ao clicar fora da imagem
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
      lightboxImg.src = '';
    }
  });

