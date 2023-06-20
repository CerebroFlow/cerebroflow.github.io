const sr = ScrollReveal();

sr.reveal('header', {
  duration: 1000,
  easing: 'ease-in-out',
  origin: 'top',
  distance: '50px'
});

sr.reveal('.hero-content', {
  duration: 1000,
  easing: 'ease-in-out',
  origin: 'bottom',
  distance: '50px',
  delay: 500
});

sr.reveal('.section', {
  duration: 1000,
  easing: 'ease-in-out',
  origin: 'bottom',
  distance: '50px',
  interval: 200
});

window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  const heroContent = document.querySelector('.hero-content');
  const sections = document.querySelectorAll('.section');

  if (window.scrollY > heroContent.offsetTop + heroContent.offsetHeight) {
    header.classList.add('show');
  } else {
    header.classList.remove('show');
  }

  sections.forEach((section) => {
    if (window.scrollY > section.offsetTop + section.offsetHeight / 2 - window.innerHeight / 2) {
      section.classList.add('reveal');
    }
  });
});
