// Smooth scroll (Lenis)
const lenis = new Lenis({
  duration: 1.4,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  orientation: 'vertical',
  gestureOrientation: 'vertical',
  smoothWheel: true,
  wheelMultiplier: 1,
  touchMultiplier: 1.5,
  infinite: false,
});
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) lenis.scrollTo(target);
  });
});

// Navigation scroll-spy
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('#home, #about, #services, #activities, #contact');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(item => item.classList.remove('is-active'));
    link.classList.add('is-active');
  });
});

function updateActiveNav(scrollY) {
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 200;
    if (scrollY >= top) current = section.getAttribute('id');
  });
  navLinks.forEach(link => {
    link.classList.remove('is-active');
    if (link.getAttribute('href') === '#' + current) link.classList.add('is-active');
  });
}

// Scroll icon parallax & nav glass effect
const scrollIcon = document.getElementById('scroll-icon');
const section2 = document.getElementById('section2');
const siteNav = document.getElementById('site-nav');
const backToTop = document.getElementById('back-to-top');
let iconStartY = 0;
let currentTranslateY = 0;

window.addEventListener('load', () => {
  iconStartY = scrollIcon.getBoundingClientRect().top + window.scrollY;
});

lenis.on('scroll', ({ scroll }) => {
  // Active nav highlight
  updateActiveNav(scroll);

  // Back to top visibility
  if (scroll > 400) backToTop.classList.add('visible');
  else backToTop.classList.remove('visible');

  // Icon start position fallback
  if (!iconStartY) iconStartY = scrollIcon.getBoundingClientRect().top + window.scrollY;

  // Nav glass effect
  const navProgress = Math.min(Math.max(scroll / 180, 0), 1);
  siteNav.style.setProperty('--nav-progress', navProgress.toFixed(3));
  siteNav.style.backgroundColor = `rgba(10, 10, 10, ${0.72 * navProgress})`;
  siteNav.style.backdropFilter = `blur(${18 * navProgress}px)`;
  siteNav.style.webkitBackdropFilter = `blur(${18 * navProgress}px)`;
  siteNav.style.borderBottomColor = `rgba(255, 255, 255, ${0.08 * navProgress})`;

  // Scroll icon parallax
  const section2Top = section2.offsetTop;
  const iconHeight = scrollIcon.offsetHeight;
  const maxTravel = section2Top - iconStartY - iconHeight / 2;
  const targetTranslateY = Math.min(Math.max(scroll * 0.8, 0), maxTravel);
  currentTranslateY += (targetTranslateY - currentTranslateY) * 0.12;
  scrollIcon.style.transform = `translateY(${currentTranslateY}px)`;
});

// Back to top
backToTop.addEventListener('click', () => lenis.scrollTo(0));

// Services carousel
(function() {
  const track = document.getElementById('srv-track');
  const cards = track.querySelectorAll('.srv-card');
  const counter = document.getElementById('srv-counter');
  const progress = document.getElementById('srv-progress');
  let current = 0;
  const gap = 32;
  const total = cards.length;

  function getVisible() {
    return window.innerWidth >= 768 ? 2 : 1;
  }

  function getMaxIndex() {
    return Math.max(0, total - getVisible());
  }

  function pad(n) { return n < 10 ? '0' + n : n; }

  function update() {
    if (current > getMaxIndex()) current = getMaxIndex();
    const cardWidth = cards[0].offsetWidth + gap;
    track.style.transform = `translateX(-${current * cardWidth}px)`;
    const displayNum = Math.min(current + 1, total);
    counter.textContent = pad(displayNum) + ' / ' + pad(total);
    progress.style.width = ((current + 1) / (getMaxIndex() + 1) * 100) + '%';
  }

  // Auto-play every 3.5s, loops back
  let autoPlay = setInterval(() => { current = current < getMaxIndex() ? current + 1 : 0; update(); }, 3500);
  track.parentElement.addEventListener('mouseenter', () => clearInterval(autoPlay));
  track.parentElement.addEventListener('mouseleave', () => {
    autoPlay = setInterval(() => { current = current < getMaxIndex() ? current + 1 : 0; update(); }, 3500);
  });

  // Touch/swipe
  let startX = 0, isDragging = false;
  track.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; isDragging = true; });
  track.addEventListener('touchend', (e) => {
    if (!isDragging) return;
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? (current < getMaxIndex() && current++) : (current > 0 && current--);
      update();
    }
    isDragging = false;
  });

  window.addEventListener('resize', () => update());
  update();
})();
