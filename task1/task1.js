// script.js

window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');

    // Check if the page is scrolled more than 50px
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
