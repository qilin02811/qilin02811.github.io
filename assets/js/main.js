---
layout: none
---
// Scroll-reveal animation
// ponytail: vanilla JS, no library needed
(function() {
  'use strict';

  function initReveal() {
    var reveals = document.querySelectorAll('.reveal, .archive__item');
    if (!reveals.length) return;

    var observer = new IntersectionObserver(
      function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    );

    reveals.forEach(function(el) {
      observer.observe(el);
    });
  }

  // Dark mode toggle (reads system preference, allows manual override)
  function initTheme() {
    var themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;

    function setTheme(theme) {
      if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
      }
    }

    // Check saved preference
    var saved = localStorage.getItem('theme');
    if (saved) {
      setTheme(saved);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }

    themeToggle.addEventListener('click', function() {
      var current = document.documentElement.getAttribute('data-theme');
      setTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      initReveal();
      initTheme();
    });
  } else {
    initReveal();
    initTheme();
  }
})();
