
const passwordInput = document.querySelectorAll('.password-input')
const errorMessage = document.getElementById('error-message');
const signUpButton = document.getElementById("signup-button");
const checkBox = document.getElementById('check');
const togglePassword = document.querySelectorAll("#toggle-password")

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
//console.log(app)
const auth = firebase.auth();
//console.log(auth)
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

 const email = document.querySelector('#email')
 const success = document.querySelector('.signup-success')
 const validationError =document.querySelector('.validation-error')

 function formValidation(e)  {
    e.preventDefault();
   // passwordInput.forEach(password => {
         if(passwordInput[0].value === '' || passwordInput[1].value === '' || email.value === ''){
            passwordInput[0].style.border = 'thin solid red';
            passwordInput[1].style.border = 'thin solid red';
            email.style.border = 'thin solid red'
            validationError.innerHTML = 'Error! make sure all form feild is filled'
            validationError.style.display = 'block'
        }
        else if(!email.value.includes('@')){
            console.log('include')
            email.style.border = 'thin solid red'
            validationError.innerHTML = 'Enter a valid email address'
            validationError.style.display = 'block'
        }
        else if (passwordInput[0].value !== passwordInput[1].value) {
            
            passwordInput[0].style.border = 'thin solid red';
            passwordInput[1].style.border = 'thin solid red';
            errorMessage.style.display = 'inline';
            email.style.border = '1px solid black'
            validationError.style.display = 'none'
        }
        else {
            passwordInput[0].style.border = 'thin solid green';
            passwordInput[1].style.border = 'thin solid green';
            success.style.display = "block"
            email.style.border = 'thin solid green'
            errorMessage.style.display = 'none'
            validationError.style.display = 'none'

            console.log(email.value.length, passwordInput[0].value.length)
            setTimeout  (function() {
                success.style.display = "none"
            },3000)
            document.getElementById('signup-form').reset()    
        }    

    //})
    
}

signUpButton.addEventListener('click', formValidation);

    // signUpButton.addEventListener('click', (e) => {
    //     // e.preventDefault();
    //     if(passwordInput[0].value === passwordInput[1].value && ){
            
    //     }
    //     else{
    //         console.log('error')
    //     }
    // })

    // signUpButton.addEventListener('click', (e) => {
    //     e.preventDefault();

    //     switch( passwordInput[0].value !== '' && passwordInput[1].value !== '' && email.value !== ''){
    //         case passwordInput[0].value === passwordInput[1].value:
    //         //case passwordInput[0].value:
    //         success.style.display = "block"
    //         console.log(email.value, passwordInput[0].value)
    //         setTimeout  (function() {
    //             success.style.display = "none"
    //         },3000)
    //        //document.getElementById('signup-form').reset();
    //         break;
    //         default:
    //             console.log('error') 
                
    //     }
    // })


 


