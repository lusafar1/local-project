document.addEventListener('DOMContentLoaded', function() {
    const logoutBtn = document.getElementById('logoutBtn');

    logoutBtn.addEventListener('click', function(e) {
        e.preventDefault();
        // Clear any user-related data from localStorage
        localStorage.removeItem('currentUser');
        // Redirect to the login page
        window.location.href = 'login.html';
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});