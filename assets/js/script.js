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
    const captions = ["Front End Developer", "System Administrator", "UI/UX Designer"];
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
var typing = new Typed (".typing", {
    strings: ["Front End Developer", "UI/UX Designer", "Sysadmin", "Video Editor", "Data Scientist"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,
    showCursor: false,
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

// Hire Me
document.addEventListener('DOMContentLoaded', function() {
    // Select all "Hire Me" buttons
    const hireButtons = document.querySelectorAll('.hire-me-btn');

    // Add click event listeners to each button
    hireButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default button behavior

            // Get the subject and message from data attributes
            const subject = this.getAttribute('data-subject');
            const message = this.getAttribute('data-message');

            // Set the subject and message in localStorage
            localStorage.setItem('hireSubject', subject);
            localStorage.setItem('hireMessage', message);

            // Redirect to contact.html after setting subject and message
            window.location.href = 'contact.html';
        });
    });
});

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

  
