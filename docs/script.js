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
        project1_title: "Modular E-Commerce Engine",
        project1_desc: "A headless commerce solution built with Spring Boot microservices and a dynamic React storefront. Focused on decoupled architecture and seamless API orchestration.",
        project2_title: "Real-time Collaboration Hub",
        project2_desc: "A high-performance task system utilizing WebSockets for instant synchronization. Engineered for low latency and high availability to support distributed teams.",
        project3_title: "Core Banking API Gateway",
        project3_desc: "A secure, high-throughput RESTful service with JWT-based Auth and comprehensive circuit breaking. Designed for mission-critical reliability and performance.",
        project4_title: "Intelligence Visualization Suite",
        project4_desc: "Transforming complex datasets into actionable insights. Features a custom D3.js engine integrated with a robust PostgreSQL warehousing strategy.",
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
        project1_title: "Moteur E-Commerce Modulaire",
        project1_desc: "Une solution de commerce 'headless' avec microservices Spring Boot et boutique React. Focus sur l'architecture découplée.",
        project2_title: "Hub de Collaboration Temps-Réel",
        project2_desc: "Système de gestion performant utilisant WebSockets. Conçu pour une faible latence et une haute disponibilité.",
        project3_title: "Passerelle API Bancaire",
        project3_desc: "Service RESTful sécurisé avec Auth JWT et mécanismes de 'circuit breaking'. Fiabilité et performance critiques.",
        project4_title: "Suite de Visualisation de Données",
        project4_desc: "Transformation de données complexes en insights. Moteur D3.js personnalisé intégré à une stratégie PostgreSQL robuste.",
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
        project1_title: "E-Commerce Platform",
        project1_desc: "Full-stack applicatie met Spring Boot backend en React frontend. Functies omvatten gebruikersauthenticatie, productbeheer en betalingsintegratie.",
        project2_title: "Taakbeheersysteem",
        project2_desc: "Samenwerkingsplatform voor teamprojectbeheer met realtime updates, taaktoewijzingen en voortgangsregistratie.",
        project3_title: "RESTful API Service",
        project3_desc: "Schaalbare microservices-architectuur met uitgebreide API-documentatie, JWT-authenticatie en cloud-implementatie.",
        project4_title: "Data Analyse Dashboard",
        project4_desc: "Interactief visualisatieplatform voor business intelligence met realtime gegevensverwerking en aanpasbare grafieken.",
        contact_title: "Neem Contact Op",
        contact_email: "Email",
        contact_phone: "Telefoon",
        footer_rights: "Alle rechten voorbehouden."
    },
    "pt-PT": {
        nav_about: "A Minha História",
        nav_projects: "Trabalhos",
        nav_contact: "Contacto",
        download_cv: "Descarregar CV",
        hero_subtitle: "ENGENHEIRO DE SOFTWARE FULL-STACK & ARQUITETO DE SISTEMAS",
        about_title: "A Pessoa por Detrás do Código",
        about_text: "Sou o Ricardo, um Engenheiro Full-Stack que acredita que software de excelência nasce no cruzamento entre lógica robusta e intuição humana. Especializado em Java, Spring Boot e React, não apenas escrevo código; desenho sistemas. Seja a criar uma frontend perfeita ao pixel ou a arquitetar uma backend escalável, sou motivado pelo desafio de resolver problemas complexos com soluções elegantes e centradas no humano.",
        projects_title: "Projectos Recentes",
        project1_title: "Motor E-Commerce Modular",
        project1_desc: "Uma solução de comércio 'headless' com microserviços Spring Boot e frontend React. Focado em arquitetura desacoplada.",
        project2_title: "Hub de Colaboração Real-time",
        project2_desc: "Sistema de gestão de alto desempenho utilizando WebSockets. Projetado para baixa latência e alta disponibilidade.",
        project3_title: "Gateway API de Core Banking",
        project3_desc: "Serviço RESTful seguro com Auth JWT e 'circuit breaking'. Desenhado para fiabilidade e performance crítica.",
        project4_title: "Suite de Visualização de Dados",
        project4_desc: "Transformando conjuntos de dados complexos em insights acionáveis. Com motor D3.js personalizado e PostgreSQL.",
        contact_title: "Vamos Conversar",
        contact_email: "Email",
        contact_phone: "Telefone",
        footer_rights: "Criado com paixão por Ricardo Simões."
    }
}; document.addEventListener('DOMContentLoaded', () => {
    const userLang = navigator.language;
    const lang = userLang.split('-')[0];
    const langSelect = document.getElementById('langSelect');

    if ([...langSelect.options].some(option => option.value === userLang)) {
        langSelect.value = userLang;
    } else if ([...langSelect.options].some(option => option.value === lang)) {
        langSelect.value = lang;
    }

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
