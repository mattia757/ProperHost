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
  
  // Mobile nav toggle + lang-switch clone nel drawer (per visibilità su mobile)
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('mainNav');
  if (toggle && nav) {
    // Clona il lang-switch dentro il drawer una volta sola, marchiandolo come mobile
    var sourceLang = document.querySelector('.lang-switch:not(.lang-switch--mobile)');
    if (sourceLang && !nav.querySelector('.lang-switch--mobile')) {
      var clone = sourceLang.cloneNode(true);
      clone.classList.add('lang-switch--mobile');
      nav.appendChild(clone);
    }
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { nav.classList.remove('open'); });
    });
  }

  // Contact form AJAX submit + success toast (contatti.html / en/contatti.html)
  var contactForm = document.querySelector('form.contact-form-plain');
  var formToast = document.getElementById('formToast');
  if (contactForm && formToast) {
    var isEn = (document.documentElement.lang || '').toLowerCase().indexOf('en') === 0;
    var loadingText = isEn ? 'Sending...' : 'Invio in corso...';
    var errorText = isEn
      ? 'An error occurred. Please try again or contact us directly.'
      : 'Si è verificato un errore. Riprova o contattaci direttamente.';

    var showFormToast = function () {
      formToast.hidden = false;
      requestAnimationFrame(function () { formToast.classList.add('is-visible'); });

      var hideToast = function () {
        formToast.classList.remove('is-visible');
        setTimeout(function () { formToast.hidden = true; }, 500);
      };
      var autoHide = setTimeout(hideToast, 6000);

      var closeBtn = formToast.querySelector('.form-toast-close');
      if (closeBtn) {
        closeBtn.onclick = function () {
          clearTimeout(autoHide);
          hideToast();
        };
      }
    };

    var validationErrorText = isEn
      ? 'Please fill in all required fields.'
      : 'Compila tutti i campi obbligatori.';

    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Manual validation prima di lanciare il fetch
      var nameField = contactForm.querySelector('[name="name"]');
      var emailField = contactForm.querySelector('[name="email"]');
      var messageField = contactForm.querySelector('[name="message"]');

      contactForm.querySelectorAll('.field').forEach(function (f) { f.classList.remove('has-error'); });
      var existingErr = contactForm.querySelector('.form-error');
      if (existingErr) existingErr.remove();

      var isValid = true;
      if (!nameField || !nameField.value.trim()) {
        isValid = false;
        if (nameField) nameField.parentElement.classList.add('has-error');
      }
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailField || !emailRegex.test(emailField.value)) {
        isValid = false;
        if (emailField) emailField.parentElement.classList.add('has-error');
      }
      if (!messageField || !messageField.value.trim() || messageField.value.trim().length < 10) {
        isValid = false;
        if (messageField) messageField.parentElement.classList.add('has-error');
      }

      if (!isValid) {
        var errorMsg = document.createElement('p');
        errorMsg.className = 'form-error';
        errorMsg.style.cssText = 'color:#c00;font-size:13px;margin-top:12px';
        errorMsg.textContent = validationErrorText;
        contactForm.insertBefore(errorMsg, contactForm.firstChild);
        return;
      }

      var submitBtn = contactForm.querySelector('button[type="submit"]');
      var originalText = submitBtn ? submitBtn.textContent : '';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = loadingText;
      }

      fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm)
      })
        .then(function (r) {
          if (!r.ok) throw new Error('HTTP ' + r.status);
          showFormToast();
          contactForm.reset();
        })
        .catch(function (err) {
          console.error('Form submit error:', err);
          alert(errorText);
        })
        .then(function () {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
          }
        });
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
  // Bugfix Task 57/59: in passato venivano impostati inline opacity:0 + translateY,
  // poi sostituiti aggiungendo la classe `.in`. Ma gli inline-style hanno priorità
  // sui rule CSS, quindi le card restavano nascoste anche dopo `in`.
  // Soluzione: niente inline-style, lasciamo fare al CSS `.reveal` / `.reveal.in`
  // (che già esistono) e aggiungiamo solo lo stagger via transition-delay.
  var serviceCards = document.querySelectorAll('.service-grid .service, .service-grid .service-card');
  if ('IntersectionObserver' in window && serviceCards.length) {
    serviceCards.forEach(function(card, i) {
      // assicura che ogni service card sia trattata come reveal element
      if (!card.classList.contains('reveal')) card.classList.add('reveal');
      card.style.transitionDelay = (i * 0.08) + 's';
    });
    var serviceIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          serviceIO.unobserve(e.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -30px 0px' });
    serviceCards.forEach(function(card) {
      serviceIO.observe(card);
    });
  }

  // Safety net Task 57/59: dopo 1.5s qualunque .reveal ancora invisibile viene
  // forzato a visibile. Copre il caso di ScrollTrigger/Lenis che non notificano
  // l'IntersectionObserver, immagini fuori viewport iniziale o errori di script.
  setTimeout(function() {
    document.querySelectorAll('.reveal:not(.in)').forEach(function(el) {
      var rect = el.getBoundingClientRect();
      // forza solo gli elementi sopra il fold + un po' sotto, gli altri
      // verranno gestiti dall'observer normalmente
      if (rect.top < window.innerHeight + 200) {
        el.classList.add('in');
      }
    });
  }, 1500);

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

    // Dots indicator (Task 55: stile gestito interamente dal CSS via classi)
    var dotsContainer = document.createElement('div');
    dotsContainer.className = 'villa-slider-dots';
    dotsContainer.style.cssText = 'position:absolute;bottom:28px;left:50%;transform:translateX(-50%);display:flex;gap:12px;z-index:7';
    slides.forEach(function(slide, i) {
      var dot = document.createElement('span');
      dot.setAttribute('role', 'button');
      dot.setAttribute('aria-label', 'Vai a slide ' + (i + 1));
      dot.addEventListener('click', function() { goTo(i); startAutoplay(); });
      dotsContainer.appendChild(dot);
    });
    slider.appendChild(dotsContainer);
    var dots = dotsContainer.querySelectorAll('span');
    function updateDots() {
      dots.forEach(function(dot, i) {
        if (i === current) dot.classList.add('is-active');
        else dot.classList.remove('is-active');
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
  
  // Task 55 — Villa slider: frecce SEMPRE visibili (no più magnetic cursor)
  // L'utente non aveva alcun modo evidente di scorrere le foto: ora le frecce
  // restano sempre a video con leggero hover-amplify.
  (function() {
    var slider = document.querySelector('.villa-slider');
    if (!slider) return;
    var navButtons = slider.querySelectorAll('.villa-nav');
    navButtons.forEach(function(btn) {
      // forza visibilità (override dell'opacity:0 di base nel CSS)
      btn.style.opacity = '1';
      btn.classList.add('villa-nav--visible');
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

// Real-time blur validation feedback (per il form contatti)
  var blurForm = document.querySelector('.contact-form');
  if (blurForm) {
    blurForm.querySelectorAll('input, textarea').forEach(function (input) {
      input.addEventListener('blur', function () {
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
