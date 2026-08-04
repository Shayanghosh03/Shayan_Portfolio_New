// EmailJS configuration
const EMAILJS_PUBLIC_KEY = 'Z8-LQf212-w0kft1s';
const EMAILJS_SERVICE_ID = 'service_vpjfubd';
const EMAILJS_TEMPLATE_ID = 'template_zz1l34j';

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function () {
    // Initialize animations and functionality
    initNavbar();
    initSkillBars();
    initBackToTop();
    initFormSubmission();
    initScrollAnimations();
    initHamburgerMenu();
    initThemeToggle();
    initBackgroundAnimation();
    initAchievementsFilter();
    initCardSliders();
    initPhotoLightbox();
});

// Navbar Scroll Effect
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Update active nav link based on scroll position
        let current = '';
        const sections = document.querySelectorAll('section');

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (scrollY >= (sectionTop - 200)) {
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
}

// Animate Skill Bars on Scroll
function initSkillBars() {
    const skillItems = document.querySelectorAll('.skill-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillLevel = entry.target.querySelector('.skill-level');
                const percent = entry.target.getAttribute('data-level');
                skillLevel.style.width = `${percent}%`;

                // Animate the percentage number
                const percentElement = entry.target.querySelector('.skill-percent');
                animateValue(percentElement, 0, percent, 1500);

                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    skillItems.forEach(item => {
        observer.observe(item);
    });
}

// Animate number counting
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = value + "%";
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Back to Top Button
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Form Submission with EmailJS
function initFormSubmission() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;

            // Disable button and show loading state
            submitBtn.disabled = true;
            submitBtn.textContent = "Sending...";
            submitBtn.style.opacity = "0.7";

            if (!window.emailjs) {
                alert('Email service not loaded. Please check your internet connection and try again.');
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.style.opacity = "1";
                return;
            }

            // Send email using EmailJS
            emailjs.sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                contactForm,
                EMAILJS_PUBLIC_KEY
            ).then(
                function (response) {
                    console.log('SUCCESS!', response.status, response.text);

                    // Show success message
                    submitBtn.textContent = "Message Sent! ✓";
                    submitBtn.style.backgroundColor = "#10b981";
                    submitBtn.style.opacity = "1";

                    // Show success alert
                    alert('Thank you! Your message has been sent successfully. I\'ll get back to you soon.');

                    // Reset form
                    contactForm.reset();

                    // Reset button after 3 seconds
                    setTimeout(() => {
                        submitBtn.textContent = originalText;
                        submitBtn.style.backgroundColor = "";
                        submitBtn.disabled = false;
                    }, 3000);
                },
                function (error) {
                    console.log('FAILED...', error);

                    // Show error message
                    submitBtn.textContent = "Failed to Send";
                    submitBtn.style.backgroundColor = "#ef4444";
                    submitBtn.style.opacity = "1";

                    alert('Oops! Something went wrong. Please try again or email me directly at shayanghosh0439@gmail.com');

                    // Reset button after 3 seconds
                    setTimeout(() => {
                        submitBtn.textContent = originalText;
                        submitBtn.style.backgroundColor = "";
                        submitBtn.disabled = false;
                        submitBtn.style.opacity = "1";
                    }, 3000);
                }
            );
        });
    }
}

// Scroll Animations for Elements
function initScrollAnimations() {
    const animateElements = document.querySelectorAll('.skill-category, .project-card, .achievement-card, .about-container, .contact-container');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    animateElements.forEach(element => {
        element.style.opacity = "0";
        element.style.transform = "translateY(30px)";
        element.style.transition = "opacity 0.8s ease, transform 0.8s ease";
        observer.observe(element);
    });
}

