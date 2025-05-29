
        document.addEventListener('DOMContentLoaded', function() {
            // Mobile Menu Toggle
            const menuToggle = document.querySelector('.menu-toggle');
            const navLinks = document.querySelector('.nav-links');

            menuToggle.addEventListener('click', () => {
                navLinks.classList.toggle('active');
                menuToggle.classList.toggle('active');
            });

            document.querySelectorAll('.nav-links a').forEach(link => {
                link.addEventListener('click', () => {
                    navLinks.classList.remove('active');
                    menuToggle.classList.remove('active');
                });
            });

            // Header Scroll Effect
            const header = document.querySelector('header');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });

            // Active Link on Scroll
            const sections = document.querySelectorAll('section');
            const navLinksScroll = document.querySelectorAll('.nav-links a');

            function highlightNav() {
                let current = '';
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;
                    if (pageYOffset >= (sectionTop - header.offsetHeight - 50) && pageYOffset < sectionTop + sectionHeight - header.offsetHeight - 50) {
                        current = section.getAttribute('id');
                    }
                });

                navLinksScroll.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${current}`) {
                        link.classList.add('active');
                    } else if (current === '' && link.getAttribute('href') === '#hero') {
                        navLinksScroll[0].classList.add('active');
                    }
                });
            }

            window.addEventListener('scroll', highlightNav);

            // FAQ Accordion
            const faqItems = document.querySelectorAll('.faq-item');
            faqItems.forEach(item => {
                const question = item.querySelector('.faq-question');
                question.addEventListener('click', () => {
                    item.classList.toggle('active');
                    faqItems.forEach(otherItem => {
                        if (otherItem !== item && otherItem.classList.contains('active')) {
                            otherItem.classList.remove('active');
                        }
                    });
                });
            });

            // Testimonial Slider
            const testimonialSlider = document.querySelector('.testimonial-slider');
            const testimonialCards = document.querySelectorAll('.testimonial-card');
            const prevBtn = document.querySelector('.prev-btn');
            const nextBtn = document.querySelector('.next-btn');
            const dotsContainer = document.querySelector('.testimonial-dots');
            let currentIndex = 0;

            function updateSlider() {
                testimonialCards.forEach((card, index) => {
                    card.style.transform = `translateX(${100 * (index - currentIndex)}%)`;
                    card.style.opacity = Math.abs(index - currentIndex) < 1 ? 1 : 0.6;
                    card.style.zIndex = Math.abs(index - currentIndex) < 1 ? 1 : 0;
                });

                updateDots();
            }

            function nextSlide() {
                currentIndex = (currentIndex + 1) % testimonialCards.length;
                updateSlider();
            }

            function prevSlide() {
                currentIndex = (currentIndex - 1 + testimonialCards.length) % testimonialCards.length;
                updateSlider();
            }

            function goToSlide(index) {
                currentIndex = index;
                updateSlider();
            }

            if (testimonialSlider) {
                testimonialCards.forEach((_, index) => {
                    const dot = document.createElement('button');
                    dot.classList.add('testimonial-dot');
                    dot.addEventListener('click', () => goToSlide(index));
                    dotsContainer.appendChild(dot);
                });

                function updateDots() {
                    const dots = document.querySelectorAll('.testimonial-dot');
                    dots.forEach((dot, index) => {
                        dot.classList.toggle('active', index === currentIndex);
                    });
                }

                updateSlider(); // Initial call

                if (prevBtn && nextBtn) {
                    nextBtn.addEventListener('click', nextSlide);
                    prevBtn.addEventListener('click', prevSlide);
                }
            }


            // Portfolio Filtering
            const filterButtons = document.querySelectorAll('.portfolio-filter button');
            const portfolioItems = document.querySelectorAll('.portfolio-item');

            filterButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const filter = this.dataset.filter;
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    this.classList.add('active');

                    portfolioItems.forEach(item => {
                        if (filter === 'all' || item.dataset.category === filter) {
                            item.style.display = 'block';
                        } else {
                            item.style.display = 'none';
                        }
                    });
                });
            });

            // Back to Top Button
            const backToTopBtn = document.querySelector('.back-to-top');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 300) {
                    backToTopBtn.classList.add('active');
                } else {
                    backToTopBtn.classList.remove('active');
                }
            });

            backToTopBtn.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });

            // Dark Mode Toggle
            const darkModeToggle = document.querySelector('.dark-mode-toggle');
            const body = document.body;
            const currentTheme = localStorage.getItem('theme');

            if (currentTheme === 'dark') {
                body.classList.add('dark-mode');
                darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            }

            darkModeToggle.addEventListener('click', () => {
                body.classList.toggle('dark-mode');
                if (body.classList.contains('dark-mode')) {
                    localStorage.setItem('theme', 'dark');
                    darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
                } else {
                    localStorage.setItem('theme', 'light');
                    darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
                }
            });
        });
    

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

// Header scroll effect
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        item.classList.toggle('active');
        
        // Close other items
        faqItems.forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.contains('active')) {
                otherItem.classList.remove('active');
            }
        });
    });
});

// Dark Mode Toggle
const darkModeToggle = document.querySelector('.dark-mode-toggle');
const body = document.body;
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        localStorage.setItem('theme', 'light');
        darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
});

// Back to Top Button
const backToTopBtn = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
    backToTopBtn.classList.toggle('active', window.scrollY > 300);
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
 menuToggle = document.querySelector('.menu-toggle');
        navLinks = document.querySelector('.nav-links');

        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        navLinks.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') {
                navLinks.classList.remove('active');
            }
        });

        // Dark mode toggle
        function toggleDarkMode() {
            document.body.classList.toggle('dark-mode');
            const icon = document.querySelector('.dark-mode-toggle i');
            if (document.body.classList.contains('dark-mode')) {
                icon.className = 'fas fa-sun';
                localStorage.setItem('darkMode', 'enabled');
            } else {
                icon.className = 'fas fa-moon';
                localStorage.setItem('darkMode', 'disabled');
            }
        }

        // Load dark mode preference
        if (localStorage.getItem('darkMode') === 'enabled') {
            document.body.classList.add('dark-mode');
            document.querySelector('.dark-mode-toggle i').className = 'fas fa-sun';
        }

        // Smooth scrolling for navigation links
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

        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Animate elements on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                }
            });
        }, observerOptions);

        // Observe all elements with animation classes
        document.querySelectorAll('.service-item, .stat-item').forEach(el => {
            observer.observe(el);
        });

        // Counter animation for stats
        function animateCounters() {
            const counters = document.querySelectorAll('.stat-value');
            counters.forEach(counter => {
                const target = parseInt(counter.textContent.replace(/\D/g, ''));
                const increment = target / 100;
                let current = 0;
                
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        counter.textContent = counter.textContent.replace(/\d+/, target);
                        clearInterval(timer);
                    } else {
                        counter.textContent = counter.textContent.replace(/\d+/, Math.floor(current));
                    }
                }, 20);
            });
        }

        // Trigger counter animation when stats section is visible
        const statsSection = document.querySelector('.stats-section');
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        if (statsSection) {
            statsObserver.observe(statsSection);
        }

        // Form submission
        const contactForm = document.querySelector('.contact-form form');
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Show success message (you can replace this with actual form submission)
            alert('شكراً لك! تم إرسال رسالتك بنجاح. سنتواصل معك قريباً.');
            contactForm.reset();
        });

        // Add loading animation to page
        window.addEventListener('load', () => {
            document.body.style.opacity = '0';
            document.body.style.transition = 'opacity 0.3s ease';
            setTimeout(() => {
                document.body.style.opacity = '1';
            }, 100);
        });
