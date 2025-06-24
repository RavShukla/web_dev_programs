// js/script.js
document.addEventListener("DOMContentLoaded", () => {
  const heroText = document.querySelector('.tagline');
  const inputBox = document.querySelector('input');

  heroText.style.opacity = 0;
  inputBox.style.opacity = 0;

  setTimeout(() => {
    heroText.style.transition = 'opacity 1s ease';
    heroText.style.opacity = 1;
  }, 300);

  setTimeout(() => {
    inputBox.style.transition = 'opacity 1s ease';
    inputBox.style.opacity = 1;
  }, 600);
});
