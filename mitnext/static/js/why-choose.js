document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer for scroll animations
    const animateElements = () => {
        const header = document.querySelector('.why-choose-header');
        const features = document.querySelectorAll('.feature-card');
        const experienceBadge = document.querySelector('.experience-badge');
        const ctaContainer = document.querySelector('.cta-container');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Animate header
                    if (entry.target === header) {
                        header.classList.add('animated');
                    }

                    // Animate feature cards with staggered delay
                    if (entry.target.classList.contains('feature-card')) {
                        const index = Array.from(features).indexOf(entry.target);
                        entry.target.style.transitionDelay = `${index * 0.1}s`;
                        entry.target.classList.add('animated');
                    }

                    // Animate experience badge
                    if (entry.target === experienceBadge) {
                        experienceBadge.classList.add('animated');
                    }

                    // Animate CTA container
                    if (entry.target === ctaContainer) {
                        ctaContainer.classList.add('animated');
                    }
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        });

        // Observe elements
        observer.observe(header);
        features.forEach(feature => observer.observe(feature));
        observer.observe(experienceBadge);
        observer.observe(ctaContainer);
    };

    // Initialize animations
    animateElements();

    // Add hover effect to feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
        });

        card.addEventListener('mouseleave', function() {
            this.style.zIndex = '1';
        });
    });
});