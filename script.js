// ===== Initialize Lucide Icons =====
lucide.createIcons();

// ===== Navbar Scroll Effect =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== Mobile Menu Toggle =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when a nav link is clicked
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// ===== Scroll Reveal Animation =====
const revealElements = document.querySelectorAll('.reveal');
const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 80) {
            el.classList.add('active');
        }
    });
};
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ===== Active Nav Link Highlight on Scroll =====
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    navAnchors.forEach(a => {
        a.classList.remove('active');
        a.style.color = '';
        if (a.getAttribute('href') === `#${current}`) {
            a.style.color = '#6c63ff';
        }
    });
});

// ===== Contact Form Handler =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('.btn-submit');
        btn.innerHTML = '✓ Message Sent!';
        btn.style.background = 'linear-gradient(135deg, #4ade80, #22c55e)';
        setTimeout(() => {
            btn.innerHTML = '<span>Send Message</span>';
            btn.style.background = '';
            contactForm.reset();
        }, 3000);
    });
}

// ===== Hero Role Fade-in Effect =====
const heroRole = document.querySelector('.hero-role');
if (heroRole) {
    heroRole.style.opacity = '0';
    heroRole.style.animation = 'fadeInUp 0.8s ease 0.4s forwards';
}
