/* ========== Language Switcher + Typed Animation ========== */
const translations = {
    en: {
        typedStrings: [
            "Software Developer",
            "iOS Developer",
            "Android Developer",
            "Flutter Developer",
            "Mobile Developer"
        ],
        "nav.home": "Home",
        "nav.about": "About",
        "nav.projects": "Projects",
        "nav.contact": "Contact",
        "hero.subtitle": "Software Developer focused on native iOS and Android apps, with experience in Swift, Kotlin, Flutter, and React Native — forging digital experiences with precision and creativity.",
        "hero.ctaWork": "View My Work <i class=\"fa fa-arrow-right\"></i>",
        "hero.ctaContact": "Contact Me",
        "hero.scroll": "Scroll Down",
        "skills.title": "Skilled In",
        "skills.subtitle": "From pixel-perfect designs to scalable architectures, my development style is a crafted blend of artistry and engineering. These are the techniques I wield.",
        "cta.title": "Ready to <span class=\"text-accent\">Ignite</span> Your Next Project?",
        "cta.text": "Let's collaborate and bring your vision to life with precision, creativity, and cutting-edge technology.",
        "cta.button": "Get in Touch",
        "about.title": "Character Profile",
        "about.headline": "<span class=\"text-accent\">Software Developer</span> focused on native iOS and Android apps, forging digital experiences with precision and creativity.",
        "about.p1": "Specialized in Swift/SwiftUI for iOS and Kotlin/Java for Android, with expertise in MVVM, Clean Architecture and VIPER patterns. Hands-on experience integrating REST APIs, data persistence with SwiftData and Room, and mobile security best practices (Keychain, SSL Pinning).",
        "about.p2": "At the Apple Developer Academy, I lead the conception and publication of apps on the App Store with an average rating of 4.8 stars, collaborating in multidisciplinary squads under CBL/Scrum methodology and delivering 100% of sprints on time.",
        "about.p3": "Beyond native mobile, I build cross-platform apps with Flutter and React Native, and have experience in web development with React, TypeScript and Tailwind — always seeking to master new forms of development.",
        "about.card1Title": "Technical Skills",
        "about.card1Text": "Swift, SwiftUI, Kotlin, Flutter, React Native, TypeScript, React, Node.js",
        "about.card2Title": "Specialties",
        "about.card2Text": "iOS & Android Native, MVVM/Clean Architecture, Cross-Platform, App Store Publishing",
        "journey.title": "Journey & Experience",
        "journey.subtitle": "My path as a developer, forged through dedication and continuous growth.",
        "projects.title": "Dev Projects",
        "projects.subtitle": "Discover my projects, each crafted with precision and attention to detail — like the futuristic art of Development.",
        "projects.filterAll": "All Projects",
        "projects.filterSwift": "Swift / iOS",
        "projects.filterFlutter": "Flutter",
        "projects.filterReactNative": "React Native",
        "projects.filterReactWeb": "React / Web",
        "projects.filterPython": "Python",
        "contact.title": "Let's <span class=\"text-accent\">Talk</span>",
        "contact.subtitle": "Have a project in mind or just want to connect? Reach out directly — I'm always open to new opportunities and collaborations.",
        "contact.locationLabel": "Location",
        "contact.locationValue": "Brasília, Brazil",
        "contact.whatsTitle": "Send me a message on WhatsApp",
        "contact.whatsSubtitle": "I usually reply within a few hours. Click the button below and let's start a conversation.",
        "contact.whatsButton": "<i class=\"fa-brands fa-whatsapp\"></i> Message on WhatsApp",
        "footer.rights": "&copy; 2026 João Paulo Albuquerque de Almeida Marques'. All rights reserved.",
        "footer.credit": "Designed and Developed by <span class=\"logo-icon-small\">&#10006;</span> <span class=\"text-accent\">Jotape</span>"
    },
    pt: {
        typedStrings: [
            "Desenvolvedor de Software",
            "Desenvolvedor iOS",
            "Desenvolvedor Android",
            "Desenvolvedor Flutter",
            "Desenvolvedor Mobile"
        ],
        "nav.home": "Início",
        "nav.about": "Sobre",
        "nav.projects": "Projetos",
        "nav.contact": "Contato",
        "hero.subtitle": "Desenvolvedor de Software focado em apps nativos iOS e Android, com experiência em Swift, Kotlin, Flutter e React Native — criando experiências digitais com precisão e criatividade.",
        "hero.ctaWork": "Ver meus projetos <i class=\"fa fa-arrow-right\"></i>",
        "hero.ctaContact": "Falar comigo",
        "hero.scroll": "Role para baixo",
        "skills.title": "Habilidades",
        "skills.subtitle": "De interfaces pixel-perfect a arquiteturas escaláveis, meu estilo de desenvolvimento combina arte e engenharia. Estas são as tecnologias que utilizo.",
        "cta.title": "Pronto para <span class=\"text-accent\">impulsionar</span> seu próximo projeto?",
        "cta.text": "Vamos colaborar e dar vida à sua visão com precisão, criatividade e tecnologia de ponta.",
        "cta.button": "Entrar em contato",
        "about.title": "Perfil",
        "about.headline": "<span class=\"text-accent\">Desenvolvedor de Software</span> focado em apps nativos iOS e Android, criando experiências digitais com precisão e criatividade.",
        "about.p1": "Especializado em Swift/SwiftUI para iOS e Kotlin/Java para Android, com domínio de MVVM, Clean Architecture e VIPER. Experiência prática com integração de APIs REST, persistência com SwiftData e Room, além de boas práticas de segurança mobile (Keychain, SSL Pinning).",
        "about.p2": "Na Apple Developer Academy, lidero a concepção e publicação de apps na App Store com média de 4.8 estrelas, colaborando em squads multidisciplinares com metodologia CBL/Scrum e entregando 100% das sprints no prazo.",
        "about.p3": "Além do mobile nativo, também desenvolvo apps cross-platform com Flutter e React Native, e tenho experiência em desenvolvimento web com React, TypeScript e Tailwind — sempre buscando dominar novas formas de construir software.",
        "about.card1Title": "Competências Técnicas",
        "about.card1Text": "Swift, SwiftUI, Kotlin, Flutter, React Native, TypeScript, React, Node.js",
        "about.card2Title": "Especialidades",
        "about.card2Text": "iOS & Android Nativo, MVVM/Clean Architecture, Cross-Platform, Publicação na App Store",
        "journey.title": "Jornada & Experiência",
        "journey.subtitle": "Minha trajetória como desenvolvedor, construída com dedicação e evolução contínua.",
        "projects.title": "Projetos",
        "projects.subtitle": "Conheça meus projetos, cada um construído com precisão e atenção aos detalhes.",
        "projects.filterAll": "Todos os projetos",
        "projects.filterSwift": "Swift / iOS",
        "projects.filterFlutter": "Flutter",
        "projects.filterReactNative": "React Native",
        "projects.filterReactWeb": "React / Web",
        "projects.filterPython": "Python",
        "contact.title": "Vamos <span class=\"text-accent\">conversar</span>",
        "contact.subtitle": "Tem um projeto em mente ou quer se conectar? Fale comigo diretamente — estou sempre aberto a novas oportunidades e colaborações.",
        "contact.locationLabel": "Localização",
        "contact.locationValue": "Brasília, Brasil",
        "contact.whatsTitle": "Me envie uma mensagem no WhatsApp",
        "contact.whatsSubtitle": "Costumo responder em poucas horas. Clique no botão abaixo e vamos conversar.",
        "contact.whatsButton": "<i class=\"fa-brands fa-whatsapp\"></i> Mensagem no WhatsApp",
        "footer.rights": "&copy; 2026 João Paulo Albuquerque de Almeida Marques'. Todos os direitos reservados.",
        "footer.credit": "Design e desenvolvimento por <span class=\"logo-icon-small\">&#10006;</span> <span class=\"text-accent\">Jotape</span>"
    }
};

