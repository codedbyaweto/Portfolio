// ===== Navbar Toggle for Mobile =====
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// ===== Typing Animation =====
const text = "Hi, I'm Egba — Frontend Developer";
let index = 0;
function typeEffect() {
  const heroTitle = document.querySelector('.typing');
  if (!heroTitle) return;

  heroTitle.textContent = text.slice(0, index);
  index++;
  if (index <= text.length) {
    setTimeout(typeEffect, 100);
  }
}
document.addEventListener('DOMContentLoaded', typeEffect);

// ===== Scroll Reveal Animation =====
const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  revealElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add('show');
    } else {
      el.classList.remove('show');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// ===== Dark / Light Mode Toggle =====
const toggleBtn = document.createElement('button');
toggleBtn.textContent = "🌙";
toggleBtn.classList.add('toggle-theme');
document.body.appendChild(toggleBtn);

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  toggleBtn.textContent = document.body.classList.contains('light-mode') ? "🌞" : "🌙";
});

// ===== Highlight Active Nav Link =====
const currentPage = window.location.pathname.split("/").pop();
document.querySelectorAll(".nav-links a").forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

