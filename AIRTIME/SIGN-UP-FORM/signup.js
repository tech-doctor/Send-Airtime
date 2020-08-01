const passwordInput = document.getElementById('password-input');
const confirmPassword = document.getElementById('confirm-input');
const errorMessage = document.getElementById('error-message');
const Button = document.getElementById("sign-up");
const checkBox = document.getElementById('check');
const togglePassword = document.querySelector("#toggle-password")
const faEye = document.querySelector(".fa-eye");

togglePassword.addEventListener('click', function(e) {
    const type = passwordInput.getAttribute('type') ==='password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
})


passwordInput.addEventListener('input', ($event) => {
    if ($event.target.value.length >= 6 && $event.target.value.length <= 12) {
        
    }
    else{
        
    }
})



checkBox.onchange =  function()  {
    Button.disabled = !this.checked;
};


Button.addEventListener('click', () => {
    if (passwordInput.value === confirmPassword.value) {
        passwordInput.style.border = 'thin solid green';
        faEye.style.border = 'thin solid green';
        confirmPassword.style.border = 'thin solid green';
        errorMessage.style.display = 'none';
    }
    else {
        passwordInput.style.border = 'thin solid red';
        faEye.style.border = ' thin solid red'
        confirmPassword.style.border = 'thin solid red';
        errorMessage.style.display = 'inline';
        errorMessage.style.color = 'red';
        errorMessage.style.position ='center';
        
        
    }
});


