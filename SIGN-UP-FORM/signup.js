const passwordInput = document.querySelectorAll('.password-input')
const errorMessage = document.getElementById('error-message');
const signUpButton = document.getElementById("signup-button");
const checkBox = document.getElementById('check');
const togglePassword = document.querySelectorAll("#toggle-password")
const email = document.querySelector('#email')

for(let i = 0; i < togglePassword.length; i++){
  togglePassword[i].addEventListener('click', () => {
    togglePassword[i].classList.toggle('fa-eye-slash');
    const type = passwordInput[i].getAttribute('type') ==='password' ? 'text' : 'password';
    passwordInput[i].setAttribute('type', type);   
  })   
}

checkBox.onchange =  function()  {
  signUpButton.disabled = !this.checked;
  if (!signUpButton.disabled){
    signUpButton.style.cursor = 'pointer'
  } else{
    signUpButton.style.cursor = 'not-allowed'
  }
};


///////////////////AUTHTENTICATION///////////////////////////
const app = firebase.app()
console.log(app)
const auth = firebase.auth();
console.log(auth)
const db = firebase.firestore();
//console.log(db)

//update firestore settings 
db.settings({ timestampsInSnapshots: true});

const googleLogin = () => {
   const provider = new firebase.auth.GoogleAuthProvider();
   firebase.auth().signInWithPopup(provider)
  .then(result => {
    console.log(result.user)
  })
  .catch(console.log)
 }


 const success = document.querySelector('.signup-success')
 const validationError =document.querySelector('.validation-error')

 const  getValue = () => {
  emailValue = email.value;
  passwordValue = passwordInput[0].value;
  confirmPasswordValue = passwordInput[1].value;
   return  {
     emailValue, passwordValue , confirmPasswordValue
   }
 }
 
 const redBorder = () =>{
  passwordInput[0].style.border = 'thin solid red';
  passwordInput[1].style.border = 'thin solid red';

 }



 function formValidation(e)  {
  e.preventDefault();
    if(passwordInput[0].value === '' || passwordInput[1].value === '' || email.value === ''){
    redBorder()
    email.style.border = 'thin solid red'
    validationError.innerHTML = 'Error! make sure all form feild is filled'
    validationError.style.display = 'block'
  }
  else if(!email.value.includes('@')){
    email.style.border = 'thin solid red'
    validationError.innerHTML = 'Enter a valid email address'
    validationError.style.display = 'block'
  }
  else if (passwordInput[0].value !== passwordInput[1].value) {
    redBorder()
    errorMessage.style.display = 'inline';
    email.style.border = '1px solid black'
    validationError.style.display = 'none'
  }
  else {
    getValue()
    signupUser()
    document.getElementById('signup-form').reset()  
  }    
}

const changeValue = () => {
 const character = document.querySelector('.character')
  if(passwordInput[0].value.length < 6 || passwordInput[0].value.length > 12){
    character.style.opacity = "1"
  }
  else{
     character.style.opacity = "0.3"  
  } 
}

const verifyAccount = document.querySelector('.verify-account')
const verificationMessage = document.querySelector('.verify-account .message')
const signupError = document.querySelector('.signup-error p');

//sign up the user
const signupUser = () => {
  console.log(emailValue, passwordValue)
  auth.createUserWithEmailAndPassword(emailValue, passwordValue)
  .then(cred =>{
    console.log(cred)
    if(cred.user.emailVerified){
      passwordInput[0].style.border = 'thin solid green';
      passwordInput[1].style.border = 'thin solid green';
      email.style.border = 'thin solid green'
      success.style.display = "block"
      errorMessage.style.display = 'none'
      validationError.style.display = 'none'
      setTimeout  (function() {
          success.style.display = "none"
      },3000)
    } else{
      verifyAccount.style.display = 'block'
      verificationMessage.innerHTML = `You're welcome <span> ${cred.user.email} </span> .<br>Your account has'nt been verified`  
    }  
  })

  .catch(error => {
    console.log(error)
    signupError.style.display = 'block'
    signupError.innerHTML = `${error.message} !`
    redBorder()
    email.style.border = 'thin solid red'
    setTimeout  (function() {
      signupError.style.display = "none"
  },3000)
   

  })
}

const verify = () => {
  //Access the current user/ last signed in from the auth data
 const  currentUser = auth.currentUser
 currentUser.sendEmailVerification() .then(function(){
 alert('Verification sent, check your email for the verification process')
 verifyAccount.style.display = 'none'
 })
 .catch(function(error){
 })  
}




signUpButton.addEventListener('click', formValidation);


// 
function goBack(){
    window.history.back();
}