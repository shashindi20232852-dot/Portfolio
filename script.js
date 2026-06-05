// ==============================
// CUSTOM CURSOR
// ==============================
const cursor = document.getElementById('cursor');
const cursorDot = document.getElementById('cursor-dot');

let mouseX = 0, mouseY = 0;
let curX = 0, curY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursorDot.style.left = mouseX + 'px';
  cursorDot.style.top  = mouseY + 'px';
});

function animateCursor() {
  curX += (mouseX - curX) * 0.12;
  curY += (mouseY - curY) * 0.12;
  cursor.style.left = (curX - 18) + 'px';
  cursor.style.top  = (curY - 18) + 'px';
  requestAnimationFrame(animateCursor);
}
animateCursor();

// Scale cursor on hover
document.querySelectorAll('a, button, .proj-card, .soc-card, .ach-item, .ref-card').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.style.transform = 'scale(1.8)');
  el.addEventListener('mouseleave', () => cursor.style.transform = 'scale(1)');
});

// ==============================
// NAVBAR SCROLL
// ==============================
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ==============================
// HAMBURGER
// ==============================
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ==============================
// SCROLL REVEAL
// ==============================
const revealEls = document.querySelectorAll(
  '.reveal, .proj-card, .skill-group, .ach-item, .tl-item, .ref-card'
);

revealEls.forEach((el, i) => {
  el.classList.add('reveal');
  el.style.transitionDelay = `${(i % 5) * 0.07}s`;
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ==============================
// ACTIVE NAV LINK
// ==============================
const sections = document.querySelectorAll('section[id]');
const links    = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 130) current = s.id;
  });
  links.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === `#${current}`) {
      link.style.color = 'var(--accent)';
    }
  });
});

// ==============================
// HERO TEXT SPLIT ANIMATION
// ==============================
// Already handled via CSS animation-delay on .word elements
// Extra: parallax subtle on hero
window.addEventListener('scroll', () => {
  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle && window.scrollY < window.innerHeight) {
    heroTitle.style.transform = `translateY(${window.scrollY * 0.08}px)`;
  }
});
