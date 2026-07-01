/* 
   AuraCare Hospital & Research Centre - Main Script
   MANTRA 2026 Summer School Assignment
*/

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileMenu();
  initScrollAnimations();
});

/**
 * Make header sticky when scrolling down
 */
function initStickyHeader() {
  const header = document.querySelector('header');
  
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  };

  window.addEventListener('scroll', handleScroll);
  // Initial check in case page is loaded scrolled down
  handleScroll();
}

/**
 * Mobile Navigation Drawer Toggle
 */
function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  if (!hamburger || !navLinks) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Close mobile menu when clicking any nav link
  const links = navLinks.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });

  // Close mobile menu if clicked outside
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    }
  });
}

/**
 * Scroll Animations using IntersectionObserver
 */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.fade-up-element');
  
  if (animatedElements.length === 0) return;

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appear');
        // Stop observing once animated
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  animatedElements.forEach(element => {
    observer.observe(element);
  });
}
