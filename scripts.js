// scripts.js
document.addEventListener('DOMContentLoaded', () => {
  const playBtn = document.getElementById('play-mc');
  const tutorialBtn = document.getElementById('tutorial-mc');

  // keyboard activation
  [playBtn, tutorialBtn].forEach(btn => {
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        btn.click();
      }
    });
  });

  // small click feedback
  function flash(el) {
    el.style.opacity = '0.9';
    setTimeout(() => el.style.opacity = '', 140);
  }

  playBtn.addEventListener('click', (e) => {
    flash(playBtn);
    // navegação padrão via href
  });

  tutorialBtn.addEventListener('click', (e) => {
    flash(tutorialBtn);
    // navegação padrão via href
  });
});
// scripts.js
document.addEventListener('DOMContentLoaded', () => {
  const img = document.getElementById('tutorial-img');
  const overlay = document.getElementById('img-overlay');
  const closeBtn = document.getElementById('close-overlay');

  img.addEventListener('click', () => {
    overlay.classList.add('visible');
  });

  closeBtn.addEventListener('click', () => {
    overlay.classList.remove('visible');
  });

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.classList.remove('visible');
  });
});