let typedInstance;
let currentLanguage = localStorage.getItem("portfolio-language");
if (currentLanguage !== "en" && currentLanguage !== "pt") {
    currentLanguage = "pt";
}

function initTypedAnimation(language) {
    const typedElement = document.querySelector(".typing-text");
    if (!typedElement || typeof Typed === "undefined") return;

    if (typedInstance) {
        typedInstance.destroy();
    }

    typedElement.textContent = "";
    typedInstance = new Typed(".typing-text", {
        strings: translations[language].typedStrings,
        typeSpeed: 80,
        backSpeed: 50,
        backDelay: 2000,
        loop: true,
        showCursor: false
    });
}

function updateLanguageButton(language) {
    const langToggleButton = document.getElementById("lang-toggle");
    if (!langToggleButton) return;

    const isPortuguese = language === "pt";
    langToggleButton.textContent = isPortuguese ? "PT" : "EN";
    langToggleButton.setAttribute(
        "aria-label",
        isPortuguese ? "Switch to English" : "Mudar para Português"
    );
}

function applyLanguage(language) {
    const locale = translations[language];
    if (!locale) return;

    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.getAttribute("data-i18n");
        if (key && locale[key]) {
            element.innerHTML = locale[key];
        }
    });

    initTypedAnimation(language);
    updateLanguageButton(language);
    localStorage.setItem("portfolio-language", language);
}

const langToggleButton = document.getElementById("lang-toggle");
if (langToggleButton) {
    langToggleButton.addEventListener("click", () => {
        currentLanguage = currentLanguage === "en" ? "pt" : "en";
        applyLanguage(currentLanguage);
    });
}

applyLanguage(currentLanguage);

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
