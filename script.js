document.addEventListener("DOMContentLoaded", function() {
    console.log("Website loaded successfully!");

    // Smooth scrolling for all navbar links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: "smooth"
            });
        });
    });

    // Handle form submission (Example: Console Log)
    document.getElementById("contact-form").addEventListener("submit", function(e) {
        e.preventDefault();
        console.log("Form submitted!");
        alert("Thank you! Your message has been sent.");
        this.reset();
    });
});
