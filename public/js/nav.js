
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const navLinkItems = document.querySelectorAll('.nav-links li a');

  // Helper function to toggle navigation menu state
  function toggleNav() {
    const isActive = navLinks.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', isActive); // Update aria-expanded
    document.body.classList.toggle('no-scroll', isActive); // Lock/unlock body scroll
  }

  // Toggle menu on hamburger click
  hamburger.addEventListener('click', toggleNav);

  // Close menu on link click (for mobile)
  navLinkItems.forEach(link => {
    link.addEventListener('click', function () {
      if (navLinks.classList.contains('active')) {
        toggleNav(); // Use the toggle function to maintain consistency
      }
    });
  });

  // Close menu on outside click
  document.addEventListener('click', function (event) {
    if (
      !navLinks.contains(event.target) && // Click is outside the navigation
      !hamburger.contains(event.target) && // Click is outside the hamburger
      navLinks.classList.contains('active') // Navigation menu is open
    ) {
      toggleNav(); // Close the menu
    }
  });

  // Close menu on ESC keypress
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && navLinks.classList.contains('active')) {
      toggleNav();
    }
  });
});
