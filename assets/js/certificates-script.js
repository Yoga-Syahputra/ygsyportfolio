/*Navbar*/
// Select the navbar element
const navbar = document.querySelector('.navbar');

// Function to toggle navbar background color on scroll
function toggleNavbarBackground() {
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
}

// Event listener for scroll event
window.addEventListener('scroll', toggleNavbarBackground);

// Scroll to top
document.addEventListener("DOMContentLoaded", function() {
    const progress = document.getElementById("progress");
    const progressValue = document.getElementById("progress-value");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 100) {
            progress.classList.add("show");
        } else {
            progress.classList.remove("show");
        }

        // Hide button when bottom of the page is reached
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            progress.classList.remove("show");
        }
    });

    progress.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});