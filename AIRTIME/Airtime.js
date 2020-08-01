const menuIcon = document.getElementById("icon");
const sideMenu = document.querySelector(".side-menu");
const closeMenu = document.getElementById("close-menu")
const wholePage = document.querySelector(".page")

menuIcon.addEventListener("click", () =>{
    sideMenu.style.width = '100%';
})

closeMenu.addEventListener("click", () =>{
    sideMenu.style.width  = '0';
})



/////////////////////////////////////////////////////////////////MODAL ASPECT////////////////////////////////////////////////////////////////////

const modal = document.querySelector(".modal");
const button =  document.getElementsByTagName('button');

button[0].addEventListener('click', ()=> {
    modal.style.display= 'block'
    wholePage.style.opacity ='0.4';
})


button[2].addEventListener('click', ()=> {
    modal.style.display= 'block'
    wholePage.style.opacity ='0.4';
})



//window.onclick = (event) => {
    //if(event.target == modal) {
        //debugger;
       // console.log(event.target);
       // modal.style.display = "none"
    //}

//}


//////////////////////////////////////////////////LOGIN FORM//////////////////////////////////////////////////////////////////////////

const Delete = document.querySelector(".delete");
const Form = document.querySelector(".form");
const togglePassword = document.querySelector("#toggle-password")
const passwordInput = document.querySelector('.password-space');

togglePassword.addEventListener('click', function(e) {
    const type = passwordInput.getAttribute('type') ==='password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
})

Delete.addEventListener ('click', () => {
    console.log('yea');
    modal.style.display = 'none';
    wholePage.style.opacity ='1';
});




/////////////////////////////////////////////////////////////////SIDE MODAL ASPECT////////////////////////////////////////////////////////////////////
