document.addEventListener("DOMContentLoaded", function() {
    console.log("Website loaded successfully!");

    const saveButton = document.getElementById("save-button");

    // Load saved data from localStorage
    document.querySelectorAll(".editable-section textarea").forEach(textarea => {
        const id = textarea.id;
        textarea.value = localStorage.getItem(id) || "";
    });

    // Save text input to localStorage
    saveButton.addEventListener("click", function() {
        document.querySelectorAll(".editable-section textarea").forEach(textarea => {
            const id = textarea.id;
            localStorage.setItem(id, textarea.value);
        });
        alert("Your data has been saved!");
    });

    // Smooth scrolling for navigation
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
});
