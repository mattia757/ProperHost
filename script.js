// Properhost — script condiviso
(function () {
  // Reduced motion guard
  var prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Preloader
  var preloader = document.getElementById('preloader');
  var preloaderBar = document.getElementById('preloaderBar');
  if (preloader) {
    var loaded = false;
    var progress = 0;
    var interval = setInterval(function() {
      progress += Math.random() * 15;
      if (progress > 90) progress = 90;
      if (preloaderBar) preloaderBar.style.width = progress + '%';
    }, 150);
    
    function hidePreloader() {
      if (loaded) return;
      loaded = true;
      clearInterval(interval);
      if (preloaderBar) preloaderBar.style.width = '100%';
      setTimeout(function() {
        preloader.classList.add('hidden');
        if (document.body) document.body.style.overflow = '';
      }, 400);
    }
    
    // Hide on load
    if (document.readyState === 'complete') {
      hidePreloader();
    } else {
      window.addEventListener('load', hidePreloader);
      setTimeout(hidePreloader, 3000);
    }
    
    // Prevent scroll while loading
    if (document.body) document.body.style.overflow = 'hidden';
  }
  
  // Custom cursor (desktop only, no reduced motion)
  var cursor = document.getElementById('customCursor');
  var cursorText = document.getElementById('customCursorText');
  if (cursor && !prefersReducedMotion && window.matchMedia('(hover: hover)').matches) {
    var cursorLinks = document.querySelectorAll('a, button, .villa-slide, .service, input, textarea, select');
    
    document.addEventListener('mousemove', function(e) {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      if (cursorText) {
        cursorText.style.left = e.clientX + 'px';
        cursorText.style.top = e.clientY + 'px';
      }
    });
    
    cursorLinks.forEach(function(el) {
      el.addEventListener('mouseenter', function() {
        cursor.classList.add('hover');
        var label = el.getAttribute('aria-label') || el.textContent;
        if (cursorText && label) {
          cursorText.textContent = label.substring(0, 20);
          cursorText.classList.add('visible');
        }
      });
      el.addEventListener('mouseleave', function() {
        cursor.classList.remove('hover');
        if (cursorText) cursorText.classList.remove('visible');
      });
    });
    
    // Hide on mouse leave window
    document.addEventListener('mouseleave', function() {
      cursor.classList.add('hidden');
    });
    document.addEventListener('mouseenter', function() {
      cursor.classList.remove('hidden');
    });
  }
  
  // Back to top button
  var backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 400) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }, { passive: true });
  }
  
  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('mainNav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { nav.classList.remove('open'); });
    });
  }
  
  // Quick book modal — opens from .nav-book (index.html) and .nav-cta (other pages)
  var quickBookModal = document.getElementById('quickBookModal');
  if (quickBookModal) {
    function openQuickBook() {
      quickBookModal.hidden = false;
      requestAnimationFrame(function () {
        quickBookModal.classList.add('open');
      });
      document.body.style.overflow = 'hidden';
    }
    function closeQuickBook() {
      quickBookModal.classList.remove('open');
      document.body.style.overflow = '';
      setTimeout(function () { quickBookModal.hidden = true; }, 320);
    }

    var bookTriggers = document.querySelectorAll('.nav-book, .nav-cta, [data-quick-book]');
    bookTriggers.forEach(function (trigger) {
      trigger.addEventListener('click', function (e) {
        e.preventDefault();
        openQuickBook();
      });
    });

    quickBookModal.querySelectorAll('[data-close]').forEach(function (el) {
      el.addEventListener('click', closeQuickBook);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && quickBookModal.classList.contains('open')) {
        closeQuickBook();
      }
    });
  }

  // Topbar scrolled state
  var topbar = document.querySelector('.topbar');
  if (topbar) {
    var onScroll = function () {
      if (window.scrollY > 60) topbar.classList.add('scrolled');
      else topbar.classList.remove('scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Reveal on scroll with stagger
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          // Add staggered animation class
          setTimeout(function() {
            e.target.classList.add('in');
          }, 80);
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    revealEls.forEach(function (el, index) {
      el.style.transitionDelay = (index * 0.1) + 's';
      io.observe(el);
    });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  // Parallax effect for hero
  var heroSection = document.querySelector('.hero');
  if (heroSection && !prefersReducedMotion) {
    window.addEventListener('scroll', function() {
      var scrolled = window.scrollY;
      if (scrolled < window.innerHeight) {
        var heroBg = heroSection.querySelector('.hero-video-overlay');
        if (heroBg) {
          heroBg.style.transform = 'translateY(' + (scrolled * 0.3) + 'px)';
        }
      }
    }, { passive: true });
  }

  // Smooth reveal for service cards stagger
  var serviceCards = document.querySelectorAll('.service-grid .service, .service-grid .service-card');
  if ('IntersectionObserver' in window && serviceCards.length) {
    var serviceIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (e, i) {
        if (e.isIntersecting) {
          setTimeout(function() {
            e.target.classList.add('in');
          }, i * 100);
          serviceIO.unobserve(e.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -30px 0px' });
    serviceCards.forEach(function(card) {
      card.style.opacity = '0';
      card.style.transform = 'translateY(30px)';
      card.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
      serviceIO.observe(card);
    });
  }

  // Add reveal-in class for JS-triggered reveals
  setTimeout(function() {
    document.querySelectorAll('.reveal').forEach(function(el) {
      el.classList.add('reveal-in');
    });
  }, 100);

  // Villa slider
  var slider = document.querySelector('.villa-slider');
  if (slider) {
    var slides = slider.querySelectorAll('.villa-slide');
    var titleEl = slider.querySelector('.villa-slider-title');
    var btnPrev = slider.querySelector('.villa-nav-prev');
    var btnNext = slider.querySelector('.villa-nav-next');
    var current = 0;
    var autoplayDelay = 6500;
    var autoplayTimer = null;
    var isAnimating = false;
    var touchStartX = 0;
    var touchEndX = 0;

    // Dots indicator
    var dotsContainer = document.createElement('div');
    dotsContainer.className = 'villa-slider-dots';
    dotsContainer.style.cssText = 'position:absolute;bottom:24px;left:50%;transform:translateX(-50%);display:flex;gap:10px;z-index:10';
    slides.forEach(function(slide, i) {
      var dot = document.createElement('span');
      dot.style.cssText = 'width:8px;height:8px;border-radius:50%;background:rgba(255,255,255,.4);cursor:pointer;transition:all .3s';
      dot.addEventListener('click', function() { goTo(i); startAutoplay(); });
      dotsContainer.appendChild(dot);
    });
    slider.appendChild(dotsContainer);
    var dots = dotsContainer.querySelectorAll('span');
    function updateDots() {
      dots.forEach(function(dot, i) {
        dot.style.background = i === current ? 'rgba(255,255,255,.9)' : 'rgba(255,255,255,.4)';
        dot.style.transform = i === current ? 'scale(1.3)' : 'scale(1)';
      });
    }

    function goTo(index) {
      if (isAnimating) return;
      var total = slides.length;
      var next = (index + total) % total;
      if (next === current) return;
      isAnimating = true;

      // fade out title
      if (titleEl) titleEl.classList.add('is-changing');

      setTimeout(function () {
        slides[current].classList.remove('is-active');
        slides[next].classList.add('is-active');
        if (titleEl) {
          titleEl.textContent = slides[next].getAttribute('data-villa') || '';
          titleEl.classList.remove('is-changing');
        }
        current = next;
        updateDots();
        setTimeout(function () { isAnimating = false; }, 700);
      }, 350);
    }

    function next() { goTo(current + 1); }
    function prev() { goTo(current - 1); }

    function startAutoplay() {
      stopAutoplay();
      autoplayTimer = setInterval(next, autoplayDelay);
    }
    function stopAutoplay() {
      if (autoplayTimer) { clearInterval(autoplayTimer); autoplayTimer = null; }
    }

    if (btnPrev) btnPrev.addEventListener('click', function () { prev(); startAutoplay(); });
    if (btnNext) btnNext.addEventListener('click', function () { next(); startAutoplay(); });

    // Pause on hover/touch
    slider.addEventListener('mouseenter', stopAutoplay);
    slider.addEventListener('mouseleave', startAutoplay);
    slider.addEventListener('touchstart', function(e) { touchStartX = e.changedTouches[0].screenX; stopAutoplay(); }, { passive: true });
    slider.addEventListener('touchend', function(e) {
      touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 50) next();
      if (touchStartX - touchEndX < -50) prev();
      startAutoplay();
    }, { passive: true });

    // Keyboard
    document.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') { prev(); startAutoplay(); }
      else if (e.key === 'ArrowRight') { next(); startAutoplay(); }
    });

    // Start
    updateDots();
    startAutoplay();
  }

  // Hero scroll effect
  var hero = document.querySelector('.hero');
  if (hero) {
    window.addEventListener('scroll', function() {
      var scrolled = window.scrollY;
      if (scrolled > 100) {
        hero.setAttribute('data-scrolled', 'true');
      } else {
        hero.setAttribute('data-scrolled', 'false');
      }
    }, { passive: true });
  }

  // Cursor follow effect for hero (desktop only)
  if (!prefersReducedMotion && window.matchMedia('(hover: hover)').matches) {
    var heroCinema = document.querySelector('.hero-cinema-content');
    if (heroCinema) {
      document.addEventListener('mousemove', function(e) {
        var x = (e.clientX / window.innerWidth - 0.5) * 20;
        var y = (e.clientY / window.innerHeight - 0.5) * 20;
        heroCinema.style.transform = 'translateX(' + x + 'px) translateY(' + y + 'px)';
      });
    }
  }
  
  // Villa slider magnetic cursor navigation (desktop only)
  (function() {
    if (!window.matchMedia('(hover: hover)').matches) return;
    
    var slider = document.querySelector('.villa-slider');
    if (!slider) return;
    
    var navButtons = slider.querySelectorAll('.villa-nav');
    var proximityThreshold = 120;
    
    // Initially show buttons for accessibility
    navButtons.forEach(function(btn) {
      btn.style.opacity = '0';
    });
    
    function handleMouseMove(e) {
      var sliderRect = slider.getBoundingClientRect();
      var sliderLeft = sliderRect.left;
      var sliderRight = sliderRect.right;
      var sliderTop = sliderRect.top;
      var sliderBottom = sliderRect.bottom;
      
      navButtons.forEach(function(btn) {
        var isPrev = btn.classList.contains('villa-nav-prev');
        var isNext = btn.classList.contains('villa-nav-next');
        
        var inProximity = false;
        
        if (isPrev && e.clientX < sliderLeft + proximityThreshold && e.clientY >= sliderTop && e.clientY <= sliderBottom) {
          inProximity = true;
        } else if (isNext && e.clientX > sliderRight - proximityThreshold && e.clientY >= sliderTop && e.clientY <= sliderBottom) {
          inProximity = true;
        }
        
        if (inProximity) {
          var targetY = e.clientY - sliderRect.height / 2;
          btn.style.transform = 'translateY(' + (targetY - btn.getBoundingClientRect().top + btn.offsetHeight / 2) + 'px)';
          btn.style.opacity = '1';
        } else {
          btn.style.opacity = '0';
        }
      });
    }
    
    slider.addEventListener('mousemove', handleMouseMove, { passive: true });
    slider.addEventListener('mouseleave', function() {
      navButtons.forEach(function(btn) {
        btn.style.opacity = '0';
      });
    });
  })();
  
  // FAQ accordion (one open at a time)
  var faqList = document.querySelector('.faq-list');
  if (faqList) {
    faqList.addEventListener('click', function (e) {
      var btn = e.target.closest('.faq-item__q');
      if (!btn) {return;}
      var item = btn.parentElement;
      var isOpen = item.classList.contains('is-open');
      faqList.querySelectorAll('.faq-item.is-open').forEach(function (other) {
        other.classList.remove('is-open');
        var q = other.querySelector('.faq-item__q');
        if (q) {q.setAttribute('aria-expanded', 'false');}
      });
      if (!isOpen) {
        item.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  }

// Contact form validation
  var contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      var isValid = true;
      var name = contactForm.querySelector('[name="name"]');
      var email = contactForm.querySelector('[name="email"]');
      var message = contactForm.querySelector('[name="message"]');
      
      // Clear previous errors
      contactForm.querySelectorAll('.field').forEach(function(f) { f.classList.remove('has-error') });
      
      // Validate name
      if (!name || !name.value.trim()) {
        isValid = false;
        if (name) name.parentElement.classList.add('has-error');
      }
      
      // Validate email
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || !emailRegex.test(email.value)) {
        isValid = false;
        if (email) email.parentElement.classList.add('has-error');
      }
      
      // Validate message
      if (!message || !message.value.trim() || message.value.trim().length < 10) {
        isValid = false;
        if (message) message.parentElement.classList.add('has-error');
      }
      
      if (!isValid) {
        e.preventDefault();
        // Show error message
        var errorMsg = contactForm.querySelector('.form-error') || document.createElement('p');
        errorMsg.className = 'form-error';
        errorMsg.style.cssText = 'color:#c00;font-size:13px;margin-top:12px';
        errorMsg.textContent = 'Compila tutti i campi obbligatori.';
        contactForm.insertBefore(errorMsg, contactForm.firstChild);
      }
    });
    
    // Real-time validation feedback
    contactForm.querySelectorAll('input, textarea').forEach(function(input) {
      input.addEventListener('blur', function() {
        var parent = input.parentElement;
        if (input.hasAttribute('required') && !input.value.trim()) {
          parent.classList.add('has-error');
        } else {
          parent.classList.remove('has-error');
        }
      });
    });
  }
})();
