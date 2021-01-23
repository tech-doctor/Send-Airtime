const menuIcon = document.getElementById("icon");
const sideMenu = document.querySelector(".side-menu");
const closeMenu = document.getElementById("close-menu")
const overlay = document.querySelector('.overlay')
const form = document.querySelector('.form')

menuIcon.addEventListener("click", () =>{
  sideMenu.style.width = '100%';
})
closeMenu.addEventListener("click", () =>{
  sideMenu.style.width  = '0';
})
/////////////////////////////////////////////////////////////////MODAL ASPECT////////////////////////////////////////////////////////////////////
const modal = document.querySelector(".modal");
const loginButton =  document.querySelectorAll('#login-button');

loginButton.forEach(loginButtonLoop =>{
	loginButtonLoop.addEventListener('click', () => {
		modal.style.display= 'block'
		overlay.style.display = 'block'
	})
})

document.addEventListener('click', (e) => { 
	if(loginButton[0].contains(e.target) ||  loginButton[1].contains(e.target)) {
		modal.style.display = 'block';
		overlay.style.display = 'block'
	} else if(form.contains(e.target)) {
		modal.style.display = 'block';
	} else{
		modal.style.display = 'none';
		overlay.style.display = 'none'
	}  
})


//////////////////////////////////////////////////LOGIN FORM//////////////////////////////////////////////////////////////////////////

//const Delete = document.querySelector(".delete");
//const Form = document.querySelector(".form");
const togglePassword = document.querySelector("#toggle-password")
const passwordInput = document.querySelector('.password-space');

togglePassword.addEventListener('click', function(e) {
	const type = passwordInput.getAttribute('type') ==='password' ? 'text' : 'password';
	passwordInput.setAttribute('type', type);
	this.classList.toggle('fa-eye-slash');
})


/////////////////////////////////////////////////////////////////FIREBASE////////////////////////////////////////////////////////////////////
const logoutButton = document.querySelectorAll('#logout-button')

//logOut users 
const logOut  = () =>{
	auth.signOut().then(cred => {
		if(auth.currentUser === null){
			console.log('user logged out')
			loginstatus.innerHTML = "You've logged out successfully"
			loginstatus.style.display = 'block'
			loginstatus.style.backgroundColor = 'black'
			loginstatus.style.padding = '1em'
			loginstatus.style.fontSize = '15px'
			timeOut()
		}
		else{	
  	}	
	})
	
}

 //closing display after 3seconds
 const timeOut = () => {
	setTimeout  (() => {
		loginstatus.style.display = "none"
  },3000)	 
}


 // logIn user 
const logInForm = document.querySelector('#loginForm')
const loginstatus = document.querySelector('.body .login-status')
const loginError = document.querySelector('.form .login-error p')

logInForm.addEventListener('submit', (e) => {
	e.preventDefault()
	const email = logInForm['email'].value;
  const password = logInForm['password'].value;
  loginFunction(email, password)	
})

const  loginFunction = (email, password) => {
	auth.signInWithEmailAndPassword(email, password)
	.then(cred => {
		console.log(cred)
		modal.style.display= 'none'
		logInForm.reset()
		loginstatus.style.display ="block"
	  timeOut()
	}).catch(error => {
		console.log(error)
		switch(error.code) {
			case "auth/user-not-found":
			loginError.innerHTML = "This user does not exit!"
				break;
			case  "auth/wrong-password":
				loginError.innerHTML = "invalid login details or password, please try again!"
				break;
			default:
				loginError.innerHTML = "something went wrong, please try again!"
		}
		  loginError.style.display = "block"
		
	})
}

//////Password Reset function

const resetPassword = () => {
		const emailValue = document.querySelector('#email').value
	console.log(emailValue)
	auth.sendPasswordResetEmail(emailValue).then(() => {
		alert('sent')
	}).catch(error => {
	    console.log(error)
	});	
}







