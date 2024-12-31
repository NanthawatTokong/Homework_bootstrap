// Custom JS for Smooth Scrolling
document.addEventListener('DOMContentLoaded', function () {
    // Add smooth scroll to internal links
    const scrollLinks = document.querySelectorAll('a[href^="#"]');

    scrollLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Adjust scroll position
                behavior: 'smooth'
            });
        });
    });

    // Add a smooth scroll effect to the Navbar's search box
    const searchBox = document.querySelector('.navbar .form-control');
    searchBox.addEventListener('focus', function () {
        searchBox.style.borderColor = '#ffc107';
        searchBox.style.transition = 'border-color 0.3s ease';
    });

    searchBox.addEventListener('blur', function () {
        searchBox.style.borderColor = '#ccc';
    });
});
