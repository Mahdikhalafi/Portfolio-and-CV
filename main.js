// Page transition effect
document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;

  // Initially fade in
  body.classList.add('fade-in');

  // Add fade-out class on link click
  document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent default link behavior
      const href = this.getAttribute('href');

      // Trigger fade out effect
      body.classList.remove('fade-in');
      body.classList.add('fade-out');

      // Redirect after the transition
      setTimeout(() => {
        window.location.href = href;
      }, 500); // Matches the CSS transition time
    });
  });
});

// Interactive navigation menu
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('site-nav');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
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

// Image carousel functionality
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

// Toggle dark/light mode
const toggleButton = document.getElementById('theme-toggle');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});