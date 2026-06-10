/* ============================================================
   ETERNAL FRAMES — Gallery JavaScript
   js/gallery.js
   ============================================================ */

// ── LIGHTBOX DATA ──
const lbImgs = [
  { src: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1200&q=85', cap: 'Ceremony · Priya & Arjun' },
  { src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1200&q=85', cap: 'Portraits · Sneha & Vikram' },
  { src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&q=85', cap: 'Destination · Udaipur' },
  { src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&q=85', cap: 'Reception · First Dance' },
  { src: 'https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=1200&q=85', cap: 'Portraits · The Kiss' },
  { src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1200&q=85', cap: 'Details · Florals' },
  { src: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=1200&q=85', cap: 'Ceremony · Vows' },
  { src: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=1200&q=85', cap: 'Destination · Goa' },
  { src: 'https://images.unsplash.com/photo-1501901609772-df0848060b33?w=1200&q=85', cap: 'Reception · Celebrations' },
  { src: 'https://images.unsplash.com/photo-1518049362265-d5b2a6467637?w=1200&q=85', cap: 'Portraits · Golden Hour' },
  { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=85', cap: 'Details · Rings' },
  { src: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=1200&q=85', cap: 'Ceremony · Meera & Rohit' },
];

let lbIdx = 0;

function openLightbox(i) {
  lbIdx = i;
  document.getElementById('lb-img').src = lbImgs[i].src;
  document.getElementById('lb-caption').textContent = lbImgs[i].cap;
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

function closeLightboxOnBg(e) {
  if (e.target.id === 'lightbox') closeLightbox();
}

function lbNav(dir) {
  lbIdx = (lbIdx + dir + lbImgs.length) % lbImgs.length;
  const img = document.getElementById('lb-img');
  img.style.opacity = '0';
  setTimeout(() => {
    img.src = lbImgs[lbIdx].src;
    document.getElementById('lb-caption').textContent = lbImgs[lbIdx].cap;
    img.style.transition = 'opacity .3s';
    img.style.opacity = '1';
  }, 150);
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') lbNav(1);
  if (e.key === 'ArrowLeft') lbNav(-1);
});

// ── GALLERY FILTER ──
function filterGallery(cat, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.gcard').forEach(card => {
    const show = cat === 'all' || card.dataset.cat === cat;
    card.style.transition = 'opacity .4s,transform .4s';
    card.style.opacity = show ? '1' : '0.15';
    card.style.transform = show ? 'scale(1)' : 'scale(0.97)';
    card.style.pointerEvents = show ? 'auto' : 'none';
  });
}