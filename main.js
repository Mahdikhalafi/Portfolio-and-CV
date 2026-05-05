document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  body.classList.add('fade-in');

  // Page transition effect
  document.querySelectorAll('a[href]').forEach(link => {
    link.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      
      // Ensure it's not an anchor or external link
      if (!href.startsWith('#') && !href.startsWith('http')) {
        e.preventDefault();
        body.classList.remove('fade-in');
        body.classList.add('fade-out');

        setTimeout(() => {
          window.location.href = href;
        }, 500);
      }
    });
  });

  // Mobile-friendly navigation toggle
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('site-nav');

  if (navToggle && navMenu) {
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
  }

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

  const nextButton = document.getElementById('next');
  const prevButton = document.getElementById('prev');
  const carouselImage = document.getElementById('carousel-image');

  if (nextButton && prevButton && carouselImage) {
    nextButton.onclick = () => {
      currentIndex = (currentIndex + 1) % images.length;
      carouselImage.src = images[currentIndex];
    };

    prevButton.onclick = () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      carouselImage.src = images[currentIndex];
    };

    // Touch support for carousel
    let startX = 0;

    carouselImage.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
    });

    carouselImage.addEventListener('touchend', (e) => {
      const endX = e.changedTouches[0].clientX;
      if (startX > endX + 50) {
        nextButton.click();
      } else if (startX < endX - 50) {
        prevButton.click();
      }
    });
  }

  // Toggle dark/light mode
  const toggleButton = document.getElementById('theme-toggle');
  if (toggleButton) {
    toggleButton.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
    });
  }
});