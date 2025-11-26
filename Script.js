// --- 1. Typing Effect for Hero Section ---
const roles = [
    "Security Operation Center Analyst",
    "Certified Penetration Tester (CPT)",
    "VAPT Specialist",
    "SOC L1"
];
const typingSpan = document.querySelector(".typing");
let roleIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < roles[roleIndex].length) {
        typingSpan.textContent += roles[roleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 80); // Typing speed
    } else {
        setTimeout(erase, 1500); // Pause before erasing
    }
}

function erase() {
    if (charIndex > 0) {
        typingSpan.textContent = roles[roleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50); // Erasing speed
    } else {
        roleIndex = (roleIndex + 1) % roles.length; // Move to next role
        setTimeout(type, 500); // Pause before typing next role
    }
}

// Start the typing sequence
document.addEventListener("DOMContentLoaded", () => {
    if (typingSpan) {
        type();
    }
});


// --- 2. Scroll Fade-in & Intersecting Observer (for fade-in-section class) ---
const faders = document.querySelectorAll(".fade-in-section, .fade-in");
const options = { threshold: 0.2 };

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, options);

faders.forEach(fader => appearOnScroll.observe(fader));


// --- 3. Dynamic Nav Underline & Active State (Matching Video) ---
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

// Margin to control when the line switches (e.g., 25% from top of the screen)
const optionsNav = {
    rootMargin: "-25% 0px -75% 0px" 
};

const sectionObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Remove 'active' from all links
            navLinks.forEach(link => link.classList.remove('active'));
            
            // Find the link corresponding to the current section and add 'active'
            const activeLink = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
}, optionsNav);

sections.forEach(section => {
    sectionObserver.observe(section);
});
