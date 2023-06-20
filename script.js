const sr = ScrollReveal();

sr.reveal('.hero-content', {
  duration: 1000,
  easing: 'ease-in-out',
  origin: 'bottom',
  distance: '50px'
});

sr.reveal('.section', {
  duration: 1000,
  easing: 'ease-in-out',
  origin: 'bottom',
  distance: '50px',
  interval: 200
});
