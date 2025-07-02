document.addEventListener('DOMContentLoaded', function() {
    // Hero Section Animations
    const hero = document.querySelector('.hero');
    if (hero) {
        // Animate hero elements with GSAP
        gsap.from('.hero h1', {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power2.out'
        });

        gsap.from('.hero p', {
            opacity: 0,
            y: 50,
            delay: 0.3,
            duration: 1,
            ease: 'power2.out'
        });

        gsap.from('.hero-btns', {
            opacity: 0,
            y: 50,
            delay: 0.6,
            duration: 1,
            ease: 'power2.out'
        });

        // Animate hero image if exists
        const heroImage = document.querySelector('.hero-image');
        if (heroImage) {
            gsap.from(heroImage, {
                opacity: 0,
                x: 100,
                delay: 0.9,
                duration: 1.5,
                ease: 'power2.out'
            });
        }

        // Parallax effect for hero background
        window.addEventListener('scroll', function() {
            const scrollPosition = window.pageYOffset;
            hero.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
        });
    }

    // Services Section Animations
    const servicesSection = document.querySelector('.services-section');
    if (servicesSection) {
        // Intersection Observer for services
        const servicesObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Animate service cards with stagger
                    gsap.from('.service-card', {
                        opacity: 0,
                        y: 50,
                        stagger: 0.1,
                        duration: 0.8,
                        ease: 'power2.out'
                    });

                    // Animate service images if exists
                    const serviceImages = document.querySelectorAll('.service-image img');
                    if (serviceImages.length > 0) {
                        gsap.from(serviceImages, {
                            opacity: 0,
                            y: 50,
                            stagger: 0.1,
                            delay: 0.5,
                            duration: 0.8,
                            ease: 'power2.out'
                        });
                    }

                    servicesObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        servicesObserver.observe(servicesSection);

        // Hover effects for service cards
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                gsap.to(this, {
                    scale: 1.03,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });

            card.addEventListener('mouseleave', function() {
                gsap.to(this, {
                    scale: 1,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
        });
    }
});

// About Section Animations
function initAboutSection() {
    const aboutSection = document.querySelector('.about-section');
    if (aboutSection) {
        const aboutObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Animate about content
                    gsap.from('.about-header h2', {
                        opacity: 0,
                        y: 50,
                        duration: 0.8,
                        ease: 'power2.out'
                    });

                    gsap.from('.about-text p', {
                        opacity: 0,
                        y: 30,
                        stagger: 0.1,
                        duration: 0.8,
                        delay: 0.3,
                        ease: 'power2.out'
                    });

                    gsap.from('.stat-item', {
                        opacity: 0,
                        y: 50,
                        stagger: 0.1,
                        duration: 0.8,
                        delay: 0.6,
                        ease: 'power2.out'
                    });

                    gsap.from('.about-image', {
                        opacity: 0,
                        x: 100,
                        duration: 1,
                        delay: 0.9,
                        ease: 'power2.out'
                    });

                    aboutObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        aboutObserver.observe(aboutSection);
    }
}

// Why Choose Us Section Animations
function initWhyChooseSection() {
    const whyChooseSection = document.querySelector('.why-choose-section');
    if (whyChooseSection) {
        const whyChooseObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Animate section header
                    gsap.from('.why-choose-header h2', {
                        opacity: 0,
                        y: 50,
                        duration: 0.8,
                        ease: 'power2.out'
                    });

                    gsap.from('.why-choose-header .subtitle', {
                        opacity: 0,
                        y: 30,
                        duration: 0.8,
                        delay: 0.2,
                        ease: 'power2.out'
                    });

                    gsap.from('.why-choose-header .description', {
                        opacity: 0,
                        y: 30,
                        duration: 0.8,
                        delay: 0.4,
                        ease: 'power2.out'
                    });

                    // Animate feature cards with stagger
                    gsap.from('.feature-card', {
                        opacity: 0,
                        y: 50,
                        stagger: 0.1,
                        duration: 0.8,
                        delay: 0.6,
                        ease: 'power2.out'
                    });

                    // Animate experience section
                    gsap.from('.experience-badge', {
                        opacity: 0,
                        scale: 0.5,
                        duration: 0.8,
                        delay: 1,
                        ease: 'back.out(1.7)'
                    });

                    gsap.from('.cta-container > *', {
                        opacity: 0,
                        y: 30,
                        stagger: 0.1,
                        duration: 0.8,
                        delay: 1.2,
                        ease: 'power2.out'
                    });

                    whyChooseObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        whyChooseObserver.observe(whyChooseSection);

        // Add hover effects to feature cards
        const featureCards = document.querySelectorAll('.feature-card');
        featureCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                gsap.to(card, {
                    scale: 1.03,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });

            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    scale: 1,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
        });
    }
}

