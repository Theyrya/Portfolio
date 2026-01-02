// Project data with all details
const projects = {
    'car-rental': {
        title: 'Car Rental Management System',
        overview: 'A comprehensive backend-driven application designed for car rental business owners to efficiently manage their vehicle inventory, rental processes, and returns. The system features a robust relational database structure with automatic availability tracking and validated workflows to ensure data integrity.',
        techStack: ['C#', '.NET', 'MySQL'],
        features: [
            'Add, update, and remove cars from inventory',
            'Rent and return vehicles with automatic status updates',
            'Automatic availability tracking across the system',
            'Relational database with validated workflows',
            'Data integrity checks and validation',
            'Comprehensive rental history tracking'
        ],
        images: [
            'images/car-rental/screenshot1.png',
            'images/car-rental/screenshot2.png',
            'images/car-rental/screenshot3.png',
            'images/car-rental/screenshot4.png'
        ],
        github: 'https://github.com/Theyrya/CarRentalSystem',
        demo: null
    },
    'course-registration': {
        title: 'BVC Course Registration',
        overview: 'A full-stack web application that streamlines the college course registration process. Students can browse available courses, register for classes, and manage their enrollments. The system includes validation to prevent duplicate registrations and ensures data consistency across the platform.',
        techStack: ['React', 'Node.js', 'Express', 'MySQL'],
        features: [
            'Student course registration and management',
            'Relational database for students, courses, and enrollments',
            'Validation to prevent duplicate or invalid registrations',
            'Real-time course availability updates',
            'Intuitive user interface built with React',
            'RESTful API backend with Express'
        ],
        images: [
            'images/course-registration/screenshot1.png',
            'images/course-registration/screenshot2.png',
            'images/course-registration/screenshot3.png',
            'images/course-registration/screenshot4.png'
        ],
        github: 'https://github.com/Theyrya/BVC_registrations',
        demo: null
    },
    'studio-rental': {
        title: 'Studio Rental Management System',
        overview: 'A lightweight yet powerful studio booking system built entirely with vanilla JavaScript and core web technologies. The application tracks studio availability, validates bookings, and persists data using LocalStorage, demonstrating strong fundamentals in DOM manipulation and client-side data management.',
        techStack: ['HTML', 'CSS', 'JavaScript', 'JSON', 'LocalStorage'],
        features: [
            'Studio availability tracking in real-time',
            'Booking validation to prevent conflicts',
            'Persistent data storage using LocalStorage',
            'Dynamic UI updates with vanilla JavaScript',
            'Clean, responsive interface design',
            'No external dependencies or frameworks'
        ],
        images: [
            'images/studio-rental/screenshot1.png',
            'images/studio-rental/screenshot2.png',
            'images/studio-rental/screenshot3.png',
            'images/studio-rental/screenshot4.png'
        ],
        github: 'https://github.com/Theyrya/Final-Project',
        demo: null
    }
};

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            // Close mobile menu if open
            document.querySelector('.nav-menu').classList.remove('active');
        }
    });
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger
    const spans = hamburger.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Project card click handlers
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        const projectId = card.getAttribute('data-project');
        openProjectModal(projectId);
    });
});

// Open project modal with details
function openProjectModal(projectId) {
    const project = projects[projectId];
    if (!project) return;

    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');

    // Build image gallery HTML
    const imagesHTML = project.images.map(img => 
        `<img src="${img}" alt="${project.title}" class="gallery-image">`
    ).join('');

    // Build features list HTML
    const featuresHTML = project.features.map(feature => 
        `<li>${feature}</li>`
    ).join('');

    // Build tech stack HTML
    const techStackHTML = project.techStack.map(tech => 
        `<span class="tech-tag">${tech}</span>`
    ).join('');

    // Build buttons HTML
    let buttonsHTML = `<a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">View on GitHub</a>`;
    if (project.demo) {
        buttonsHTML += `<a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">Live Demo</a>`;
    }

    // Populate modal content
    modalBody.innerHTML = `
        <div class="project-detail">
            <h2>${project.title}</h2>
            <p class="overview">${project.overview}</p>
            
            <h3>Tech Stack</h3>
            <div class="tech-stack">
                ${techStackHTML}
            </div>
            
            <h3>Screenshots</h3>
            <div class="image-gallery">
                ${imagesHTML}
            </div>
            
            <h3>Key Features</h3>
            <ul class="features-list">
                ${featuresHTML}
            </ul>
            
            <div class="project-buttons">
                ${buttonsHTML}
            </div>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close modal
const modalClose = document.querySelector('.modal-close');
const modal = document.getElementById('project-modal');

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = 'var(--shadow-md)';
    } else {
        navbar.style.boxShadow = 'var(--shadow-sm)';
    }
});

// Highlight active nav link on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add intersection observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe project cards for animation
document.querySelectorAll('.project-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// ...existing code...
