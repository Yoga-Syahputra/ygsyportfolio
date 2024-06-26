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