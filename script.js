const clamp = (n, min = 0, max = 1) => Math.min(max, Math.max(min, n));
const body = document.body;
const loader = document.querySelector('.loader');
const header = document.querySelector('.site-header');
const menu = document.querySelector('.menu');
const nav = document.querySelector('#nav');

window.addEventListener('load', () => {
  window.setTimeout(() => {
    loader.classList.add('done');
    body.classList.remove('loading');
  }, 850);
});

menu.addEventListener('click', () => {
  const open = header.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
  menu.textContent = open ? 'Close' : 'Menu';
});

nav.addEventListener('click', event => {
  if (event.target.matches('a')) {
    header.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
    menu.textContent = 'Menu';
  }
});

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function updateScroll() {
  const y = window.scrollY;
  const max = document.documentElement.scrollHeight - innerHeight;
  document.documentElement.style.setProperty('--scroll', `${(y / Math.max(max, 1)) * 100}%`);

  if (!reduced) {
    const hero = document.querySelector('.hero');
    const hp = clamp((y - hero.offsetTop) / (hero.offsetHeight - innerHeight));
    hero.style.setProperty('--hero-x', `${hp * -17}vw`);
    hero.style.setProperty('--u-y', `${Math.sin(hp * Math.PI) * -7}vh`);
    hero.style.setProperty('--r-rot', `${hp * 32}deg`);
    hero.style.setProperty('--hero-scale', 1.08 + hp * .1);

    const journey = document.querySelector('.journey');
    const jp = clamp((y - journey.offsetTop) / (journey.offsetHeight - innerHeight));
    journey.style.setProperty('--journey-x', `${jp * -400}vw`);
    journey.style.setProperty('--bars-scale', .1 + jp * .9);
    document.querySelector('.current-step').textContent = String(Math.min(5, Math.floor(jp * 5) + 1)).padStart(2, '0');
  }

  const darkSections = [...document.querySelectorAll('.hero,.journey,.contact')];
  const headerY = 45;
  header.classList.toggle('light', !darkSections.some(section => {
    const r = section.getBoundingClientRect();
    return r.top <= headerY && r.bottom >= headerY;
  }));
}

let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) requestAnimationFrame(() => { updateScroll(); ticking = false; });
  ticking = true;
}, { passive: true });
window.addEventListener('resize', updateScroll);
updateScroll();

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('in'); });
}, { threshold: .16 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const copyButton = document.querySelector('.copy-brief');
const toast = document.querySelector('.toast');
copyButton.addEventListener('click', async () => {
  const text = document.querySelector('#briefText').innerText;
  try {
    await navigator.clipboard.writeText(text);
    copyButton.textContent = 'COPIED';
    toast.classList.add('show');
    setTimeout(() => { toast.classList.remove('show'); copyButton.textContent = 'COPY'; }, 1800);
  } catch {
    copyButton.textContent = 'SELECT TEXT';
    const range = document.createRange();
    range.selectNodeContents(document.querySelector('#briefText'));
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  }
});
