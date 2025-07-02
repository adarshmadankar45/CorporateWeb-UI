// web-development.js
document.addEventListener('DOMContentLoaded', function() {
    // Hero Section Animation
    gsap.from('.service-hero h1', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power2.out'
    });

    gsap.from('.service-hero p', {
        opacity: 0,
        y: 50,
        delay: 0.3,
        duration: 1,
        ease: 'power2.out'
    });

    gsap.from('.service-links', {
        opacity: 0,
        y: 50,
        delay: 0.6,
        duration: 1,
        ease: 'power2.out'
    });

    gsap.from('.service-hero-image', {
        opacity: 0,
        x: 100,
        delay: 0.9,
        duration: 1.5,
        ease: 'power2.out'
    });

    // Services Animation
    const serviceDetails = document.querySelector('.service-details');
    if (serviceDetails) {
        const serviceObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    gsap.from('.service-feature', {
                        opacity: 0,
                        y: 50,
                        stagger: 0.2,
                        duration: 0.8,
                        ease: 'power2.out'
                    });
                    serviceObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        serviceObserver.observe(serviceDetails);
    }

    // Why Choose Animation
    const whyChoose = document.querySelector('.why-choose-service');
    if (whyChoose) {
        const whyObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    gsap.from('.why-choose-card', {
                        opacity: 0,
                        y: 50,
                        stagger: 0.2,
                        duration: 0.8,
                        ease: 'power2.out'
                    });
                    whyObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        whyObserver.observe(whyChoose);
    }

    // FAQ Functionality
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });

    // CTA Animation
    const ctaSection = document.querySelector('.service-cta');
    if (ctaSection) {
        const ctaObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    gsap.from('.cta-content > *', {
                        opacity: 0,
                        y: 30,
                        stagger: 0.2,
                        duration: 0.8,
                        ease: 'power2.out'
                    });
                    ctaObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        ctaObserver.observe(ctaSection);
    }
});