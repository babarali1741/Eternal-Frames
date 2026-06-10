/* ============================================================
   ETERNAL FRAMES — Main JavaScript
   js/main.js
   ============================================================ */

// ── NAV SCROLL ──
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('solid', window.scrollY > 50);
});

// ── MOBILE NAV ──
function toggleMobileNav() {
  document.getElementById('mobileNav').classList.toggle('open');
}

// ── PAGE ROUTER ──
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + id).classList.add('active');
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.dataset.page === id);
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
  initReveal();
}

// ── REVEAL ON SCROLL ──
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('on');
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

function initReveal() {
  setTimeout(() => {
    document.querySelectorAll('.reveal:not(.on)').forEach(el => revealObs.observe(el));
  }, 60);
}
initReveal();

// ── NAV ACTIVE on load ──
document.querySelector('[data-page="home"]').classList.add('active');