// const passwordInput = document.getElementById('password-input');
// const confirmPassword = document.getElementById('confirm-input');
const passwordInput = document.querySelectorAll('#password-input')
const errorMessage = document.getElementById('error-message');
const Button = document.getElementById("sign-up");
const checkBox = document.getElementById('check');
const togglePassword = document.querySelectorAll("#toggle-password")
const faEye = document.querySelector(".fa-eye");


function Callback() {
    passwordInput.forEach(passwordResult => {
    const type = passwordResult.getAttribute('type') ==='password' ? 'text' : 'password';
    passwordResult.setAttribute('type', type);
    return passwordResult
    
})  
this.classList.toggle('fa-eye-slash');

}



togglePassword.forEach(toggle => {
toggle.addEventListener('click', Callback)
})


checkBox.onchange =  function()  {
    Button.disabled = !this.checked;
    if (!Button.disabled){
        Button.style.cursor = 'pointer'
    } else{
        Button.style.cursor = 'not-allowed'
    }
 
};


function errorSubmit(e)  {
    e.preventDefault();
    if (passwordInput[0].value === passwordInput[1].value) {
        passwordInput[0].style.border = 'thin solid green';
        passwordInput[1].style.border = 'thin solid green';
        // passwordResult.style.border = 'thin solid green';
        errorMessage.style.display = 'none';
    }
    else {
        passwordInput[0].style.border = 'thin solid red';
        passwordInput[1].style.border = 'thin solid red';
        errorMessage.style.display = 'inline';
        errorMessage.style.color = 'red';
        errorMessage.style.position ='center';
    }
    
}



Button.addEventListener('click', errorSubmit);


