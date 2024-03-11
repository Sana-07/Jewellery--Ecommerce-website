function validateLogin() {
        
    const storedUser = JSON.parse(localStorage.getItem('user'));


    const loginUsername = document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;

    
    if (storedUser && storedUser.username === loginUsername && storedUser.password === loginPassword) {
    
        window.location.href = './cart.html';
    } else {
        document.getElementById('login-error-message').innerText = 'Please try again.';
    }
}
