// JavaScript code

// Function to animate the hero section on page load
function animateHero() {
    var heroImage = document.querySelector(".hero img");
    var heroText = document.querySelector(".hero .hero-text");
  
    heroImage.style.opacity = 0;
    heroText.style.opacity = 0;
    
    setTimeout(function() {
      heroImage.style.transition = "opacity 1s";
      heroText.style.transition = "opacity 1s";
      heroImage.style.opacity = 1;
      heroText.style.opacity = 1;
    }, 500);
  }
  
  // Function to animate the app features section on scroll
  function animateFeatures() {
    var featuresSection = document.querySelector(".app-features");
    var featureItems = document.querySelectorAll(".app-features li");
  
    var featuresSectionOffset = featuresSection.offsetTop;
    var windowHeight = window.innerHeight;
  
    if (window.pageYOffset > featuresSectionOffset - windowHeight) {
      featureItems.forEach(function(item, index) {
        setTimeout(function() {
          item.style.transform = "translateY(0)";
          item.style.opacity = 1;
        }, index * 200);
      });
    }
  }
  
  // Function to animate the app demos section on scroll
  function animateDemos() {
    var demosSection = document.querySelector(".app-demos");
    var demoItems = document.querySelectorAll(".demo-item");
  
    var demosSectionOffset = demosSection.offsetTop;
    var windowHeight = window.innerHeight;
  
    if (window.pageYOffset > demosSectionOffset - windowHeight) {
      demoItems.forEach(function(item, index) {
        setTimeout(function() {
          item.style.transform = "scale(1)";
          item.style.opacity = 1;
        }, index * 200);
      });
    }
  }
  
  // Event listener for the page load event
  window.addEventListener("load", animateHero);
  
  // Event listener for the scroll event
  window.addEventListener("scroll", function() {
    animateFeatures();
    animateDemos();
  });
  