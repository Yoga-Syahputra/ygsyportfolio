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

// Popup
document.addEventListener('DOMContentLoaded', (event) => {
    const captions = ["Frontend Developer", "System Administrator", "CompSci Student", "English Coach"];
    let currentCaption = 0;
    const captionElement = document.getElementById('caption');

    function showCaption() {
        captionElement.textContent = captions[currentCaption];
        captionElement.classList.add('show');

        setTimeout(() => {
            captionElement.classList.remove('show');
            currentCaption = (currentCaption + 1) % captions.length;
            setTimeout(showCaption, 1000); // Adjust pause time between captions here
        }, 3000); // Adjust display time for each caption here
    }

    showCaption();

    // Add the animate class to the copy element
    const copyElement = document.querySelector('.copy');
    copyElement.classList.add('animate');
});


// Typewriter effect
document.addEventListener('DOMContentLoaded', (event) => {
    const captions = ["Frontend Developer", "System Administrator", "CompSci Student", "English Coach"];
    let currentCaption = 0;
    const typewriterElement = document.getElementById('typewriter');

    function typeWriterEffect() {
        let caption = captions[currentCaption];
        let index = 0;
        typewriterElement.textContent = '';

        function type() {
            if (index < caption.length) {
                typewriterElement.textContent += caption.charAt(index);
                index++;
                setTimeout(type, 100); // Adjust typing speed here
            } else {
                setTimeout(() => {
                    currentCaption = (currentCaption + 1) % captions.length;
                    typeWriterEffect();
                }, 5000); // Adjust pause time after typing here
            }
        }

        type();
    }

    typeWriterEffect();
});

// Avatar
document.addEventListener('DOMContentLoaded', function() {
    // Select the avatar container element
    const avatarContainer = document.querySelector('.avatar-container');

    // Add a class to show the avatar after animation
    avatarContainer.classList.add('avatar-show');
});

// Hide Scroll Down Button
document.addEventListener('DOMContentLoaded', (event) => {
    const scrollDownButton = document.querySelector('.scroll-down-button');
    const aboutSection = document.getElementById('about');

    let isScrollingUp = false; // Track scrolling direction
    let isScrollingDown = false; // Track scrolling direction

    function checkScroll() {
        const rect = aboutSection.getBoundingClientRect();
        const currentScrollPosition = window.scrollY;

        // Show button if scrolling up or at the top of the page
        if (currentScrollPosition < lastScrollPosition || currentScrollPosition === 0) {
            isScrollingUp = true;
            isScrollingDown = false;
        } else {
            isScrollingUp = false;
            isScrollingDown = true;
        }

        // Hide button if about section is in view or scrolling down
        if (rect.top <= window.innerHeight && isScrollingDown) {
            scrollDownButton.classList.add('hidden');
        } else {
            scrollDownButton.classList.remove('hidden');
        }

        lastScrollPosition = currentScrollPosition;
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Initial check in case the page is loaded in the middle
});

//Smooth Scroll
document.addEventListener('DOMContentLoaded', function() {
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});




