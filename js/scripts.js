document.addEventListener('DOMContentLoaded', () => {
  const yearSpan = document.querySelector('#year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  const ham = document.querySelector('.ham');
  const nav = document.querySelector('nav');

  if (ham && nav) {
    ham.addEventListener('click', () => {
      ham.classList.toggle('open');
      nav.classList.toggle('open');
    });
  }
});
