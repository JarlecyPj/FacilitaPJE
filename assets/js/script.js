// DOM Elements
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');
const faqItems = document.querySelectorAll('.faq-item');

// Mobile Menu Toggle
mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navigation functionality
function showSection(sectionId) {
    // Hide all sections
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    // Update active nav link
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    const activeLink = document.querySelector(`[href="#${sectionId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// Handle navigation clicks
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        showSection(targetId);
        
        // Smooth scroll to top of section
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }, 100);
    });
});

// FAQ Accordion functionality
faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        // Close other FAQ items
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
        
        // Toggle current item
        item.classList.toggle('active');
    });
});

// Form removed: contact form and EmailJS submission were removed intentionally.
// Contact is handled via direct email / WhatsApp links in the page markup.

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#27ae60' : type === 'error' ? '#e74c3c' : '#3498db'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        max-width: 400px;
        animation: slideInRight 0.3s ease-out;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOutRight 0.3s ease-in';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }
    }, 5000);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.animation = 'slideOutRight 0.3s ease-in';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    });
}

// Add CSS animations for notifications
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
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        margin-left: auto;
        padding: 0;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .notification-close:hover {
        opacity: 0.8;
    }
`;
document.head.appendChild(style);

// Smooth scrolling for anchor links
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

// Active section detection based on scroll
function updateActiveSection() {
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            // Update active nav link
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            
            const activeLink = document.querySelector(`[href="#${sectionId}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
}

// Throttled scroll event listener
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) {
        clearTimeout(scrollTimeout);
    }
    scrollTimeout = setTimeout(updateActiveSection, 10);
});

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    // Show home section by default
    showSection('home');
    
    // Load initial images for the default process type
    loadImagesForProcessType('inicial');
    
    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in';
        document.body.style.opacity = '1';
    }, 100);
    
    // Add intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease-out';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.step-card, .tutorial-card, .faq-item, .image-item').forEach(el => {
        observer.observe(el);
    });
});

// Tutorial video functionality is now handled by individual buttons

// Add hover effects for better UX
document.querySelectorAll('.step-card, .tutorial-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    // ESC key closes mobile menu
    if (e.key === 'Escape') {
        mobileMenu.classList.remove('active');
        navMenu.classList.remove('active');
    }
    
    // Arrow keys for FAQ navigation
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        const activeFaq = document.querySelector('.faq-item.active');
        if (activeFaq) {
            e.preventDefault();
            const faqArray = Array.from(faqItems);
            const currentIndex = faqArray.indexOf(activeFaq);
            let nextIndex;
            
            if (e.key === 'ArrowDown') {
                nextIndex = (currentIndex + 1) % faqArray.length;
            } else {
                nextIndex = (currentIndex - 1 + faqArray.length) % faqArray.length;
            }
            
            // Close current FAQ
            activeFaq.classList.remove('active');
            
            // Open next FAQ
            faqArray[nextIndex].classList.add('active');
            faqArray[nextIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
});

// Performance optimization: Debounce resize events
let resizeTimeout;
window.addEventListener('resize', () => {
    if (resizeTimeout) {
        clearTimeout(resizeTimeout);
    }
    resizeTimeout = setTimeout(() => {
        // Close mobile menu on resize to desktop
        if (window.innerWidth > 768) {
            mobileMenu.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }, 250);
});

// Add loading states for better UX
function addLoadingState(element) {
    element.style.opacity = '0.6';
    element.style.pointerEvents = 'none';
}

function removeLoadingState(element) {
    element.style.opacity = '1';
    element.style.pointerEvents = 'auto';
}

// Process Type Selector functionality
const processTypeButtons = document.querySelectorAll('.process-type-btn');
const processSteps = document.querySelectorAll('.process-steps');

// Image data organized by process type
const imageData = {
    inicial: [
        {
            src: 'assets/images/PJE Home.png',
            title: 'Página Inicial do PJe',
            description: 'Acesse o sistema PJe através da página inicial do tribunal.',
            step: 1
        },
        {
            src: 'assets/images/PJE login.png',
            title: 'Tela de Login',
            description: 'Faça login com seu certificado digital ou CPF.',
            step: 2
        },
        {
            src: 'assets/images/PJE Menu Rapido.png',
            title: 'Menu Rápido',
            description: 'Após o login, você terá acesso ao menu rápido com as principais opções.',
            step: 3
        },
        {
            src: 'assets/images/PJE Opção Novo Processo.png',
            title: 'Novo Processo',
            description: 'Selecione a opção "Novo Processo" para iniciar uma nova petição.',
            step: 4
        },
        {
            src: 'assets/images/PJE Opção Peticionar.png',
            title: 'Peticionar',
            description: 'Clique em "Peticionar" para acessar o formulário de petição.',
            step: 5
        }
    ],
    juntada: [
        {
            src: 'assets/images/PJE Opção Acervo.png',
            title: 'Acesso ao Acervo',
            description: 'Para fazer juntada, acesse o acervo de processos.',
            step: 1
        },
        {
            src: 'assets/images/PJE Opções de Pesquisa.png',
            title: 'Pesquisar Processo',
            description: 'Use as opções de pesquisa para encontrar o processo desejado.',
            step: 2
        },
        {
            src: 'assets/images/PJE Opções Processo.png',
            title: 'Opções do Processo',
            description: 'Selecione o processo e escolha a opção de juntada.',
            step: 3
        },
        {
            src: 'assets/images/PJE Opção Habilitação Nos Autos.png',
            title: 'Habilitação nos Autos',
            description: 'Para juntar documentos, selecione "Habilitação nos Autos".',
            step: 4
        }
    ],
    consulta: [
        {
            src: 'assets/images/PJE Opção Consulta Processo.png',
            title: 'Consulta de Processo',
            description: 'Acesse a opção "Consulta Processo" no menu principal.',
            step: 1
        },
        {
            src: 'assets/images/PJE Opções de Pesquisa.png',
            title: 'Filtros de Pesquisa',
            description: 'Use os filtros disponíveis para encontrar seu processo.',
            step: 2
        },
        {
            src: 'assets/images/PJE Opções Processo corte.png',
            title: 'Visualizar Processo',
            description: 'Clique no processo para visualizar seus detalhes e andamento.',
            step: 3
        },
        {
            src: 'assets/images/5 Consulta processo - segredo de justiça não sera exibido aqui deve-se pedir habilitação para a visualização.png',
            title: 'Processos em Segredo de Justiça',
            description: 'Processos em segredo de justiça não serão exibidos no campo de consulta processual, mas sim no campo de habilitação nos autos.',
            step: 4
        },
        {
            src: 'assets/images/PJE Opções do Menu Painel.png',
            title: 'Painel do Representante',
            description: 'Acesse o painel do representante para gerenciar seus processos.',
            step: 5
        }
    ]
};

// Function to create image item HTML
function createImageItem(imageData, index) {
    return `
        <div class="image-item" data-image-index="${index}" data-process-type="${getCurrentProcessType()}">
            <div class="image-step-number">${imageData.step}</div>
            <img src="${imageData.src}" alt="${imageData.title}" loading="lazy" class="gallery-image">
            <div class="image-item-content">
                <h4>${imageData.title}</h4>
                <p>${imageData.description}</p>
            </div>
        </div>
    `;
}

// Function to load images for a specific process type
function loadImagesForProcessType(processType) {
    const gallery = document.getElementById(`${processType}-gallery`);
    if (gallery && imageData[processType]) {
        gallery.innerHTML = imageData[processType]
            .map((image, index) => createImageItem(image, index))
            .join('');
    }
}

// Function to switch process type
function switchProcessType(processType) {
    // Update current process type
    currentProcessType = processType;
    
    // Remove active class from all buttons and steps
    processTypeButtons.forEach(btn => btn.classList.remove('active'));
    processSteps.forEach(step => step.classList.remove('active'));
    
    // Add active class to selected button and step
    const selectedButton = document.querySelector(`[data-type="${processType}"]`);
    const selectedStep = document.getElementById(`${processType}-content`);
    
    if (selectedButton) selectedButton.classList.add('active');
    if (selectedStep) selectedStep.classList.add('active');
    
    // Load images for the selected process type
    loadImagesForProcessType(processType);
}

// Add event listeners to process type buttons
processTypeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const processType = button.getAttribute('data-type');
        switchProcessType(processType);
    });
});

// Function to handle image loading errors
function handleImageError(img) {
    img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjhmOWZhIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlbSBuw6NvIGVuY29udHJhZGE8L3RleHQ+PC9zdmc+';
    img.alt = 'Imagem não encontrada';
}

// Modal functionality
let currentImageIndex = 0;
let currentProcessType = 'inicial';
let currentImages = [];

// Function to get current process type
function getCurrentProcessType() {
    return currentProcessType;
}

// Function to open modal
function openImageModal(imageIndex, processType) {
    currentImageIndex = imageIndex;
    currentProcessType = processType;
    currentImages = imageData[processType] || [];
    
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalCounter = document.getElementById('modalCounter');
    
    if (currentImages.length > 0 && currentImages[currentImageIndex]) {
        const image = currentImages[currentImageIndex];
        
        modalImage.src = image.src;
        modalImage.alt = image.title;
        modalTitle.textContent = image.title;
        modalDescription.textContent = image.description;
        modalCounter.textContent = `${currentImageIndex + 1} de ${currentImages.length}`;
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Update navigation buttons visibility
        updateNavigationButtons();
    }
}

// Function to close modal
function closeImageModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Function to navigate to previous image
function previousImage() {
    if (currentImages.length > 0) {
        currentImageIndex = (currentImageIndex - 1 + currentImages.length) % currentImages.length;
        updateModalContent();
    }
}

// Function to navigate to next image
function nextImage() {
    if (currentImages.length > 0) {
        currentImageIndex = (currentImageIndex + 1) % currentImages.length;
        updateModalContent();
    }
}

// Function to update modal content
function updateModalContent() {
    if (currentImages.length > 0 && currentImages[currentImageIndex]) {
        const image = currentImages[currentImageIndex];
        const modalImage = document.getElementById('modalImage');
        const modalTitle = document.getElementById('modalTitle');
        const modalDescription = document.getElementById('modalDescription');
        const modalCounter = document.getElementById('modalCounter');
        
        modalImage.src = image.src;
        modalImage.alt = image.title;
        modalTitle.textContent = image.title;
        modalDescription.textContent = image.description;
        modalCounter.textContent = `${currentImageIndex + 1} de ${currentImages.length}`;
        
        updateNavigationButtons();
    }
}

// Function to update navigation buttons visibility
function updateNavigationButtons() {
    const prevBtn = document.getElementById('modalPrev');
    const nextBtn = document.getElementById('modalNext');
    
    if (currentImages.length <= 1) {
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
    } else {
        prevBtn.style.display = 'flex';
        nextBtn.style.display = 'flex';
    }
}

// Add event listeners for modal
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('imageModal');
    const modalClose = document.getElementById('modalClose');
    const modalOverlay = document.getElementById('modalOverlay');
    const modalPrev = document.getElementById('modalPrev');
    const modalNext = document.getElementById('modalNext');
    
    // Close modal events
    modalClose.addEventListener('click', closeImageModal);
    modalOverlay.addEventListener('click', closeImageModal);
    
    // Navigation events
    modalPrev.addEventListener('click', previousImage);
    modalNext.addEventListener('click', nextImage);
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (modal.classList.contains('active')) {
            switch(e.key) {
                case 'Escape':
                    closeImageModal();
                    break;
                case 'ArrowLeft':
                    e.preventDefault();
                    previousImage();
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    nextImage();
                    break;
            }
        }
    });
    
    // Add click event listeners to gallery images
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('gallery-image')) {
            const imageItem = e.target.closest('.image-item');
            const imageIndex = parseInt(imageItem.getAttribute('data-image-index'));
            const processType = imageItem.getAttribute('data-process-type');
            openImageModal(imageIndex, processType);
        }
    });
});

// Add image error handling
document.addEventListener('DOMContentLoaded', () => {
    // Add error handling to all images
    document.addEventListener('error', (e) => {
        if (e.target.tagName === 'IMG') {
            handleImageError(e.target);
        }
    }, true);
});

// Video Modal functionality
function openVideoModal(videoSrc, title, description) {
    const modal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    const videoTitle = document.getElementById('videoTitle');
    const videoDescription = document.getElementById('videoDescription');
    
    // Set video source
    modalVideo.src = videoSrc;
    modalVideo.load(); // Reload the video element
    
    // Set video info
    videoTitle.textContent = title;
    videoDescription.textContent = description;
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
    const modal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    
    // Pause video when closing modal
    modalVideo.pause();
    modalVideo.currentTime = 0;
    
    // Hide modal
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Add event listeners for video modal
document.addEventListener('DOMContentLoaded', () => {
    const videoModal = document.getElementById('videoModal');
    const videoModalClose = document.getElementById('videoModalClose');
    const videoModalOverlay = document.getElementById('videoModalOverlay');
    
    // Close modal events
    videoModalClose.addEventListener('click', closeVideoModal);
    videoModalOverlay.addEventListener('click', closeVideoModal);
    
    // Keyboard navigation for video modal
    document.addEventListener('keydown', (e) => {
        if (videoModal.classList.contains('active')) {
            if (e.key === 'Escape') {
                closeVideoModal();
            }
        }
    });
});

// Export functions for potential external use
window.FacilitaPje = {
    showSection,
    showNotification,
    addLoadingState,
    removeLoadingState,
    switchProcessType,
    loadImagesForProcessType,
    openVideoModal,
    closeVideoModal
};