// Initialize sections when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initAboutSection();
    initWhyChooseSection();

    // Your existing initialization code...
});
// Team Section Animations
function initTeamSection() {
    const teamSection = document.querySelector('.team');
    if (teamSection) {
        const teamObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Animate section title
                    gsap.from('.team .section-title h2', {
                        opacity: 0,
                        y: 50,
                        duration: 0.8,
                        ease: 'power2.out'
                    });

                    gsap.from('.team .section-title p', {
                        opacity: 0,
                        y: 30,
                        duration: 0.8,
                        delay: 0.2,
                        ease: 'power2.out'
                    });

                    // Animate team members with stagger
                    gsap.from('.team-member', {
                        opacity: 0,
                        y: 50,
                        stagger: 0.2,
                        duration: 0.8,
                        delay: 0.4,
                        ease: 'power2.out'
                    });

                    teamObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        teamObserver.observe(teamSection);

        // Add hover effects to team members
        const teamMembers = document.querySelectorAll('.team-member');
        teamMembers.forEach(member => {
            member.addEventListener('mouseenter', () => {
                gsap.to(member.querySelector('.member-image img'), {
                    scale: 1.05,
                    duration: 0.5,
                    ease: 'power2.out'
                });
            });

            member.addEventListener('mouseleave', () => {
                gsap.to(member.querySelector('.member-image img'), {
                    scale: 1,
                    duration: 0.5,
                    ease: 'power2.out'
                });
            });
        });
    }
}

// Portfolio Section Animations
function initPortfolioSection() {
    const portfolioSection = document.querySelector('.portfolio');
    if (portfolioSection) {
        const portfolioObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Animate section title
                    gsap.from('.portfolio .section-title h2', {
                        opacity: 0,
                        y: 50,
                        duration: 0.8,
                        ease: 'power2.out'
                    });

                    gsap.from('.portfolio .section-title p', {
                        opacity: 0,
                        y: 30,
                        duration: 0.8,
                        delay: 0.2,
                        ease: 'power2.out'
                    });

                    // Animate portfolio items with stagger
                    gsap.from('.portfolio-item', {
                        opacity: 0,
                        y: 50,
                        stagger: 0.2,
                        duration: 0.8,
                        delay: 0.4,
                        ease: 'power2.out'
                    });

                    portfolioObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        portfolioObserver.observe(portfolioSection);

        // Add hover effects to portfolio items
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        portfolioItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                const overlay = item.querySelector('.portfolio-overlay');
                gsap.to(overlay, {
                    opacity: 1,
                    duration: 0.5,
                    ease: 'power2.out'
                });

                gsap.to(overlay.querySelector('h3'), {
                    y: 0,
                    duration: 0.5,
                    ease: 'power2.out'
                });

                gsap.to(overlay.querySelector('p'), {
                    y: 0,
                    duration: 0.5,
                    delay: 0.1,
                    ease: 'power2.out'
                });

                gsap.to(overlay.querySelector('.btn'), {
                    y: 0,
                    duration: 0.5,
                    delay: 0.2,
                    ease: 'power2.out'
                });
            });

            item.addEventListener('mouseleave', () => {
                const overlay = item.querySelector('.portfolio-overlay');
                gsap.to(overlay, {
                    opacity: 0,
                    duration: 0.5,
                    ease: 'power2.out'
                });

                gsap.to(overlay.querySelectorAll('h3, p, .btn'), {
                    y: 20,
                    duration: 0.5,
                    ease: 'power2.out'
                });
            });
        });
    }
}

