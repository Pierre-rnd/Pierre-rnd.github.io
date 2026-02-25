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

const nav = document.querySelector('nav');
const navUl = nav.querySelector('ul');

const burger = document.createElement('div');
burger.classList.add('burger');
burger.innerHTML = '&#9776;';
nav.appendChild(burger);

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