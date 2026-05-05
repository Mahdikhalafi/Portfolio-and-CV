// Page transition effect
document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  body.classList.add('fade-in');

  document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const href = this.getAttribute('href');

      body.classList.remove('fade-in');
      body.classList.add('fade-out');

      setTimeout(() => {
        window.location.href = href;
      }, 500);
    });
  });
});

// Mobile-friendly navigation toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('site-nav');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  navToggle.classList.toggle('open');
});

// Close menu on link click for mobile
navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    navToggle.classList.remove('open');
  });
});

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Image carousel functionality with touch support
const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
let currentIndex = 0;

document.getElementById('next').onclick = () => {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById('carousel-image').src = images[currentIndex];
};
document.getElementById('prev').onclick = () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById('carousel-image').src = images[currentIndex];
};

// Touch support for carousel
const carousel = document.getElementById('carousel-image');
let startX = 0;

carousel.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

carousel.addEventListener('touchend', (e) => {
  const endX = e.changedTouches[0].clientX;
  if (startX > endX + 50) {
    document.getElementById('next').click();
  } else if (startX < endX - 50) {
    document.getElementById('prev').click();
  }
});

// Toggle dark/light mode
const toggleButton = document.getElementById('theme-toggle');
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});