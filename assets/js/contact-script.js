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

// Function to handle form submission and display modals
// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Select the contact form
    const contactForm = document.getElementById('contact-form');

    // Add submit event listener to the form
    contactForm.addEventListener('submit', function(event) {
        // Prevent the default form submission
        event.preventDefault();

        // Serialize form data into JSON format
        const formData = new FormData(contactForm);
        const jsonData = {};
        formData.forEach((value, key) => { jsonData[key] = value });

        // Send AJAX request
        fetch('/assets/form/contact.php', {
            method: 'POST',
            body: JSON.stringify(jsonData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            // Check the status of the response
            if (data.status === 'success') {
                // Show success modal
                $('#successModal').modal('show');
                // Clear the form
                contactForm.reset();
            } else {
                // Show error modal
                $('#errorModal').modal('show');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            // Show error modal
            $('#errorModal').modal('show');
        });
    });
});

//Hire Me
document.addEventListener('DOMContentLoaded', function() {
    // Retrieve subject and message from localStorage
    const subject = localStorage.getItem('hireSubject');
    const message = localStorage.getItem('hireMessage');

    // Populate form fields if values exist
    if (subject && message) {
        document.getElementById('subject').value = subject;
        document.getElementById('message').value = message;

        // Clear localStorage after populating the fields
        localStorage.removeItem('hireSubject');
        localStorage.removeItem('hireMessage');
    }
});