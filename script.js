document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        var welcome = document.getElementById('welcome');
        welcome.style.transform = 'translateX(-100%)';
        welcome.style.opacity = '0';
        setTimeout(function() {
            window.location.href = 'home.html'; // Redirect to home page after transition
        }, 1000); // Match this duration with the CSS transition duration
    }, 5000); // 7 seconds delay
});
