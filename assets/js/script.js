// Download CV Function
function downloadCV() {
    // Create a temporary link element
    const link = document.createElement('a');
    
    // Get the current page content as HTML
    const cvContent = document.documentElement.outerHTML;
    
    // Create a blob with the content
    const blob = new Blob([cvContent], { type: 'text/html' });
    
    // Set the download attributes
    link.href = URL.createObjectURL(blob);
    link.download = 'CV_Hudhany_Athallah_Karim.html';
    
    // Trigger the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Clean up
    URL.revokeObjectURL(link.href);
    
    // Show success message
    showNotification('CV berhasil diunduh!', 'success');
}

// Print Function (backup for browsers that don't support window.print well)
function printCV() {
    window.print();
}

// Notification System with Liquid Glass Style
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add liquid glass styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: rgba(255, 255, 255, 0.25);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.18);
        border-radius: 10px;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
        color: ${type === 'success' ? '#2563eb' : '#111827'};
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Smooth scroll for internal links (if any navigation is added)
function smoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Enhanced hover effects for liquid glass elements
function addLiquidGlassEffects() {
    // Experience items
    const experienceItems = document.querySelectorAll('.experience-item');
    experienceItems.forEach(item => {
        item.addEventListener('mouseenter', (e) => {
            const rect = item.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            item.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.15))`;
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.background = '';
        });
    });
    
    // Project items
    const projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach(item => {
        item.addEventListener('mouseenter', (e) => {
            const rect = item.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            item.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.15))`;
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.background = '';
        });
    });
    
    // Skill categories
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach(category => {
        category.addEventListener('mouseenter', (e) => {
            const rect = category.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            category.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.15))`;
        });
        
        category.addEventListener('mouseleave', () => {
            category.style.background = '';
        });
    });
    
    // Sidebar sections
    const sidebarSections = document.querySelectorAll('.sidebar-section');
    sidebarSections.forEach(section => {
        section.addEventListener('mouseenter', (e) => {
            const rect = section.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            section.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.15))`;
        });
        
        section.addEventListener('mouseleave', () => {
            section.style.background = '';
        });
    });
}

// Animate skill bars with liquid glass effect
function animateSkillBars() {
    const levelBars = document.querySelectorAll('.level-bar');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const width = bar.style.width;
                bar.style.width = '0';
                
                setTimeout(() => {
                    bar.style.width = width;
                    // Add glow effect
                    bar.style.boxShadow = '0 0 10px rgba(37, 99, 235, 0.5)';
                }, 200);
                
                observer.unobserve(bar);
            }
        });
    }, { threshold: 0.5 });
    
    levelBars.forEach(bar => {
        observer.observe(bar);
    });
}

// Add typing effect to name with liquid glass style
function typeWriter() {
    const nameElement = document.querySelector('.name');
    if (!nameElement) return;
    
    const originalText = nameElement.textContent;
    nameElement.textContent = '';
    
    let i = 0;
    const speed = 100; // typing speed in milliseconds
    
    function type() {
        if (i < originalText.length) {
            nameElement.textContent += originalText.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    // Start typing after page load
    setTimeout(type, 500);
}

// Enhanced copy to clipboard with liquid glass feedback
function addCopyToClipboard() {
    const contactItems = document.querySelectorAll('.contact-item');
    
    contactItems.forEach(item => {
        item.style.cursor = 'pointer';
        item.title = 'Klik untuk copy';
        
        item.addEventListener('click', () => {
            const text = item.querySelector('span').textContent;
            
            navigator.clipboard.writeText(text).then(() => {
                // Create ripple effect
                const ripple = document.createElement('div');
                ripple.style.cssText = `
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 20px;
                    height: 20px;
                    background: rgba(37, 99, 235, 0.3);
                    border-radius: 50%;
                    transform: translate(-50%, -50%) scale(0);
                    animation: ripple 0.6s ease-out;
                    pointer-events: none;
                `;
                
                item.style.position = 'relative';
                item.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
                
                showNotification('Tersalin ke clipboard!', 'success');
            }).catch(() => {
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = text;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                
                showNotification('Tersalin ke clipboard!', 'success');
            });
        });
    });
}

// Add keyboard shortcuts with liquid glass feedback
function addKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + P for print
        if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
            e.preventDefault();
            printCV();
            
            // Visual feedback
            const printBtn = document.querySelector('.print-btn');
            if (printBtn) {
                printBtn.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    printBtn.style.transform = '';
                }, 150);
            }
        }
        
        // Ctrl/Cmd + S for download
        if ((e.ctrlKey || e.metaKey) && e.key === 's') {
            e.preventDefault();
            downloadCV();
            
            // Visual feedback
            const downloadBtn = document.querySelector('.download-btn');
            if (downloadBtn) {
                downloadBtn.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    downloadBtn.style.transform = '';
                }, 150);
            }
        }
        
        // Escape to close notifications
        if (e.key === 'Escape') {
            const notifications = document.querySelectorAll('.notification');
            notifications.forEach(notification => {
                notification.style.transform = 'translateX(400px)';
                setTimeout(() => {
                    notification.remove();
                }, 300);
            });
        }
    });
}

