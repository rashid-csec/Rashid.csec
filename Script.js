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
        setTimeout(type, 80); 
    } else {
        setTimeout(erase, 1500); 
    }
}

function erase() {
    if (charIndex > 0) {
        typingSpan.textContent = roles[roleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50); 
    } else {
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(type, 500);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (typingSpan) {
        type();
    }
});


// --- 2. Scroll Fade-in Using IntersectionObserver ---
const faders = document.querySelectorAll(".fade-in-section, .fade-in");

const fadeOptions = {
    threshold: 0.2
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, fadeOptions);

faders.forEach(fader => appearOnScroll.observe(fader));


// --- 3. Dynamic Nav Highlight on Scroll ---
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

const optionsNav = {
    rootMargin: "-25% 0px -75% 0px"
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => link.classList.remove("active"));

            const activeLink = document.qu
