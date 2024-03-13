const aboutMeSection = document.querySelector('.about-me-section');
const fadeInElements = document.querySelectorAll('.fade-in');

const options = {
    rootMargin: '0px',
    threshold: 0.5 // La animación se activará cuando la mitad del elemento esté visible
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, options);

fadeInElements.forEach(element => {
    observer.observe(element);
});
