
    (function() {
      const hamburger = document.getElementById('hamburgerBtn');
      const navMenu = document.getElementById('navMenu');
      if (hamburger && navMenu) {
        hamburger.addEventListener('click', function(e) {
          e.stopPropagation();
          navMenu.classList.toggle('active');
          const icon = hamburger.querySelector('i');
          if (icon) {
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
          }
        });
        document.querySelectorAll('#navMenu a').forEach(link => {
          link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const icon = hamburger.querySelector('i');
            if (icon) { icon.classList.add('fa-bars'); icon.classList.remove('fa-times'); }
          });
        });
        document.addEventListener('click', (e) => {
          if (!navMenu.contains(e.target) && !hamburger.contains(e.target) && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            const icon = hamburger.querySelector('i');
            if (icon) { icon.classList.add('fa-bars'); icon.classList.remove('fa-times'); }
          }
        });
      }
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          const href = this.getAttribute('href');
          if (href === '#') return;
          const target = document.querySelector(href);
          if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
        });
      });
    })();

    let heroImage = document.querySelector('.hero-image img');
    if (heroImage) {
      heroImage.addEventListener('load', function() {
        setInterval(() => {
          heroImage.src = "images/attendant.png";
        }, 300);
      });
    }