
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

    // HERO SLIDER SYSTEM (CLEAN + PREMIUM)

const hero = document.getElementById("hero");
const heroBg = document.querySelector(".hero-bg");
const title = document.getElementById("hero-title");
const text = document.getElementById("hero-text");
const buttons = document.getElementById("hero-buttons");

// SLIDES DATA
const slides = [
{
image: "images/flight-attendant.png",
title: "Your Journey, Our Expertise",
text: "Experience seamless travel with Luminaries Group. From booking to arrival, we handle everything.",
animateButtons: true
},
{
image: "images/attendant.png",
title: "Luxury Travel, Simplified",
text: "Enjoy premium services with comfort, speed, and professionalism at every step.",
animateButtons: false
},
{
image: "images/jumbo-jet-flying-sky.jpg",
title: "Global Travel Made Easy",
text: "We connect you to the world with reliable and efficient flight logistics.",
animateButtons: false
}
];

let current = 0;

// 🔥 PRELOAD IMAGES (NO FLICKER)
function preloadImages(){
  slides.forEach(slide => {
    const img = new Image();
    img.src = slide.image;
  });
}

// 🔥 MAIN ANIMATION
function animateHero(){

  // Fade out
  hero.classList.add("fade");

  setTimeout(() => {

    // Change background
    heroBg.style.backgroundImage = `url(${slides[current].image})`;

    // Reset animation classes
    hero.classList.remove("zoom");
    title.classList.remove("fade-in");
    text.classList.remove("slide-in");
    buttons.classList.remove("up-in");

    void hero.offsetWidth;

    // Apply zoom
    hero.classList.add("zoom");

    // Update text
    title.innerHTML = slides[current].title;
    text.textContent = slides[current].text;

    // Animate
    title.classList.add("fade-in");
    text.classList.add("slide-in");

    if(slides[current].animateButtons){
      buttons.classList.add("up-in");
    }

    // Fade back in
    hero.classList.remove("fade");

    // Next slide
    current = (current + 1) % slides.length;

  }, 500); // fade timing

}

// INIT
preloadImages();
animateHero();
setInterval(animateHero, 6500);