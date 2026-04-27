/**
 * BAR ROCK & CÁNTABRO - MAIN JAVASCRIPT
 * Funcionalidades interactivas y animaciones
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // HEADER SCROLL EFFECT
    // ========================================
    const header = document.getElementById('header');
    const backToTop = document.getElementById('backToTop');
    
    function handleScroll() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
            backToTop.classList.add('visible');
        } else {
            header.classList.remove('scrolled');
            backToTop.classList.remove('visible');
        }
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // ========================================
    // MOBILE MENU TOGGLE
    // ========================================
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    
    function toggleMenu() {
        menuToggle.classList.toggle('active');
        mobileMenuOverlay.classList.toggle('active');
        document.body.style.overflow = mobileMenuOverlay.classList.contains('active') ? 'hidden' : '';
    }
    
    menuToggle.addEventListener('click', toggleMenu);
    
    // Cerrar menú al hacer click en un enlace
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            mobileMenuOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Cerrar menú con tecla Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenuOverlay.classList.contains('active')) {
            toggleMenu();
        }
    });
    
    // ========================================
    // ACTIVE NAV LINK ON SCROLL
    // ========================================
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    function updateActiveNavLink() {
        const scrollPosition = window.scrollY + 200;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNavLink, { passive: true });
    
    // ========================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Ignorar enlaces vacíos o JavaScript
            if (href === '#' || href === 'javascript:void(0)') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ========================================
    // TABS FUNCTIONALITY (CARTA SECTION)
    // ========================================
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            
            // Remover clase active de todos los botones y paneles
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanels.forEach(panel => panel.classList.remove('active'));
            
            // Activar botón y panel seleccionados
            button.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
    
    // ========================================
    // RESERVATION FORM HANDLING
    // ========================================
    const reservationForm = document.getElementById('reservasForm');
    
    // Establecer fecha mínima como hoy
    const dateInput = document.getElementById('fecha');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }
    
    if (reservationForm) {
        reservationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Recoger datos del formulario
            const formData = new FormData(this);
            const data = Object.fromEntries(formData.entries());
            
            // Validación básica
            if (!data.nombre || !data.telefono || !data.email || !data.personas || !data.fecha || !data.hora) {
                showNotification('Por favor, completa todos los campos obligatorios.', 'error');
                return;
            }
            
            // Simular envío del formulario
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Enviando...';
            submitButton.disabled = true;
            
            // Simulación de petición AJAX (reemplazar con llamada real)
            setTimeout(() => {
                console.log('Datos de reserva:', data);
                showNotification('¡Reserva enviada con éxito! Te confirmaremos en menos de 24 horas.', 'success');
                reservationForm.reset();
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 1500);
        });
    }
    
    // ========================================
    // NOTIFICATION SYSTEM
    // ========================================
    function showNotification(message, type = 'info') {
        // Eliminar notificaciones existentes
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Crear elemento de notificación
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <span class="notification-message">${message}</span>
            <button class="notification-close" aria-label="Cerrar">&times;</button>
        `;
        
        // Estilos inline para la notificación
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            max-width: 400px;
            padding: 1rem 1.5rem;
            background: ${type === 'success' ? '#1a5c3a' : type === 'error' ? '#5c1a1a' : '#1a3a5c'};
            color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
            z-index: 10000;
            display: flex;
            align-items: center;
            gap: 1rem;
            animation: slideInRight 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        // Cerrar notificación
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        });
        
        // Auto-cerrar después de 5 segundos
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.animation = 'slideOutRight 0.3s ease';
                setTimeout(() => notification.remove(), 300);
            }
        }, 5000);
    }
    
    // Añadir animaciones de notificación al CSS dinámicamente
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
        .notification-close {
            background: none;
            border: none;
            color: inherit;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0;
            line-height: 1;
        }
    `;
    document.head.appendChild(style);
    
    // ========================================
    // BACK TO TOP BUTTON
    // ========================================
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // ========================================
    // INTERSECTION OBSERVER FOR ANIMATIONS
    // ========================================
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const animateOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                animateOnScroll.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observar elementos para animación
    document.querySelectorAll('.carta-item, .evento-card, .galeria-item, .feature, .info-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        animateOnScroll.observe(el);
    });
    
    // Clase para animación
    const animationStyle = document.createElement('style');
    animationStyle.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(animationStyle);
    
    // ========================================
    // LAZY LOADING FOR IMAGES
    // ========================================
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    imageObserver.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // ========================================
    // EVENT CARD DATE HIGHLIGHT
    // ========================================
    function highlightUpcomingEvents() {
        const eventDates = document.querySelectorAll('.evento-date');
        const today = new Date();
        
        eventDates.forEach(dateEl => {
            const day = parseInt(dateEl.querySelector('.date-day').textContent);
            const monthStr = dateEl.querySelector('.date-month').textContent;
            const months = {
                'ENE': 0, 'FEB': 1, 'MAR': 2, 'ABR': 3, 'MAY': 4, 'JUN': 5,
                'JUL': 6, 'AGO': 7, 'SEP': 8, 'OCT': 9, 'NOV': 10, 'DIC': 11
            };
            const month = months[monthStr];
            
            if (month !== undefined) {
                const eventYear = today.getFullYear();
                const eventDate = new Date(eventYear, month, day);
                
                // Si el evento ya pasó este año, mostrar el próximo año
                if (eventDate < today) {
                    eventDate.setFullYear(eventYear + 1);
                }
                
                // Resaltar eventos de esta semana
                const daysUntilEvent = Math.ceil((eventDate - today) / (1000 * 60 * 60 * 24));
                if (daysUntilEvent <= 7) {
                    dateEl.style.boxShadow = '0 0 20px rgba(196, 30, 58, 0.5)';
                }
            }
        });
    }
    
    highlightUpcomingEvents();
    
    // ========================================
    // PARALLAX EFFECT FOR HERO
    // ========================================
    const heroBg = document.querySelector('.hero-bg');
    
    if (heroBg) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const heroSection = document.querySelector('.hero');
            
            if (scrolled < heroSection.offsetHeight) {
                heroBg.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        }, { passive: true });
    }
    
    // ========================================
    // FORM INPUT ANIMATIONS
    // ========================================
    const formInputs = document.querySelectorAll('.form-group input, .form-group select, .form-group textarea');
    
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });
        
        // Mantener focused si hay valor
        if (input.value) {
            input.parentElement.classList.add('focused');
        }
    });
    
    // ========================================
    // SOCIAL SHARE FUNCTIONALITY (Preparado para futuro)
    // ========================================
    async function shareContent(title, text, url) {
        if (navigator.share) {
            try {
                await navigator.share({ title, text, url });
            } catch (err) {
                console.log('Error al compartir:', err);
            }
        } else {
            // Fallback: copiar URL al portapapeles
            try {
                await navigator.clipboard.writeText(url);
                showNotification('URL copiada al portapapeles', 'success');
            } catch (err) {
                console.log('Error al copiar:', err);
            }
        }
    }
    
    // ========================================
    // CONSOLE INFO
    // ========================================
    console.log('%c🎸 Bar Rock & Cántabro 🍺', 'font-size: 20px; font-weight: bold; color: #b87333;');
    console.log('%cSitio web cargado correctamente', 'font-size: 12px; color: #8a8a8a;');
    console.log('%cHecho con pasión en Cantabria', 'font-size: 12px; color: #c41e3a;');
    
});

// ========================================
    // PRELOADER (Opcional - Descomentar para usar)
// ========================================
/*
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
});
*/
