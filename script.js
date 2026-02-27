// Kaaya Thai Spa JavaScript

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
    
    // Close mobile menu when clicking on a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

// Smooth Scrolling
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

// Scroll Animations
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -10px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add small delay for about section elements
            if (entry.target.closest('#about')) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, 100);
            } else {
                entry.target.classList.add('visible');
            }
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => {
        observer.observe(el);
    });
});

// Header Background on Scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (header) {
        if (window.scrollY > 100) {
            header.classList.add('bg-cream', 'bg-opacity-95');
            header.classList.remove('header-transparent');
        } else {
            header.classList.add('header-transparent');
            header.classList.remove('bg-cream', 'bg-opacity-95');
        }
    }
});

// Call and WhatsApp functionality
function makeCall() {
    window.location.href = 'tel:09930008599';
}

function openWhatsApp() {
    const message = encodeURIComponent('Hello! I would like to inquire about your spa services.');
    window.open(`https://wa.me/919930008599?text=${message}`, '_blank');
}

// Add click handlers for CTA buttons
document.addEventListener('DOMContentLoaded', () => {
    const callBtn = document.getElementById('call-btn');
    const whatsappBtn = document.getElementById('whatsapp-btn');
    
    if (callBtn) {
        callBtn.addEventListener('click', makeCall);
    }
    
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', openWhatsApp);
    }
});

// Enhanced scroll animations for service cards
const serviceCards = document.querySelectorAll('.masonry-item');
serviceCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('#home .absolute.inset-0 img');
    if (heroImage && scrolled < window.innerHeight) {
        heroImage.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});
