/* ── MOBILE NAV ── */
function toggleMenu() {
  const m = document.getElementById('nav-mobile');
  if (m) m.classList.toggle('open');
}

/* ── BANNER ── */
(function () {
  const slides = document.getElementById('bannerSlides');
  const dotsEl = document.getElementById('bannerDots');
  if (!slides || !dotsEl) return;

  const cards = slides.querySelectorAll('.banner-slide');
  const total = cards.length;
  let cur = 0;

  const dots = Array.from({ length: total }, (_, i) => {
    const d = document.createElement('button');
    d.className = 'b-dot' + (i === 0 ? ' active' : '');
    d.setAttribute('aria-label', `第 ${i + 1} 張`);
    d.onclick = () => goTo(i);
    dotsEl.appendChild(d);
    return d;
  });

  function goTo(n) {
    cur = (n + total) % total;
    slides.style.transform = `translateX(-${cur * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === cur));
  }

  window.moveBanner = (dir) => goTo(cur + dir);

  let timer = setInterval(() => goTo(cur + 1), 4500);
  slides.addEventListener('mouseenter', () => clearInterval(timer));
  slides.addEventListener('mouseleave', () => { timer = setInterval(() => goTo(cur + 1), 4500); });
})();

/* ── WORKS FILTER & SORT ── */
let currentTag = 'all';
let currentSort = 'desc';

function filterTag(el) {
  currentTag = el.dataset.tag;
  document.querySelectorAll('.tag').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  applyWorksFilter();
}

function sortWorks(dir, el) {
  currentSort = dir;
  document.querySelectorAll('.sort-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  applyWorksFilter();
}

function applyWorksFilter() {
  const grid = document.getElementById('worksGrid');
  if (!grid) return;

  const cards = Array.from(grid.querySelectorAll('.work-card'));

  cards.forEach(card => {
    const tags = (card.dataset.tags || '').split(',').map(t => t.trim());
    const show = currentTag === 'all' || tags.includes(currentTag);
    card.style.display = show ? '' : 'none';
  });

  const visible = cards.filter(c => c.style.display !== 'none');
  visible.sort((a, b) => {
    const da = a.dataset.date || '';
    const db = b.dataset.date || '';
    return currentSort === 'desc' ? db.localeCompare(da) : da.localeCompare(db);
  });
  visible.forEach(card => grid.appendChild(card));
}
