document.addEventListener('DOMContentLoaded', function() {
    // ========== Mobile Menu Toggle ==========
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navbar = document.querySelector('.navbar');

    if (mobileMenuBtn && navbar) {
        mobileMenuBtn.addEventListener('click', function() {
            navbar.classList.toggle('active');
            const icon = this.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });

        // Close mobile menu when clicking a link
        const navLinks = document.querySelectorAll('.navbar ul li a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 992) {
                    navbar.classList.remove('active');
                    mobileMenuBtn.querySelector('i').classList.remove('fa-times');
                    mobileMenuBtn.querySelector('i').classList.add('fa-bars');
                }
            });
        });
    }

    // ========== Sticky Header ==========
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', function() {
            header.classList.toggle('scrolled', window.scrollY > 50);
        });
    }

    // ========== Smooth Scrolling for Anchor Links ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ========== Active Link Highlighting ==========
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar ul li a');

    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // ========== Initialize Animations ==========
    initAnimations();
    initTestimonialSlider();
});

// ========== Animation Observer ==========
function initAnimations() {
    const animateElements = (selector, staggerDelay = 100) => {
        const elements = document.querySelectorAll(selector);
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('animated');
                    }, index * staggerDelay);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        });

        elements.forEach(element => observer.observe(element));
    };

    // Animate different sections
    animateElements('.section-title');
    animateElements('.team-member', 150);
    animateElements('.portfolio-item', 150);
    animateElements('.testimonial-item');
    animateElements('.contact-content');
    animateElements('.about-header');
    animateElements('.about-text p');
    animateElements('.about-image');
    animateElements('.stats-container');
    animateElements('.why-choose-header');
    animateElements('.feature-card');
    animateElements('.experience-badge');
    animateElements('.cta-container');

    // Add hover effects
    addHoverEffects();
}

// ========== Hover Effects ==========
function addHoverEffects() {
    // Team member hover effects
    const teamMembers = document.querySelectorAll('.team-member');
    teamMembers.forEach(member => {
        member.addEventListener('mouseenter', () => member.style.zIndex = '10');
        member.addEventListener('mouseleave', () => member.style.zIndex = '1');
    });

    // Portfolio item hover effects
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', () => item.style.zIndex = '10');
        item.addEventListener('mouseleave', () => item.style.zIndex = '1');
    });

    // Feature card hover effects
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', () => card.style.zIndex = '10');
        card.addEventListener('mouseleave', () => card.style.zIndex = '1');
    });
}

// ========== Testimonial Slider ==========
function initTestimonialSlider() {
    const slider = document.querySelector('.testimonial-slider');
    if (!slider) return;

    const items = document.querySelectorAll('.testimonial-item');
    if (items.length === 0) return;

    let currentIndex = 0;

    function showTestimonial(index) {
        items.forEach((item, i) => {
            item.style.display = i === index ? 'block' : 'none';
            if (i === index) item.classList.add('animated');
        });
    }

    function nextTestimonial() {
        currentIndex = (currentIndex + 1) % items.length;
        showTestimonial(currentIndex);
    }

    // Show first testimonial initially
    showTestimonial(0);

    // Auto-rotate testimonials every 5 seconds
    setInterval(nextTestimonial, 5000);
}
// Initialize footer animations
function initFooterAnimations() {
    const footerCols = document.querySelectorAll('.footer-col');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animated');
                }, index * 150);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    footerCols.forEach(col => observer.observe(col));
}

// Call this function in your DOMContentLoaded event
document.addEventListener('DOMContentLoaded', function() {
    initFooterAnimations();
    // Your other initialization code...
});