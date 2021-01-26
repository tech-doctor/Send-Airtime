
const menuIcon = document.getElementById("bars-icon");
const mobileSidebar = document.querySelector(".mobile-sidebar");
const fixedSidebar = document.querySelector('.fixed-sidebar')
//const fixedSidebar = document.querySelector('.fixed-sidebar');

///////////////MOBILE SIDEBAR TOGGLE/////////////////////////////////
document.addEventListener('click', (e) => {
    if(menuIcon.contains(e.target)) {
      mobileSidebar.style.display = 'block';
    } else if(mobileSidebar.contains(e.target)) {
      mobileSidebar.style.display = 'block';
    } else{
      mobileSidebar.style.display = 'none';
    }   
})


/////////////////////////////////ROUTE CHANGES///////////////////////////////////////
const  sideClick = document.querySelectorAll(".sidebar-content p");
sideClick.forEach(sideClick => {
  sideClick.addEventListener('click', (e)=> {
    const active = document.querySelectorAll('.active');
    active.forEach(active => {
      if(active) {
        active.classList.remove('active');
      }
      e.target.classList.add('active');
    })
    const display = document.querySelectorAll('.display')
    display.forEach(display => {
      if(display.getAttribute('data-number') === sideClick.getAttribute('data-number')){
        display.style.display = "block"
      }
      else{
        display.style.display = 'none';
      }
    })

  })
})


const sideName =  document.querySelectorAll('.sidebar-content .name')
//sideName.innerHTML = auth.currentUser.displayName
auth.onAuthStateChanged(user =>{
  //console.log(user.displayName)
  const name = user.displayName
  let lastName = name.split(' ').slice(-1).join(' ')
  sideName.forEach( sideName => {
    sideName.innerHTML = `<i class="fas fa-user side-icon"></i>${lastName}`
  })
  

})





///////////////////////////////////////////////////////////////////////////A D D  C U S T O M E R/////////////////////////////////////////////////////////////////////////
import Profile from './Modules/Profile.js'
import addCustomer from './Modules/Add-customer.js'
import Wallet from  './Modules/Wallet.js'
import Dashboard from  './Modules/Dashboard.js'
//import authFunction from '../Airtime.js'

  Profile()

  addCustomer()

//////////////////////////////////////////////////////////////////////W A L L E T////////////////////////////////////////////////////////////////////////

  Wallet()

//////////////////////////////////////////////////////////////////////D A S H B O A R D////////////////////////////////////////////////



  Dashboard()


// const data = {
//   Code: "airtel",
//   Amount: 200.0,
//   //transactionReference: 31673782,
//   //  firstName :"Oluka",
//   //  lastName: "Damilola",
//   //  email: "olukaizaac@gmail.com",
//   //  dateOfBirth: "1999-04-01",
//    //currency: "NGN",
//   //PhoneNumber: "2348716888767",
//   Password: "juivelsyntil4kw9fzwb",
//   PhoneNumber: "08129366772",
//   SecretKey: "hfucj5jatq8h",
//  }

// // const data = {
// //   phoneNumber: "08129366772",
// //  // SecretKey: "hfucj5jatq8h",
// //  SecretKey: "26l56ossefu2"
// // }

// //const url = "https://sandbox.wallets.africa/wallet/generate";
// //const url = "https://sandbox.wallets.africa/wallet/getuser";

// const url = "https://sandbox.wallets.africa/bills/airtime/purchase"
// //const url = "https://sandbox.wallets.africa/wallet/balance"
// //const url = "https://sandbox.wallets.africa/self/balance"