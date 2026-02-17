// ============================================
// Subtle background particle animation
// Slow drift, faint connections, ambient feel
// ============================================

(function () {
  // Respect reduced motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const canvas = document.createElement('canvas');
  canvas.id = 'particles';
  canvas.style.cssText =
    'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0;';
  document.body.prepend(canvas);

  const ctx = canvas.getContext('2d');
  let w, h, particles;

  const CONFIG = {
    count: 50,
    color: '90, 144, 224',    // brighter blue accent RGB
    maxOpacity: 0.45,
    minRadius: 1,
    maxRadius: 2.5,
    speed: 0.15,               // very slow drift
    linkDistance: 150,
    linkOpacity: 0.12,
    mouseRadius: 150,
    mouseRepel: 0.3,
  };

  let mouse = { x: -9999, y: -9999 };

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }

  function createParticles() {
    particles = [];
    for (let i = 0; i < CONFIG.count; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * CONFIG.speed,
        vy: (Math.random() - 0.5) * CONFIG.speed,
        r: CONFIG.minRadius + Math.random() * (CONFIG.maxRadius - CONFIG.minRadius),
        opacity: 0.1 + Math.random() * (CONFIG.maxOpacity - 0.1),
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);

    // Draw connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < CONFIG.linkDistance) {
          const alpha = CONFIG.linkOpacity * (1 - dist / CONFIG.linkDistance);
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(${CONFIG.color}, ${alpha})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    // Draw & update particles
    for (const p of particles) {
      // Subtle mouse interaction — gentle repel
      const dx = p.x - mouse.x;
      const dy = p.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < CONFIG.mouseRadius && dist > 0) {
        const force = (CONFIG.mouseRadius - dist) / CONFIG.mouseRadius;
        p.vx += (dx / dist) * force * CONFIG.mouseRepel * 0.02;
        p.vy += (dy / dist) * force * CONFIG.mouseRepel * 0.02;
      }

      // Dampen velocity to keep things slow
      p.vx *= 0.999;
      p.vy *= 0.999;

      // Clamp speed
      const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
      if (speed > CONFIG.speed * 2) {
        p.vx = (p.vx / speed) * CONFIG.speed * 2;
        p.vy = (p.vy / speed) * CONFIG.speed * 2;
      }

      p.x += p.vx;
      p.y += p.vy;

      // Wrap around edges
      if (p.x < -10) p.x = w + 10;
      if (p.x > w + 10) p.x = -10;
      if (p.y < -10) p.y = h + 10;
      if (p.y > h + 10) p.y = -10;

      // Draw particle
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${CONFIG.color}, ${p.opacity})`;
      ctx.fill();
    }

    requestAnimationFrame(draw);
  }

  // Track mouse for subtle interaction
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  }, { passive: true });

  window.addEventListener('mouseleave', () => {
    mouse.x = -9999;
    mouse.y = -9999;
  });

  window.addEventListener('resize', () => {
    resize();
  }, { passive: true });

  resize();
  createParticles();
  draw();
})();
