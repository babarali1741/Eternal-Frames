/* ============================================================
   ETERNAL FRAMES — Videos JavaScript
   js/videos.js
   ============================================================ */

// ── FEATURED VIDEO ──
function playFeatured() {
  const iframe = document.getElementById('featuredIframe');
  iframe.src = iframe.dataset.src.replace('autoplay=0', 'autoplay=1');
  document.getElementById('featuredOverlay').classList.add('hidden');
}

// ── VIDEO MODAL ──
function openVideoModal(src) {
  document.getElementById('vmodal-iframe').src = src;
  document.getElementById('vmodal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
  document.getElementById('vmodal').classList.remove('open');
  document.getElementById('vmodal-iframe').src = '';
  document.body.style.overflow = '';
}

document.getElementById('vmodal').addEventListener('click', function (e) {
  if (e.target === this) closeVideoModal();
});