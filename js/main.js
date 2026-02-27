// ============================================
// Luc Herlitz — Personal Website
// ============================================

// Email obfuscation — assembled at runtime, never in HTML
function revealEmail(e) {
  e.preventDefault();
  const u = 'i.am';
  const d = 'lucherlitz.me';
  window.location.href = 'mai' + 'lto:' + u + '@' + d;
}

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons
  lucide.createIcons();

  // --- Navbar scroll effect ---
  const nav = document.getElementById('nav');
  const handleScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // --- Mobile nav toggle ---
  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');

  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
  });

  // Close mobile nav on link click
  links.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      links.classList.remove('open');
    });
  });

  // --- Scroll animations (Intersection Observer) ---
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // Stagger siblings slightly
          const siblings = entry.target.parentElement.querySelectorAll('.animate-on-scroll');
          const index = Array.from(siblings).indexOf(entry.target);
          entry.target.style.transitionDelay = `${index * 0.08}s`;
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });

  // --- Testimonials: Desktop click-to-pause ---
  const marqueeWrapper = document.getElementById('marquee-wrapper');
  if (marqueeWrapper) {
    marqueeWrapper.addEventListener('click', (e) => {
      // Don't pause when clicking links inside cards
      if (e.target.closest('a')) return;
      marqueeWrapper.classList.toggle('marquee-paused');
    });
  }

  // --- Testimonials: Mobile swipe carousel ---
  const mobileCarousel = document.getElementById('mobile-carousel');
  if (mobileCarousel && window.innerWidth <= 768) {
    buildMobileCarousel();
  }

  // Rebuild on resize crossing the breakpoint
  let wasMobile = window.innerWidth <= 768;
  window.addEventListener('resize', () => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile && !wasMobile) buildMobileCarousel();
    wasMobile = isMobile;
  });

  function buildMobileCarousel() {
    const carousel = document.getElementById('mobile-carousel');
    if (!carousel || carousel.dataset.built) return;
    carousel.dataset.built = 'true';

    // Collect unique cards (skip duplicates — each column has cards repeated 2x)
    const allCards = document.querySelectorAll('.marquee-column');
    const uniqueCards = [];
    allCards.forEach(col => {
      const scroll = col.querySelector('.marquee-scroll');
      const cards = scroll.querySelectorAll('.rec-card');
      // First half are originals, second half are duplicates
      const half = cards.length / 2;
      for (let i = 0; i < half; i++) {
        uniqueCards.push(cards[i].cloneNode(true));
      }
    });

    // Build carousel DOM
    const track = document.createElement('div');
    track.className = 'carousel-track';

    uniqueCards.forEach(card => {
      const slide = document.createElement('div');
      slide.className = 'carousel-slide';
      slide.appendChild(card);
      track.appendChild(slide);
    });

    const dots = document.createElement('div');
    dots.className = 'carousel-dots';
    uniqueCards.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', 'Go to testimonial ' + (i + 1));
      dot.addEventListener('click', () => goTo(i));
      dots.appendChild(dot);
    });

    carousel.appendChild(track);
    carousel.appendChild(dots);

    // Dot tracking via native scroll
    let current = 0;
    const total = uniqueCards.length;

    function updateDots(index) {
      current = index;
      dots.querySelectorAll('.carousel-dot').forEach((d, i) => {
        d.classList.toggle('active', i === current);
      });
    }

    // Detect which slide is visible on scroll
    let scrollTimer = null;
    track.addEventListener('scroll', () => {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        const slideW = track.children[0].offsetWidth;
        const index = Math.round(track.scrollLeft / slideW);
        if (index !== current && index >= 0 && index < total) {
          updateDots(index);
        }
      }, 50);
    }, { passive: true });

    // Dot click scrolls to slide
    function goTo(index) {
      const slideW = track.children[0].offsetWidth;
      track.scrollTo({ left: index * slideW, behavior: 'smooth' });
      updateDots(index);
    }
  }

  // --- Smooth scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = nav.offsetHeight + 16;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
});
