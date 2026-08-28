// Staggered reveal on scroll
const revealTargets = document.querySelectorAll('.entry, .skill-card, .stat');

const io = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.style.animationDelay = `${(i % 4) * 0.08}s`;
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealTargets.forEach((el) => io.observe(el));