const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    observer.observe(section);
});

const navUl = document.querySelector('nav ul');
const burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
    navUl.classList.toggle('show');
});

const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0 20px 40px rgba(56,189,248,0.4)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
        card.style.boxShadow = '';
    });
});

const text = ["Développeur Web", "Développeur Python", "Recherche alternance 2026"];
let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {
    const typingElement = document.getElementById("typing");

    if (index >= text.length) index = 0;

    if (!isDeleting) {
        currentText = text[index].substring(0, charIndex++);
    } else {
        currentText = text[index].substring(0, charIndex--);
    }

    typingElement.textContent = currentText;

    if (!isDeleting && charIndex === text[index].length + 1) {
        isDeleting = true;
        setTimeout(typeEffect, 1000);
        return;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index++;
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();