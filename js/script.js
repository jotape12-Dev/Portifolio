/* ========== Typing Animation ========== */
var typed = new Typed(".typing-text", {
    strings: [
        "Software Developer",
        "iOS Developer",
        "Android Developer",
        "Flutter Developer",
        "Mobile Developer"
    ],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 2000,
    loop: true,
    showCursor: false
});

/* ========== Custom Cursor ========== */
const cursor = document.querySelector('.cursor');

if (cursor && window.innerWidth > 768) {
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    const hoverElements = document.querySelectorAll('a, button, .filter-btn, .project-card, .skill-tag, .about-card, .contact-card, .btn-whatsapp');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });
}

/* ========== Floating Particles ========== */
function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;

    const colors = ['#e8603c', '#ffffff', '#a0aec0', '#e8603c'];
    const count = 30;

    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        const size = Math.random() * 4 + 2;
        const left = Math.random() * 100;
        const duration = Math.random() * 20 + 15;
        const delay = Math.random() * 20;
        const color = colors[Math.floor(Math.random() * colors.length)];

        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = left + '%';
        particle.style.background = color;
        particle.style.animationDuration = duration + 's';
        particle.style.animationDelay = delay + 's';

        container.appendChild(particle);
    }
}

createParticles();

/* ========== Navbar Scroll Effect ========== */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

/* ========== Active Nav Link on Scroll ========== */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveNav() {
    const scrollY = window.scrollY + 200;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('data-section') === sectionId) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNav);

/* ========== Smooth Scroll for Nav Links ========== */
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }

        // Close mobile menu
        const navMenu = document.getElementById('nav-menu');
        if (navMenu) navMenu.classList.remove('active');
    });
});

/* ========== Smooth Scroll for All Anchor Links ========== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

/* ========== Mobile Navigation Toggle ========== */
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

/* ========== Project Filter ========== */
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.classList.remove('hidden');
                card.style.animation = 'fadeInCard 0.4s ease forwards';
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

/* ========== Scroll Animations ========== */
function initScrollAnimations() {
    const animElements = document.querySelectorAll(
        '.section-header, .skill-category, .about-content, .about-cards .about-card, ' +
        '.timeline-item, .project-card, .cta-card, .contact-wrapper, .hero-content'
    );

    animElements.forEach(el => {
        el.classList.add('fade-in');
    });

    // Timeline specific animations
    document.querySelectorAll('.timeline-left .timeline-content').forEach(el => {
        el.classList.add('fade-in-left');
    });

    document.querySelectorAll('.timeline-right .timeline-content').forEach(el => {
        el.classList.add('fade-in-right');
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right').forEach(el => {
        observer.observe(el);
    });
}

// Init animations after a small delay to ensure DOM is ready
setTimeout(initScrollAnimations, 100);

/* ========== Fade In Card Animation ========== */
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInCard {
        from { opacity: 0; transform: translateY(20px); }
        to   { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);

