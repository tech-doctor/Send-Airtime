const menuIcon = document.getElementById("icon");
const sideMenu = document.querySelector(".side-menu");
const closeMenu = document.getElementById("close-menu")
const overlay = document.querySelector('.overlay')
const form = document.querySelector('.form')
//const navLink = document.querySelectorAll('.nav-content')

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

const togglePassword = document.querySelector("#toggle-password")
const passwordInput = document.querySelector('.password-space');

togglePassword.addEventListener('click', function(e) {
	const type = passwordInput.getAttribute('type') ==='password' ? 'text' : 'password';
	passwordInput.setAttribute('type', type);
	this.classList.toggle('fa-eye-slash');
})


/////////////////////////////////////////////////////////////////FIREBASE////////////////////////////////////////////////////////////////////
const loggedInLinks = document.querySelectorAll('.logged-in')
const loggedOutLinks = document.querySelectorAll('.logged-out')


// what should happen on authentication
auth.onAuthStateChanged(user =>{
//	console.log(user)
	if (user) {	 
	//	setUp(user)
	}
	else{
		// loginstatus.innerHTML = "Account not verified"
		// loginstatus.style.backgroundColor = "#DC143C"
		// loginstatus.style.padding = '1em'
		// loginstatus.style.fontSize = '15px'
	//	setUp()
	}
})


//setup UI function on  auth changes

// const setUp = (user) => {
// 	 if(user){
// 		 loggedInLinks.forEach(item => {item.style.display = "inline"})
// 		 loggedOutLinks.forEach(item => {item.style.display = "none"})
// 	 }
// 	 else{
// 		loggedOutLinks.forEach(item => {item.style.display = "inline"})
// 	    loggedInLinks.forEach(item => {item.style.display = "none"})	
// 	 }
// }



const logoutButton = document.querySelectorAll('#logout-button')
 //closing display after 3seconds
 const timeOut = () => {
	setTimeout  (() => {
		loginStatus.style.display = "none"
  },3000)	 
}


 // logIn user 
const logInForm = document.querySelector('#loginForm')
const loginStatus = document.querySelector('.body .login-status')
const loginError = document.querySelector('.form .login-error p')

logInForm.addEventListener('submit', (e) => {
	e.preventDefault()
	const email = logInForm['email'].value;
  const password = logInForm['password'].value;
  loginFunction(email, password)	
})

//login validation
const  loginFunction = (email, password) => {
	auth.signInWithEmailAndPassword(email, password)
	.then(cred => {
		console.log(cred)
		modal.style.display= 'none'
		overlay.style.display = 'none'
		logInForm.reset()
		loginStatus.innerHTML = `<p><i class="fas fa-check-circle"></i>Login Successful</p>`
		loginStatus.style.backgroundColor = 'green'
		// loginStatus.style.fontSize = '18px'
		loginStatus.style.display ="block"
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


///what should be displayed when the users logged out.
const logoutStatus = document.querySelector('.body .logout-status')
const logOut  = () =>{
	auth.signOut().then(cred => {
		loginStatus.innerHTML = "You've logged out successfully"
		loginStatus.style.display = 'block'
		loginStatus.style.backgroundColor = 'black'
		loginStatus.style.fontSize = '15px'
		loginStatus.style.padding = '1em'
		timeOut()
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




const data = {
    // "Code": "airtel",
    // "Amount": 100,
    // "PhoneNumber": "08129366772",
	"Currency": "NGN",
    "SecretKey": "hfucj5jatq8h",
	}
 


 
  //const url = "https://sandbox.wallets.africa/bills/airtime/purchase"
  const url = "https://sandbox.wallets.africa/self/balance"
  const publicKey = "uvjqzm5xl6bw";
	const proxy = "https://mighty-island-92084.herokuapp.com/"
	const headers = {
		'Content-Type' : 'application/json',
		'Authorization': `Bearer ${publicKey}`
		}

	fetch(proxy +  url, {
    method: "POST",
    headers: headers,
    body : JSON.stringify(data),
	})


  .then(result => result.json())
  .then(resp => console.log(resp))
  .catch(err => console.log('Error :', err))