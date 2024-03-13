// Observador de intersección
const aboutMeSection = document.querySelector('.about-me-section');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view'); // para ver
        } else {
            entry.target.classList.remove('in-view'); //adios
        }
    });
});


observer.observe(aboutMeSection);
