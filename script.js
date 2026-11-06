/* ===== Mobile Navigation ===== */
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/* Close menu when a nav link is clicked */
document.querySelectorAll('.nav__link').forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
});

/* ===== Header scroll effect ===== */
const header = document.getElementById('header');

function handleScroll() {
  if (window.scrollY >= 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', handleScroll);

/* ===== Active link on scroll ===== */
const sections = document.querySelectorAll('section[id]');

function highlightActiveLink() {
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute('id');
    const navLink = document.querySelector(`.nav__link[href="#${sectionId}"]`);

    if (navLink) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLink.classList.add('active-link');
      } else {
        navLink.classList.remove('active-link');
      }
    }
  });
}

window.addEventListener('scroll', highlightActiveLink);

/* ===== Footer year ===== */
document.getElementById('year').textContent = new Date().getFullYear();
