// Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when clicking on a nav link
const navItems = document.querySelectorAll('.nav-links li a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Sticky Header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 50);
});

// Active nav link based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links li a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= (sectionTop - 200)) {
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

// Form Submission
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Simple form validation
        if (name && email && subject && message) {
            // Here you would typically send the data to a server
            // For now, we'll just show an alert
            alert('Mensagem enviada com sucesso! Entrarei em contato em breve.');
            contactForm.reset();
        } else {
            alert('Por favor, preencha todos os campos do formulário.');
        }
    });
}

// Animation on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.1
});

// Add animation classes to elements
document.addEventListener('DOMContentLoaded', () => {
    // Fade in animation for section headers
    const sectionHeaders = document.querySelectorAll('.section-header');
    sectionHeaders.forEach(header => {
        header.style.opacity = '0';
        header.style.transform = 'translateY(20px)';
        header.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(header);
    });

    // Fade in animation for project cards
    const projectCards = document.querySelectorAll('.projeto-card');
    projectCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(40px)';
        card.style.transition = `opacity 0.5s ease ${index * 0.2}s, transform 0.5s ease ${index * 0.2}s`;
        observer.observe(card);
    });

    // Animation for timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = index % 2 === 0 ? 'translateX(-50px)' : 'translateX(50px)';
        item.style.transition = `opacity 0.5s ease ${index * 0.3}s, transform 0.5s ease ${index * 0.3}s`;
        observer.observe(item);
    });
});

// Add show class for animations
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.show').forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0) translateX(0)';
    });
});