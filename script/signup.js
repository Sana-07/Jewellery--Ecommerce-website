function validateSignup() {

    const usernameRegex = /^[a-zA-Z0-9]{3,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    
    const usernameField = document.getElementById('username');
    const emailField = document.getElementById('email');
    const passwordField = document.getElementById('password');

    const username = usernameField.value;
    const email = emailField.value;
    const password = passwordField.value;

    
    if (!usernameRegex.test(username)) {
        usernameField.classList.add('is-invalid');
        usernameField.classList.remove('is-valid');
    } else {
        usernameField.classList.add('is-valid');
        usernameField.classList.remove('is-invalid');
    }

    if (!emailRegex.test(email)) {
        emailField.classList.add('is-invalid');
        emailField.classList.remove('is-valid');
    } else {
        emailField.classList.add('is-valid');
        emailField.classList.remove('is-invalid');
    }

    if (!passwordRegex.test(password)) {
        passwordField.classList.add('is-invalid');
        passwordField.classList.remove('is-valid');
    } else {
        passwordField.classList.add('is-valid');
        passwordField.classList.remove('is-invalid');
    }

    
    if (usernameField.classList.contains('is-valid') && emailField.classList.contains('is-valid') && passwordField.classList.contains('is-valid')) {
        
        const user = {
            username,
            email,
            password
        };
        localStorage.setItem('user', JSON.stringify(user));

    
        window.location.href = 'login.html';
    } else {
        document.getElementById('error-message').innerText = 'Please check your details.';
    }
}