// Add print preview functionality with liquid glass effect
function addPrintPreview() {
    const printBtn = document.querySelector('.print-btn');
    if (printBtn) {
        printBtn.addEventListener('click', () => {
            // Add print class to body for print-specific styles
            document.body.classList.add('printing');
            
            // Trigger print dialog
            window.print();
            
            // Remove print class after print dialog closes
            setTimeout(() => {
                document.body.classList.remove('printing');
            }, 1000);
        });
    }
}

// Parallax effect for background bubbles
function addParallaxEffect() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const bubbles = document.querySelectorAll('.floating-bubble');
        
        bubbles.forEach((bubble, index) => {
            const speed = 0.5 + (index * 0.1);
            bubble.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// Mouse move effect for header
function addHeaderMouseMoveEffect() {
    const header = document.querySelector('.header');
    if (!header) return;
    
    header.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const { offsetWidth, offsetHeight } = header;
        
        const x = (clientX - offsetWidth / 2) / offsetWidth;
        const y = (clientY - offsetHeight / 2) / offsetHeight;
        
        const profileImg = document.querySelector('.profile-image img');
        const imageDecoration = document.querySelector('.image-decoration');
        
        if (profileImg) {
            profileImg.style.transform = `translate(${x * 10}px, ${y * 10}px) scale(1.05)`;
        }
        
        if (imageDecoration) {
            imageDecoration.style.transform = `translate(${x * 20}px, ${y * 20}px) scale(1.1)`;
        }
    });
    
    header.addEventListener('mouseleave', () => {
        const profileImg = document.querySelector('.profile-image img');
        const imageDecoration = document.querySelector('.image-decoration');
        
        if (profileImg) {
            profileImg.style.transform = '';
        }
        if (imageDecoration) {
            imageDecoration.style.transform = '';
        }
    });
}

// Add CSS animation for ripple effect
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: translate(-50%, -50%) scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Video Controls
function addVideoControls() {
    const videos = document.querySelectorAll('.portfolio-video');
    const muteIcons = document.querySelectorAll('.portfolio-mute');
    
    videos.forEach((video, index) => {
        // Ensure video plays on mobile
        video.play().catch(e => {
            console.log('Autoplay prevented:', e);
        });
        
        // Add click to toggle mute/unmute
        const muteIcon = muteIcons[index];
        if (muteIcon) {
            muteIcon.addEventListener('click', (e) => {
                e.stopPropagation();
                video.muted = !video.muted;
                
                if (video.muted) {
                    muteIcon.className = 'fas fa-volume-mute portfolio-mute';
                } else {
                    muteIcon.className = 'fas fa-volume-up portfolio-mute';
                }
            });
        }
        
        // Pause on hover (optional)
        video.addEventListener('mouseenter', () => {
            video.pause();
        });
        
        video.addEventListener('mouseleave', () => {
            video.play();
        });
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all features
    smoothScroll();
    addLiquidGlassEffects();
    animateSkillBars();
    addCopyToClipboard();
    addKeyboardShortcuts();
    addPrintPreview();
    addParallaxEffect();
    addHeaderMouseMoveEffect();
    addVideoControls();
    
    // Optional: Uncomment to enable typing effect
    // typeWriter();
    
    // Add fade-in animation to sections with stagger
    const sections = document.querySelectorAll('.section, .sidebar-section');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, index * 100);
    });
    
    // Console welcome message
    console.log('%c📄 CV Liquid Glass - iOS Inspired Resume', 'color: #2563eb; font-size: 16px; font-weight: bold;');
    console.log('%cKeyboard shortcuts:', 'color: #374151; font-size: 12px; font-weight: 600;');
    console.log('%cCtrl/Cmd + P: Print CV', 'color: #6b7280; font-size: 11px;');
    console.log('%cCtrl/Cmd + S: Download CV', 'color: #6b7280; font-size: 11px;');
    console.log('%cClick contact info to copy', 'color: #6b7280; font-size: 11px;');
    console.log('%cClick mute icon to toggle video sound', 'color: #6b7280; font-size: 11px;');
    console.log('%cEnjoy the liquid glass effects! ✨', 'color: #f093fb; font-size: 11px;');
});

// Handle print events with liquid glass cleanup
window.addEventListener('beforeprint', () => {
    // Add any pre-print adjustments here
    document.body.classList.add('printing');
});

window.addEventListener('afterprint', () => {
    // Remove any post-print adjustments here
    document.body.classList.remove('printing');
});

// Handle window resize for responsive adjustments
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Add any resize-specific logic here
        console.log('Window resized - liquid glass effects adjusted');
    }, 250);
});

// Add loading state removal with liquid glass animation
window.addEventListener('load', () => {
    // Remove any loading indicators
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 300);
    }
    
    // Show ready state
    document.body.classList.add('ready');
    
    // Trigger entrance animation for CV container
    const cvContainer = document.querySelector('.cv-container');
    if (cvContainer) {
        cvContainer.style.animation = 'fadeInUp 0.8s ease-out';
    }
});
