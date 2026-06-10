/* ============================================================
   ETERNAL FRAMES — Portal & Contact JavaScript
   js/portal-contact.js
   ============================================================ */

// ── CLIENT PORTAL ──
function doLogin() {
  const email = document.getElementById('login-email').value.trim().toLowerCase();
  const pass = document.getElementById('login-pass').value.trim();
  const err = document.getElementById('login-err');
  if (email === 'priya@email.com' && pass === 'wedding2024') {
    document.getElementById('portal-login-view').style.display = 'none';
    document.getElementById('portal-dashboard').style.display = 'block';
    err.style.display = 'none';
    initReveal();
  } else {
    err.style.display = 'block';
    document.getElementById('login-pass').style.borderColor = '#e07070';
    setTimeout(() => document.getElementById('login-pass').style.borderColor = '', 2000);
  }
}

function doLogout() {
  document.getElementById('portal-dashboard').style.display = 'none';
  document.getElementById('portal-login-view').style.display = 'grid';
  document.getElementById('login-email').value = '';
  document.getElementById('login-pass').value = '';
}

// ── CONTACT FORM ──
function submitForm(btn) {
  btn.textContent = 'Sending...';
  btn.disabled = true;
  setTimeout(() => {
    document.getElementById('contact-form-wrap').style.display = 'none';
    document.getElementById('form-success').style.display = 'block';
  }, 1200);
}