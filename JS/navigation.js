// Hamburger Menu Toggle Function
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  const menuToggle = document.querySelector('.menu-toggle');
  navLinks.classList.toggle('active');
  menuToggle.classList.toggle('active');
}

// Close menu when clicking on a link
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      const navLinks = document.querySelector('.nav-links');
      const menuToggle = document.querySelector('.menu-toggle');
      navLinks.classList.remove('active');
      menuToggle.classList.remove('active');
    });
  });
});
