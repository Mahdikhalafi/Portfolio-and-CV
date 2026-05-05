document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  body.classList.add('fade-in');

  // Handle link clicks for transitions
  document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function (e) {
      const href = this.getAttribute('href');

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

  // Dropdown menu functionality
  document.querySelectorAll('.site-header nav ul li').forEach(menuItem => {
    menuItem.addEventListener('mouseenter', () => {
      const dropdown = menuItem.querySelector('.dropdown');
      if (dropdown) {
        dropdown.style.display = 'block';
      }
    });

    menuItem.addEventListener('mouseleave', () => {
      const dropdown = menuItem.querySelector('.dropdown');
      if (dropdown) {
        dropdown.style.display = 'none';
      }
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

  // Image carousel functionality
  const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
  let currentIndex = 0;
  const carouselImage = document.getElementById('carousel-image');

  if (carouselImage) {
    document.getElementById('next').onclick = () => {
      currentIndex = (currentIndex + 1) % images.length;
      carouselImage.src = images[currentIndex];
    };

    document.getElementById('prev').onclick = () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      carouselImage.src = images[currentIndex];
    };
  }

  // Toggle dark/light mode
  const toggleButton = document.getElementById('theme-toggle');
  if (toggleButton) {
    toggleButton.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
    });
  }
});
