document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    if (name && email && message) {
        alert("Thank you for your message, " + name + "! We will get back to you soon.");
    } else {
        alert("Please fill out all fields before submitting.");
    }
});
{
function toggleContent(id) {
    let content = document.getElementById(id);
    let allContents = document.querySelectorAll('.content');
    allContents.forEach(el => {
        if (el.id !== id) el.style.display = 'none';
    });
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
}
document.addEventListener("DOMContentLoaded", function () {
    const fadeInElements = document.querySelectorAll('.fade-in');

    function fadeInOnScroll() {
        fadeInElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < window.innerHeight - 100) {
                element.style.opacity = "1";
                element.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener('scroll', fadeInOnScroll);
    fadeInOnScroll(); // Run on load
});