// Initialize sections when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initTeamSection();
    initPortfolioSection();

    // Your existing initialization code...
});
// Testimonials Section Animations
function initTestimonialsSection() {
    const testimonialsSection = document.querySelector('.testimonials');
    if (testimonialsSection) {
        const testimonialItems = document.querySelectorAll('.testimonial-item');
        const testimonialDots = document.querySelectorAll('.testimonial-dot');
        let currentIndex = 0;
        let interval;

        // Create navigation dots if they don't exist
        if (testimonialItems.length > 1 && !document.querySelector('.testimonial-nav')) {
            const navContainer = document.createElement('div');
            navContainer.className = 'testimonial-nav';

            testimonialItems.forEach((_, index) => {
                const dot = document.createElement('div');
                dot.className = `testimonial-dot ${index === 0 ? 'active' : ''}`;
                dot.dataset.index = index;
                navContainer.appendChild(dot);
            });

            document.querySelector('.testimonial-slider').appendChild(navContainer);
        }

        function showTestimonial(index) {
            testimonialItems.forEach(item => item.classList.remove('active'));
            testimonialDots.forEach(dot => dot.classList.remove('active'));

            testimonialItems[index].classList.add('active');
            if (testimonialDots.length > 0) {
                testimonialDots[index].classList.add('active');
            }

            currentIndex = index;
        }

        function nextTestimonial() {
            const nextIndex = (currentIndex + 1) % testimonialItems.length;
            showTestimonial(nextIndex);
        }

        function startInterval() {
            interval = setInterval(nextTestimonial, 5000);
        }

        function resetInterval() {
            clearInterval(interval);
            startInterval();
        }

        // Initialize
        if (testimonialItems.length > 0) {
            testimonialItems[0].classList.add('active');
            startInterval();
        }

        // Dot navigation
        document.querySelectorAll('.testimonial-dot').forEach(dot => {
            dot.addEventListener('click', () => {
                const index = parseInt(dot.dataset.index);
                showTestimonial(index);
                resetInterval();
            });
        });

        // Intersection Observer
        const testimonialsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Animate section title
                    gsap.from('.testimonials .section-title h2', {
                        opacity: 0,
                        y: 50,
                        duration: 0.8,
                        ease: 'power2.out'
                    });

                    gsap.from('.testimonials .section-title p', {
                        opacity: 0,
                        y: 30,
                        duration: 0.8,
                        delay: 0.2,
                        ease: 'power2.out'
                    });

                    // Animate testimonial items
                    gsap.from('.testimonial-item', {
                        opacity: 0,
                        y: 50,
                        duration: 0.8,
                        delay: 0.4,
                        ease: 'power2.out'
                    });

                    testimonialsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        testimonialsObserver.observe(testimonialsSection);
    }
}

// Contact Section Animations
function initContactSection() {
    const contactSection = document.querySelector('.contact');
    if (contactSection) {
        const contactObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Animate section title
                    gsap.from('.contact .section-title h2', {
                        opacity: 0,
                        y: 50,
                        duration: 0.8,
                        ease: 'power2.out'
                    });

                    gsap.from('.contact .section-title p', {
                        opacity: 0,
                        y: 30,
                        duration: 0.8,
                        delay: 0.2,
                        ease: 'power2.out'
                    });

                    // Animate contact content
                    gsap.from('.contact-form', {
                        opacity: 0,
                        x: -50,
                        duration: 0.8,
                        delay: 0.4,
                        ease: 'power2.out'
                    });

                    gsap.from('.contact-info', {
                        opacity: 0,
                        x: 50,
                        duration: 0.8,
                        delay: 0.6,
                        ease: 'power2.out'
                    });

                    contactObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        contactObserver.observe(contactSection);

        // Form input focus effects
        const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea, .contact-form select');
        formInputs.forEach(input => {
            input.addEventListener('focus', () => {
                gsap.to(input, {
                    boxShadow: '0 0 0 3px rgba(42, 91, 215, 0.2)',
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });

            input.addEventListener('blur', () => {
                gsap.to(input, {
                    boxShadow: 'none',
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
        });
    }
}

// Google Map Section Animations
function initMapSection() {
    const mapSection = document.querySelector('#google-map');
    if (mapSection) {
        const mapObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    gsap.from(mapSection, {
                        opacity: 0,
                        y: 50,
                        duration: 0.8,
                        ease: 'power2.out'
                    });

                    mapObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        mapObserver.observe(mapSection);
    }
}

// Initialize sections when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initTestimonialsSection();
    initContactSection();
    initMapSection();

    // Your existing initialization code...
});