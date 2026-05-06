// Properhost — script condiviso
(function () {
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
  if (heroSection) {
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

  // Cursor follow effect for hero (desktop only)
  if (window.matchMedia('(hover: hover)').matches) {
    var heroCinema = document.querySelector('.hero-cinema-content');
    if (heroCinema) {
      document.addEventListener('mousemove', function(e) {
        var x = (e.clientX / window.innerWidth - 0.5) * 20;
        var y = (e.clientY / window.innerHeight - 0.5) * 20;
        heroCinema.style.transform = 'translateX(' + x + 'px) translateY(' + y + 'px)';
      });
    }
  }
})();