// Hamburger Menu Toggle
function initHamburgerMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const body = document.body;

    if (hamburger) {
        hamburger.addEventListener('click', function (e) {
            e.stopPropagation();
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');

            // Prevent body scroll when menu is open
            if (navMenu.classList.contains('active')) {
                body.style.overflow = 'hidden';
            } else {
                body.style.overflow = '';
            }
        });
    }

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            body.style.overflow = '';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (event) {
        const isClickInsideMenu = navMenu.contains(event.target);
        const isClickOnHamburger = hamburger.contains(event.target);

        if (!isClickInsideMenu && !isClickOnHamburger && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            body.style.overflow = '';
        }
    });

    // Close menu on escape key
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            body.style.overflow = '';
        }
    });

    // Reset on window resize
    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            body.style.overflow = '';
        }
    });
}

// Add floating animation to project cards on hover
document.addEventListener('DOMContentLoaded', function () {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-10px)';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add typing animation effect to hero text
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        heroTitle.textContent = '';

        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                heroTitle.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };

        // Start typing animation after a short delay
        setTimeout(typeWriter, 500);
    }
});

// Dark Mode / Theme Toggle
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    const icon = themeToggle.querySelector('i');

    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';

    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }

    // Theme toggle click handler
    themeToggle.addEventListener('click', function () {
        body.classList.toggle('dark-mode');

        // Update icon
        if (body.classList.contains('dark-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
        }
    });
}

// Background Animation with Mouse Interaction
function initBackgroundAnimation() {
    const shapes = document.querySelectorAll('.shape');
    const floatingShapes = document.querySelector('.floating-shapes');

    if (!floatingShapes) return;

    // Mouse move parallax effect
    document.addEventListener('mousemove', function (e) {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 0.5;
            const x = (mouseX - 0.5) * speed * 20;
            const y = (mouseY - 0.5) * speed * 20;

            shape.style.transform = `translate(${x}px, ${y}px)`;
        });
    });

    // Scroll parallax effect
    window.addEventListener('scroll', function () {
        const scrolled = window.pageYOffset;

        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 0.1;
            shape.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    // Add pulse animation on click
    document.addEventListener('click', function (e) {
        shapes.forEach(shape => {
            shape.style.animation = 'none';
            setTimeout(() => {
                shape.style.animation = '';
            }, 10);
        });
    });
}

// Achievements Filter Functionality
function initAchievementsFilter() {
    const filterBtns = document.querySelectorAll('.achievement-filter-btn');
    const cards = document.querySelectorAll('.achievement-card');

    if (!filterBtns.length || !cards.length) return;

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter');

            cards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filterValue === 'all' || category === filterValue) {
                    card.style.display = 'flex';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0) scale(1)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Multi-Photo Card Slider Functionality
function initCardSliders() {
    const sliders = document.querySelectorAll('.achievement-slider');

    sliders.forEach(slider => {
        const track = slider.querySelector('.slider-track');
        const slides = slider.querySelectorAll('.slide');
        const prevBtn = slider.querySelector('.prev-slide');
        const nextBtn = slider.querySelector('.next-slide');
        const dots = slider.querySelectorAll('.dot');
        const photoCount = slider.querySelector('.photo-count');

        if (!slides.length) return;

        let currentIndex = 0;
        const totalSlides = slides.length;

        function updateSlider(index) {
            if (index < 0) index = totalSlides - 1;
            if (index >= totalSlides) index = 0;
            currentIndex = index;

            if (track) {
                track.style.transform = `translateX(-${currentIndex * 100}%)`;
            }

            slides.forEach((slide, idx) => {
                if (idx === currentIndex) {
                    slide.classList.add('active');
                } else {
                    slide.classList.remove('active');
                }
            });

            dots.forEach((dot, idx) => {
                if (idx === currentIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });

            if (photoCount) {
                photoCount.innerHTML = `<i class="fas fa-camera"></i> ${currentIndex + 1}/${totalSlides}`;
            }
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', function (e) {
                e.stopPropagation();
                updateSlider(currentIndex + 1);
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', function (e) {
                e.stopPropagation();
                updateSlider(currentIndex - 1);
            });
        }

        dots.forEach((dot, idx) => {
            dot.addEventListener('click', function (e) {
                e.stopPropagation();
                updateSlider(idx);
            });
        });

        // Touch swipe support for mobile devices
        let startX = 0;
        let endX = 0;

        slider.addEventListener('touchstart', function (e) {
            startX = e.changedTouches[0].screenX;
        }, { passive: true });

        slider.addEventListener('touchend', function (e) {
            endX = e.changedTouches[0].screenX;
            const diff = startX - endX;
            if (Math.abs(diff) > 40) {
                if (diff > 0) {
                    updateSlider(currentIndex + 1);
                } else {
                    updateSlider(currentIndex - 1);
                }
            }
        }, { passive: true });
    });
}

