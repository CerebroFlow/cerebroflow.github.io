const sr = ScrollReveal();

// Set initial state of hero image
const heroImage = document.querySelector('.hero');
heroImage.style.transform = 'scale(1) translateY(0)';

// Define the scroll-to-reveal animation for the hero image
const heroImageReveal = {
  duration: 1000,
  easing: 'ease-in-out',
  scale: 0.5,
  translateY: '50%'
};

// Apply the scroll-to-reveal animation to the hero image
sr.reveal('.hero', heroImageReveal);

// Add scroll event listener to update the hero image transformation
window.addEventListener('scroll', () => {
  const scrollPosition = window.pageYOffset;
  const heroHeight = heroImage.offsetHeight;
  const scale = 1 - (scrollPosition / heroHeight) * 0.5;
  const translateY = (scrollPosition / heroHeight) * 50;
  heroImage.style.transform = `scale(${scale}) translateY(${translateY}%)`;
});

// Apply the scroll-to-reveal animation to the content sections
sr.reveal('.section', {
  duration: 1000,
  easing: 'ease-in-out',
  origin: 'bottom',
  distance: '50px',
  interval: 200
});
