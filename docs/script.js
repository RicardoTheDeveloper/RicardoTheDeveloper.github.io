const translations = {
    en: {
        nav_about: "My Story",
        nav_projects: "Crafted Work",
        nav_contact: "Let's Connect",
        download_cv: "Get Resume",
        hero_subtitle: "FULL-STACK SOFTWARE ENGINEER & SYSTEM ARCHITECT",
        about_title: "The Person Behind the Code",
        about_text: "I'm Ricardo, a Full-Stack Engineer who believes that great software is built at the intersection of robust logic and human intuition. Specializing in Java, Spring Boot, and React, I don't just write code; I design systems. Whether it's crafting a pixel-perfect frontend or architecting a scalable backend, I'm driven by the challenge of solving complex problems with elegant, human-centric solutions. My passion lies in understanding how every component fits into the bigger picture of system architecture.",
        projects_title: "Recent Ventures",
        project1_title: "uberEmailService",
        project1_desc: "Scalable email service architecture inspired by Uber, built with Spring Boot and Java.",
        project2_title: "StarThriveManager",
        project2_desc: "Comprehensive business management system for tracking company profitability and operations.",
        project3_title: "Harmonic Stream Database",
        project3_desc: "High-performance database system for harmonic stream processing using Python, Flask, and PostgreSQL.",
        project4_title: "School Bar Finance Tracker",
        project4_desc: "Efficient finance tracking system for school bars implementing optimized data structures in C.",
        contact_title: "Let's Talk Shop",
        contact_email: "Reach out via Email",
        contact_phone: "Give me a Call",
        footer_rights: "Hand-crafted with passion by Ricardo Simões."
    },
    fr: {
        nav_about: "Mon Histoire",
        nav_projects: "Réalisations",
        nav_contact: "Contact",
        download_cv: "Télécharger CV",
        hero_subtitle: "INGÉNIEUR FULL-STACK & ARCHITECTE SYSTÈME",
        about_title: "La Personne Derrière le Code",
        about_text: "Je suis Ricardo, un ingénieur Full-Stack convaincu que les meilleurs logiciels naissent de l'alliance entre une logique robuste et l'intuition humaine. Spécialisé en Java, Spring Boot et React, je ne me contente pas d'écrire du code ; je conçois des systèmes. Qu'il s'agisse de créer un frontend au pixel près ou d'architecturer un backend évolutif, je suis motivé par le défi de résoudre des problèmes complexes avec des solutions élégantes et centrées sur l'humain.",
        projects_title: "Projets Récents",
        project1_title: "uberEmailService",
        project1_desc: "Architecture de service de messagerie évolutive inspirée par Uber, construite avec Spring Boot et Java.",
        project2_title: "StarThriveManager",
        project2_desc: "Système de gestion d'entreprise complet pour le suivi de la rentabilité et des opérations.",
        project3_title: "Harmonic Stream Database",
        project3_desc: "Système de base de données haute performance pour le traitement de flux harmoniques utilisant Python, Flask et PostgreSQL.",
        project4_title: "School Bar Finance Tracker",
        project4_desc: "Système efficace de suivi financier pour les bars scolaires utilisant des structures de données optimisées en C.",
        contact_title: "Discutons",
        contact_email: "Email",
        contact_phone: "Téléphone",
        footer_rights: "Réalisé avec passion par Ricardo Simões."
    },
    nl: {
        nav_about: "Over",
        nav_projects: "Projecten",
        nav_contact: "Contact",
        download_cv: "Download CV",
        hero_subtitle: "FULL-STACK SOFTWARE ENGINEER",
        about_title: "Over Mij",
        about_text: "Gepassioneerde Full-Stack Software Engineer gespecialiseerd in Java, SQL, JavaScript en React. Ik bouw schaalbare backend-systemen en responsieve, gebruikersgerichte frontends, met een sterke nadruk op schone code en doordacht ontwerp. Altijd leren, altijd verbeteren, en gemotiveerd om software te creëren die echte impact heeft.",
        projects_title: "Projecten",
        project1_title: "uberEmailService",
        project1_desc: "Schaalbare e-mailservicearchitectuur geïnspireerd door Uber, gebouwd met Spring Boot en Java.",
        project2_title: "StarThriveManager",
        project2_desc: "Uitgebreid bedrijfsbeheersysteem voor het volgen van winstgevendheid en operaties.",
        project3_title: "Harmonic Stream Database",
        project3_desc: "Hoogwaardig databasesysteem voor harmonische stroomverwerking met Python, Flask en PostgreSQL.",
        project4_title: "School Bar Finance Tracker",
        project4_desc: "Efficiënt financieel volgsysteem voor schoolbars met geoptimaliseerde datastructuren in C.",
        contact_title: "Neem Contact Op",
        contact_email: "Email",
        contact_phone: "Telefoon",
        footer_rights: "Alle rechten voorbehouden."
    },
    pt: {
        nav_about: "A Minha História",
        nav_projects: "Trabalhos",
        nav_contact: "Contacto",
        download_cv: "Descarregar CV",
        hero_subtitle: "ENGENHEIRO DE SOFTWARE FULL-STACK & ARQUITETO DE SISTEMAS",
        about_title: "A Pessoa por Detrás do Código",
        about_text: "Sou o Ricardo, um Engenheiro Full-Stack que acredita que software de excelência nasce no cruzamento entre lógica robusta e intuição humana. Especializado em Java, Spring Boot e React, não apenas escrevo código; desenho sistemas. Seja a criar uma frontend perfeita ao pixel ou a arquitetar uma backend escalável, sou motivado pelo desafio de resolver problemas complexos com soluções elegantes e centradas no humano.",
        projects_title: "Projectos Recentes",
        project1_title: "uberEmailService",
        project1_desc: "Arquitetura de serviço de e-mail escalável inspirada na Uber, construída com Spring Boot e Java.",
        project2_title: "StarThriveManager",
        project2_desc: "Sistema de gestão empresarial abrangente para rastreio de rentabilidade e operações.",
        project3_title: "Harmonic Stream Database",
        project3_desc: "Sistema de base de dados de alto desempenho para processamento de fluxo harmónico usando Python, Flask e PostgreSQL.",
        project4_title: "School Bar Finance Tracker",
        project4_desc: "Sistema eficiente de rastreio financeiro para bares escolares implementando estruturas de dados otimizadas em C.",
        contact_title: "Vamos Conversar",
        contact_email: "Email",
        contact_phone: "Telefone",
        footer_rights: "Criado com paixão por Ricardo Simões."
    }
}; document.addEventListener('DOMContentLoaded', () => {
    const langSelect = document.getElementById('langSelect');

    // Always default to English as per user request
    langSelect.value = 'en';

    changeLanguage();
});

function changeLanguage() {
    const lang = document.getElementById('langSelect').value;
    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}

function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    body.setAttribute('data-theme', newTheme);
}

function downloadCV() {
    const link = document.createElement('a');
    link.href = 'Ricardo_Simoes_CV.pdf';
    link.download = 'Ricardo_Simoes_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

const nav = document.querySelector("nav");
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
    });
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
