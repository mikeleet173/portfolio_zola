// Theme handling
const themeToggle = document.querySelector('.theme-toggle');
const htmlElement = document.documentElement;
const themeIcon = themeToggle.querySelector('i');

// Get theme from localStorage or system preference
const getPreferredTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

// Set theme
const setTheme = (theme) => {
    htmlElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateThemeIcon(theme);
};

// Update theme icon
const updateThemeIcon = (theme) => {
    themeIcon.className = theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
};

// Initialize theme
setTheme(getPreferredTheme());

// Theme toggle click handler
themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
});

// Navbar scroll handling
const navbar = document.querySelector('.navbar');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    
    // Show/hide navbar based on scroll direction
    if (currentScrollY > lastScrollY) {
        navbar.classList.add('hidden');
    } else {
        navbar.classList.remove('hidden');
    }
    
    lastScrollY = currentScrollY;
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Initialize skill bars animation
const observeSkillBars = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillLevel = entry.target;
                const width = skillLevel.getAttribute('data-level');
                skillLevel.style.width = width + '%';
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.skill-level').forEach(skillLevel => {
        observer.observe(skillLevel);
    });
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    observeSkillBars();
});
