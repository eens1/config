
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const mainContent = document.querySelector('.main-content');

  hamburger.addEventListener('click', () => {
    const isActive = navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');

    // Adjust the main content margin dynamically
    if (isActive) {
      mainContent.style.marginTop = `${navMenu.offsetHeight}px`;
    } else {
      mainContent.style.marginTop = '0';
    }
  });
});