// Lightbox Modal for Photo Gallery
function initPhotoLightbox() {
    const lightbox = document.getElementById('photoLightbox');
    if (!lightbox) return;

    const overlay = lightbox.querySelector('.lightbox-overlay');
    const closeBtn = lightbox.querySelector('.lightbox-close');
    const prevBtn = lightbox.querySelector('.lightbox-prev');
    const nextBtn = lightbox.querySelector('.lightbox-next');
    const imgEl = document.getElementById('lightboxImage');
    const badgeEl = document.getElementById('lightboxBadge');
    const titleEl = document.getElementById('lightboxTitle');
    const descEl = document.getElementById('lightboxDescription');
    const metaEl = document.getElementById('lightboxMeta');
    const cards = Array.from(document.querySelectorAll('.achievement-card'));

    let currentIndex = 0;

    function openLightbox(index) {
        currentIndex = index;
        const card = cards[currentIndex];
        if (!card) return;

        // Pick active slide image if available
        const activeSlideImg = card.querySelector('.slide.active .achievement-img') || card.querySelector('.achievement-img');
        const badge = card.querySelector('.achievement-badge');
        const title = card.querySelector('.achievement-content h3');
        const desc = card.querySelector('.achievement-content p');
        const meta = card.querySelector('.achievement-meta');

        if (imgEl && activeSlideImg) imgEl.src = activeSlideImg.src;
        if (badgeEl && badge) {
            badgeEl.className = badge.className;
            badgeEl.innerHTML = badge.innerHTML;
        }
        if (titleEl && title) titleEl.textContent = title.textContent;
        if (descEl && desc) descEl.textContent = desc.textContent;
        if (metaEl && meta) metaEl.innerHTML = meta.innerHTML;

        lightbox.classList.add('active');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    function showNext() {
        const visibleCards = cards.filter(c => c.style.display !== 'none');
        if (visibleCards.length <= 1) return;
        const currentPos = visibleCards.indexOf(cards[currentIndex]);
        const nextPos = (currentPos + 1) % visibleCards.length;
        const nextIndex = cards.indexOf(visibleCards[nextPos]);
        openLightbox(nextIndex);
    }

    function showPrev() {
        const visibleCards = cards.filter(c => c.style.display !== 'none');
        if (visibleCards.length <= 1) return;
        const currentPos = visibleCards.indexOf(cards[currentIndex]);
        const prevPos = (currentPos - 1 + visibleCards.length) % visibleCards.length;
        const prevIndex = cards.indexOf(visibleCards[prevPos]);
        openLightbox(prevIndex);
    }

    cards.forEach((card, idx) => {
        card.addEventListener('click', function (e) {
            // Ignore click if user clicked on slider arrows or pagination dots
            if (e.target.closest('.slide-arrow') || e.target.closest('.slider-dots')) {
                return;
            }
            openLightbox(idx);
        });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (overlay) overlay.addEventListener('click', closeLightbox);
    if (nextBtn) nextBtn.addEventListener('click', showNext);
    if (prevBtn) prevBtn.addEventListener('click', showPrev);

    document.addEventListener('keydown', function (e) {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') showNext();
        if (e.key === 'ArrowLeft') showPrev();
    });
}