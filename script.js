// Optional: Add some basic JS interaction for your landing page
document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM loaded");
    // Add basic scroll to anchor functionality for the navigation
   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

});