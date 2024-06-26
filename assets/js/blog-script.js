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