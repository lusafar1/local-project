document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.login-form');
    const signupForm = document.querySelector('.signup-form');
    const showSignupLink = document.getElementById('showSignup');
    const showLoginLink = document.getElementById('showLogin');
    const container = document.querySelector('.container');

    function toggleForm(formType) {
        if (formType === 'signup') {
            loginForm.style.display = 'none';
            signupForm.style.display = 'block';
            container.style.height = '600px';
        } else {
            signupForm.style.display = 'none';
            loginForm.style.display = 'block';
            container.style.height = '400px';
        }
    }

    showSignupLink.addEventListener('click', function(e) {
        e.preventDefault();
        toggleForm('signup');
    });

    showLoginLink.addEventListener('click', function(e) {
        e.preventDefault();
        toggleForm('login');
    });

    // Signup functionality
    const signupFormElement = document.getElementById('signupForm');
    signupFormElement.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const password = this.querySelector('input[type="password"]').value;

        // Store user data in local storage
        localStorage.setItem(email, JSON.stringify({ name, password }));
        alert('Sign up successful! Please log in.');
        toggleForm('login');
    });

    // Login functionality
    const loginFormElement = document.getElementById('loginForm');
    loginFormElement.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        const password = this.querySelector('input[type="password"]').value;

        // Check if user exists and password is correct
        const userData = JSON.parse(localStorage.getItem(email));
        if (userData && userData.password === password) {
            alert('Login successful!');
            // Redirect to the main site
            window.location.href = 'index.html';
        } else {
            alert('Invalid email or password');
        }
    });

    // Add active class to input groups on focus and blur
    document.querySelectorAll('.input-group input').forEach(input => {
        input.addEventListener('focus', () => {
            input.closest('.input-group').classList.add('active');
        });
        input.addEventListener('blur', () => {
            if (input.value === '') {
                input.closest('.input-group').classList.remove('active');
            }
        });
    });

    console.log('Script loaded and running');
});