/* ============================================================
   ETERNAL FRAMES — Pricing Calculator JavaScript
   js/pricing.js
   ============================================================ */

let calcState = { coverage: 35000, delivery: 0, addons: [] };

function selectOpt(el, group, price) {
  const containerId = group === 'coverage' ? 'coverage-opts' : 'delivery-opts';
  document.querySelectorAll(`#${containerId} .calc-opt`).forEach(o => o.classList.remove('selected'));
  el.classList.add('selected');
  calcState[group] = price;
  updateSummary();
}

function toggleAddon(el, price) {
  el.classList.toggle('checked');
  const label = el.querySelector('strong').textContent;
  if (el.classList.contains('checked')) {
    calcState.addons.push({ label, price });
  } else {
    calcState.addons = calcState.addons.filter(a => !(a.price === price && a.label === label));
  }
  updateSummary();
}

const coverageNames = {
  35000: 'Elopement',
  75000: 'Classic Wedding',
  140000: 'Grand Wedding',
  220000: 'Destination Wedding'
};
const deliveryNames = {
  0: 'Delivery: Standard',
  8000: 'Delivery: Express (2 wks)'
};


function updateSummary() {
  const lines = document.getElementById('summary-lines');
  let html = `<div class="summary-line"><span>${coverageNames[calcState.coverage] || 'Coverage'}</span><span>₹${calcState.coverage.toLocaleString('en-IN')}</span></div>`;
  calcState.addons.forEach(a => {
    html += `<div class="summary-line"><span>${a.label}</span><span>₹${a.price.toLocaleString('en-IN')}</span></div>`;
  });
  html += `<div class="summary-line"><span>${deliveryNames[calcState.delivery]}</span><span>${calcState.delivery === 0 ? 'Included' : '₹' + calcState.delivery.toLocaleString('en-IN')}</span></div>`;
  lines.innerHTML = html;
  const total = calcState.coverage + calcState.delivery + calcState.addons.reduce((s, a) => s + a.price, 0);
  document.getElementById('summary-total').textContent = '₹' + total.toLocaleString('en-IN');
}