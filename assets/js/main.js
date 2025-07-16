// CloudFlow SaaS Landing Page - Main JavaScript

document.addEventListener('DOMContentLoaded', function () {

    // Mobile Menu Toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();

            // Toggle mobile menu
            mobileMenu.classList.toggle('hidden');

            // Toggle button icon
            const icon = this.querySelector('i');
            if (icon) {
                if (mobileMenu.classList.contains('hidden')) {
                    icon.className = 'fas fa-bars text-xl';
                } else {
                    icon.className = 'fas fa-times text-xl';
                }
            }

            // Add/remove body scroll lock
            if (mobileMenu.classList.contains('hidden')) {
                document.body.style.overflow = '';
            } else {
                document.body.style.overflow = 'hidden';
            }
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function (e) {
            if (!mobileMenuButton.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.add('hidden');
                const icon = mobileMenuButton.querySelector('i');
                if (icon) {
                    icon.className = 'fas fa-bars text-xl';
                }
                document.body.style.overflow = '';
            }
        });

        // Close mobile menu on window resize
        window.addEventListener('resize', function () {
            if (window.innerWidth >= 768) { // md breakpoint
                mobileMenu.classList.add('hidden');
                const icon = mobileMenuButton.querySelector('i');
                if (icon) {
                    icon.className = 'fas fa-bars text-xl';
                }
                document.body.style.overflow = '';
            }
        });
    }

    // Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });

    // Navbar Background on Scroll
    const navbar = document.querySelector('nav');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-white/95', 'shadow-sm');
        } else {
            navbar.classList.remove('bg-white/95', 'shadow-sm');
        }
    });

    // Intersection Observer for Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.card-feature, .card-pricing, .card-testimonial');
    animateElements.forEach(el => observer.observe(el));

    // Form Validation and Submission
    const contactForm = document.querySelector('#contact form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);

            // Basic validation
            let isValid = true;
            const errors = [];

            if (!data['first-name'] || data['first-name'].trim() === '') {
                errors.push('First name is required');
                isValid = false;
            }

            if (!data['last-name'] || data['last-name'].trim() === '') {
                errors.push('Last name is required');
                isValid = false;
            }

            if (!data.email || !isValidEmail(data.email)) {
                errors.push('Valid email is required');
                isValid = false;
            }

            if (!data.message || data.message.trim() === '') {
                errors.push('Message is required');
                isValid = false;
            }

            if (isValid) {
                // Show success message
                showAlert('Thank you! Your message has been sent successfully.', 'success');
                this.reset();
            } else {
                // Show error messages
                showAlert(errors.join('<br>'), 'error');
            }
        });
    }

    // Email validation helper
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Alert system
    function showAlert(message, type = 'info') {
        // Remove existing alerts
        const existingAlerts = document.querySelectorAll('.alert');
        existingAlerts.forEach(alert => alert.remove());

        // Create alert element
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert alert-${type} fixed top-20 right-4 z-50 max-w-sm`;
        alertDiv.innerHTML = `
            <div class="flex items-center justify-between">
                <div class="flex items-center">
                    <i class="fas fa-${getAlertIcon(type)} mr-2"></i>
                    <span>${message}</span>
                </div>
                <button class="ml-4 text-gray-500 hover:text-gray-700" onclick="this.parentElement.parentElement.remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;

        document.body.appendChild(alertDiv);

        // Auto remove after 5 seconds
        setTimeout(() => {
            if (alertDiv.parentElement) {
                alertDiv.remove();
            }
        }, 5000);
    }

    function getAlertIcon(type) {
        const icons = {
            success: 'check-circle',
            error: 'exclamation-circle',
            warning: 'exclamation-triangle',
            info: 'info-circle'
        };
        return icons[type] || 'info-circle';
    }

    // Pricing Toggle (Monthly/Annual)
    const pricingToggle = document.getElementById('pricing-toggle');
    const monthlyPrices = document.querySelectorAll('.price-monthly');
    const annualPrices = document.querySelectorAll('.price-annual');

    if (pricingToggle) {
        pricingToggle.addEventListener('change', function () {
            if (this.checked) {
                // Show annual prices
                monthlyPrices.forEach(price => price.classList.add('hidden'));
                annualPrices.forEach(price => price.classList.remove('hidden'));
            } else {
                // Show monthly prices
                monthlyPrices.forEach(price => price.classList.remove('hidden'));
                annualPrices.forEach(price => price.classList.add('hidden'));
            }
        });
    }

    // Counter Animation
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);

        function updateCounter() {
            start += increment;
            if (start < target) {
                element.textContent = Math.floor(start);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        }

        updateCounter();
    }

    // Animate counters when they come into view
    const counterObserver = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                animateCounter(entry.target, target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    // Observe counter elements
    const counters = document.querySelectorAll('[data-target]');
    counters.forEach(counter => counterObserver.observe(counter));

    // Testimonial Carousel
    let currentTestimonial = 0;
    const testimonials = document.querySelectorAll('.testimonial-item');
    const testimonialContainer = document.querySelector('.testimonials-container');

    if (testimonials.length > 0 && testimonialContainer) {
        function showTestimonial(index) {
            testimonials.forEach((testimonial, i) => {
                testimonial.style.display = i === index ? 'block' : 'none';
            });
        }

        function nextTestimonial() {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            showTestimonial(currentTestimonial);
        }

        function prevTestimonial() {
            currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
            showTestimonial(currentTestimonial);
        }

        // Auto-rotate testimonials
        setInterval(nextTestimonial, 5000);

        // Add navigation buttons if needed
        const prevBtn = document.querySelector('.testimonial-prev');
        const nextBtn = document.querySelector('.testimonial-next');

        if (prevBtn) prevBtn.addEventListener('click', prevTestimonial);
        if (nextBtn) nextBtn.addEventListener('click', nextTestimonial);
    }

    // Lazy Loading for Images
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // Back to Top Button
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopBtn.className = 'fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 opacity-0 invisible';
    backToTopBtn.id = 'back-to-top';

    document.body.appendChild(backToTopBtn);

    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            backToTopBtn.classList.remove('opacity-0', 'invisible');
            backToTopBtn.classList.add('opacity-100', 'visible');
        } else {
            backToTopBtn.classList.add('opacity-0', 'invisible');
            backToTopBtn.classList.remove('opacity-100', 'visible');
        }
    });

    backToTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Newsletter Subscription
    const newsletterForm = document.querySelector('.newsletter-form');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const email = this.querySelector('input[type="email"]').value;

            if (isValidEmail(email)) {
                showAlert('Thank you for subscribing to our newsletter!', 'success');
                this.reset();
            } else {
                showAlert('Please enter a valid email address.', 'error');
            }
        });
    }

    // Feature Tabs
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function () {
            const target = this.getAttribute('data-tab');

            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            document.querySelector(`.tab-content[data-tab="${target}"]`).classList.add('active');
        });
    });

    // Accordion Functionality
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function () {
            const content = this.nextElementSibling;
            const isActive = content.classList.contains('active');

            // Close all accordion items
            document.querySelectorAll('.accordion-content').forEach(item => {
                item.classList.remove('active');
            });

            // Open clicked item if it wasn't active
            if (!isActive) {
                content.classList.add('active');
            }
        });
    });

    // Search Functionality
    const searchInput = document.querySelector('.search-input');
    const searchResults = document.querySelector('.search-results');

    if (searchInput && searchResults) {
        searchInput.addEventListener('input', function () {
            const query = this.value.toLowerCase();

            if (query.length > 2) {
                // Simulate search results
                const results = [
                    'Features',
                    'Pricing',
                    'Documentation',
                    'API Reference',
                    'Support'
                ].filter(item => item.toLowerCase().includes(query));

                if (results.length > 0) {
                    searchResults.innerHTML = results.map(result =>
                        `<div class="p-2 hover:bg-gray-100 cursor-pointer">${result}</div>`
                    ).join('');
                    searchResults.classList.remove('hidden');
                } else {
                    searchResults.classList.add('hidden');
                }
            } else {
                searchResults.classList.add('hidden');
            }
        });

        // Hide search results when clicking outside
        document.addEventListener('click', function (e) {
            if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
                searchResults.classList.add('hidden');
            }
        });
    }

    // Cookie Consent
    const cookieConsent = document.getElementById('cookie-consent');
    const acceptCookies = document.getElementById('accept-cookies');

    if (cookieConsent && !localStorage.getItem('cookiesAccepted')) {
        cookieConsent.classList.remove('hidden');
    }

    if (acceptCookies) {
        acceptCookies.addEventListener('click', function () {
            localStorage.setItem('cookiesAccepted', 'true');
            cookieConsent.classList.add('hidden');
        });
    }

    // Performance Monitoring
    window.addEventListener('load', function () {
        // Log page load time
        const loadTime = performance.now();
        console.log(`Page loaded in ${loadTime.toFixed(2)}ms`);

        // Track user engagement
        let timeOnPage = 0;
        setInterval(() => {
            timeOnPage += 1;
            if (timeOnPage % 30 === 0) { // Log every 30 seconds
                console.log(`User has been on page for ${timeOnPage} seconds`);
            }
        }, 1000);
    });

    // Error Handling
    window.addEventListener('error', function (e) {
        console.error('JavaScript error:', e.error);
        // You can send this to your analytics service
    });

    // Initialize tooltips
    const tooltips = document.querySelectorAll('[data-tooltip]');
    tooltips.forEach(element => {
        element.classList.add('tooltip');
        element.setAttribute('title', element.getAttribute('data-tooltip'));
    });

    console.log('CloudFlow SaaS Landing Page initialized successfully!');
});

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Export functions for global use
window.CloudFlow = {
    showAlert: function (message, type) {
        // This will be available globally
        if (typeof showAlert === 'function') {
            showAlert(message, type);
        }
    },

    scrollToSection: function (sectionId) {
        const section = document.querySelector(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
}; 