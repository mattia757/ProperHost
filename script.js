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

  // Reveal on scroll
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

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

    // Pause on hover
    slider.addEventListener('mouseenter', stopAutoplay);
    slider.addEventListener('mouseleave', startAutoplay);

    // Keyboard
    document.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') { prev(); startAutoplay(); }
      else if (e.key === 'ArrowRight') { next(); startAutoplay(); }
    });

    // Avvio autoplay
    startAutoplay();
  }
})();
