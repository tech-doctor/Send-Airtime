// const passwordInput = document.getElementById('password-input');
// const confirmPassword = document.getElementById('confirm-input');
const passwordInput = document.querySelectorAll('.password-input')
const errorMessage = document.getElementById('error-message');
const Button = document.getElementById("sign-up");
const checkBox = document.getElementById('check');
const togglePassword = document.querySelectorAll("#toggle-password")
//const faEye = document.querySelector(".fa-eye");

 for(let i = 0; i < togglePassword.length; i++){
    togglePassword[i].addEventListener('click', () => {
        togglePassword[i].classList.toggle('fa-eye-slash');
        const type = passwordInput[i].getAttribute('type') ==='password' ? 'text' : 'password';
        passwordInput[i].setAttribute('type', type);   
    })
    
 }

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

///////////////////AUTHTENTICATION///////////////////////////
const app = firebase.app()
console.log(app)

const auth = firebase.auth();
console.log(auth)

const db = firebase.firestore();
//console.log(db)


//update firestore settings 
db.settings({ timestampsInSnapshots: true});


function googleLogin() {
   const provider = new firebase.auth.GoogleAuthProvider();
   firebase.auth().signInWithPopup(provider)
  .then(result => {
    console.log(result)
  })
  .catch(console.log)
 }

 const googleButton = document.querySelector('#google')

 googleButton.addEventListener('click', (e) => {
     e.preventDefault()
     googleLogin()
 })


