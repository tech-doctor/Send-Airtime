const Wallet = () =>{
   
 const mainView = document.querySelector('.main-view')

// }
// const getNumber =  () => {
//   db.collection('create').get().then((snapshot) => {
//     snapshot.forEach(doc => {
//       const PhoneNumber = doc.data().PhoneNumber;
//        updateWallet(PhoneNumber)
//     })  
  
// })
  
//}
console.log(db)

////////////////////////////wallet page content////////////////
  const  updateWallet = () => {
    const result = `
    <div class="flex-view">
      <div class="wallet-btn-div">
        <div class= "wallet-balance">
          <p class="heading">Wallet balance:</p>
          <div class="details">
            <p class="balance">#700.00</p>
            <p class = "currency">NGN.</p>
          </div>
        </div>
        <div class="button-div">
          <button class="create">Create Wallet</button>
          <button class="fund">Fund wallet</button>
        </div>
      </div>
      <div class="self-balance">
        <p class="heading">Bank balance:</p>
        <p class="details">
          <i class="fas fa-money-check-alt"></i>
          <br><br>Your  bank balance will be displayed here <br>once you create a wallet
        </p>
        
      </div>
    </div>	
    <div class="message-div">
      <p class="message"> After creating a wallet, a phone number would be generated here. The generated phone number will be required  for  funding your wallet.</p>
      <p class="phone-number"> Phone-number: <span id="wallet-number"> ${12} </span><i class="far fa-copy"> copy</i></p>
      </div> `  
    return result;
  }
 mainView.innerHTML += updateWallet()


  const createWalletButton = document.querySelector('.button-div .create');
  const fundWalletButton = document.querySelector('.button-div .fund');
  const modal = document.querySelectorAll('.modal');
  const closeModal = document.querySelectorAll('.close')

  /////////////////////////////////////////////////////////////open create wallet modal/////////////////////////////////////////////////
  createWalletButton.addEventListener( 'click', (event) =>{
  modal[1].style.display = 'block'
  })

  //////////////////////////////////////////////////open fund wallet modal///////////////////////////////////////////////////////
  fundWalletButton.addEventListener( 'click', (event) => {
  modal[0].style.display = 'block'
  })


  ///////////////////////////////////////////////////////////to close the modal//////////////////////////////////////////////
  window.onclick = (event) => {
    close(event);
  }
  const close = (event) =>{
    for(let i = 0; i < modal.length; i++){
      if(event.target == modal[i] || event.target == closeModal[i]){
      modal[i].style.display = 'none'  
      }
    }
  }

  ////////////////////////////////////////////////////////////////copy number to clipboard ///////////////////////////////////////////////////////
  
  const copyIcon = document.querySelectorAll('.fa-copy')[1]
  copyIcon.addEventListener ('click', (e) => {
    e.preventDefault()
    const  copyText = document.querySelector("#wallet-number");
    let aux = document.createElement('input');
    aux.setAttribute('Value',copyText.innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand('copy');
    document.body.removeChild(aux);
  })
 
  ///////////////////////////////////////////////////////// Submit generate/create wallet form. ///////////////////////////////////////////////////////
  const generateForm = document.querySelector('#generateForm')
  generateForm.addEventListener ('submit', (e) =>{
    e.preventDefault();
    postCreatewalletData(); 
  })

  const createFieldValue = () => {
    let firstName = generateForm['firstName'].value;
    let lastName =  generateForm['lastName'].value;
    let email = generateForm['email'].value;
    let DOB = generateForm['DOB'].value;
    return {
      firstName, lastName, email, DOB
    }   
     
  }

////////////////////////////////////////////////////////////send created wallet data to firebase //////////////////////////////////////////

// const sendCreateWallet = (AccountNo, PhoneNumber, Bank) => {
//   db.collection('create').add({
//     AccountNo: AccountNo,
//     Bank: Bank,
//     PhoneNumber: PhoneNumber
//   }).then(()=> {
//     loadingOverlay.style.display = 'none' 
//   }) 
// }

////////////////////////////////////////////////////////Send create wallet data  //////////////////////////////////////////////
const loadingOverlay  = document.querySelector('.loading-overlay')
const walletSuccess = document.querySelector('.wallet-success')

  function postCreatewalletData(){
    createFieldValue()
    console.log(firstName.value)

    const data = {
      firstName : firstName.value,
      lastName: lastName.value,
      email: email.value,
      dateOfBirth: DOB.value,
      currency: "NGN",
      SecretKey: "hfucj5jatq8h",
    }
   const url = "https://sandbox.wallets.africa/wallet/generate";
  //const url = "https://sandbox.wallets.africa/self/balance";
    const publicKey = "uvjqzm5xl6bw";
    const proxy = "https://mighty-island-92084.herokuapp.com/"
    const headers = {
    'Content-Type' : 'application/json',
    'Authorization': `Bearer ${publicKey}`
    }
    modal[1].style.display = 'none'
    loadingOverlay.style.display = 'block'
    fetch(proxy + url, {
      method: "POST",
      headers: headers,
      body : JSON.stringify(data),
      redirect:"follow" 
    })
    .then(result => result.json())
    .then(resp => {
      console.log(resp)
      const {Message, ResponseCode} = resp.Response;
      const {AccountNo, PhoneNumber, Bank} = resp.Data;
      //bankBalance()
      //sendCreateWallet(AccountNo, PhoneNumber, Bank)

      if(ResponseCode == 200){
        loadingOverlay.style.display = 'none'
        walletSuccess.innerHTML = `<p>${Message}</p>`
        walletSuccess.style.display = 'block'
        timeOut()
      }else{
        walletSuccess.innerHTML = `<p>${Message}</p>`
        walletSuccess.style.backgroundColor = '#C21807'
        walletSuccess.style.display = 'block'
        timeOut()
      } 
    })
    .catch(err => {
       console.log(err)
       loadingOverlay.style.display = 'none'
       walletSuccess.innerHTML = `<p>Something went wrong, please try again</p>`
       walletSuccess.style.backgroundColor = '#C21807'
       walletSuccess.style.display = 'block'
       timeOut()
    })  
  }  

  ///////Settime out after 3 seconds/////////
  const timeOut = () => {
    setTimeout  (() => {
      walletSuccess.style.display = "none"
    },3000)	 
  }

  ///////////////////////////////////////////////Bank balance POST request//////////////////////////////////////////

  // const bankBalance = () => {
  //   const data = {
  //     "Currency": "NGN",
	//      "SecretKey": "hfucj5jatq8h"
  //   }

  //     const url = "https://sandbox.wallets.africa/self/balance";
  //     const publicKey = "uvjqzm5xl6bw";
  //     const proxy = "https://mighty-island-92084.herokuapp.com/"
  //     const headers = {
  //     'Content-Type' : 'application/json',
  //     'Authorization': `Bearer ${publicKey}`
  //     }
      
  //     fetch(proxy + url, {
  //       method: "POST",
  //       headers: headers,
  //       body : JSON.stringify(data),
  //       redirect:"follow" 
  //     })
  //     .then(result => result.json())
  //     .then(resp => {
  //       console.log(resp)
  //       db.collection('balance').add({
  //         BankBalance: resp.Data.WalletBalance
  //       }).then(()=> {
  //         loadingOverlay.style.display = 'none' 
  //       })
        
  //     })
  //     .catch(err => {
  //        console.log(err)
        
  //     })  
  // }

  

////////////////////////////////////////////////////////////// Submit Fund form wallet to fund wallet. ////////////////////////////////////////////
const fundForm =document.querySelector('#fundForm')
fundForm.addEventListener ('submit', (e) => {
  e.preventDefault();
  //fundFieldValue()
  postFundwalletData()
  console.log('fund')
})
  const fundFieldValue = () =>{
    let amount = fundForm['amount'].value;
    let phoneNumber = fundForm['phoneNumber'].value
    //console.log(amount, phoneNumber)
     return {amount, phoneNumber}
  }

  function postFundwalletData(){
    fundFieldValue()
    const transaction = Math.random().toString().substr(2,9);
    const data = {
      amount: amount.value,
      transactionReference: transaction,
      phoneNumber: phoneNumber.value ,
      SecretKey: "hfucj5jatq8h",
    }
   //const url = "https://sandbox.wallets.africa/self/balance";
   const url = "https://sandbox.wallets.africa/wallet/credit";
    const publicKey = "uvjqzm5xl6bw";
    const proxy = "https://mighty-island-92084.herokuapp.com/"
    const headers = {
    'Content-Type' : 'application/json',
    'Authorization': `Bearer ${publicKey}`
    }
    modal[0].style.display = 'none'
    loadingOverlay.style.display = 'block'
    fetch(proxy + url, {
      method: "POST",
      headers: headers,
      body : JSON.stringify(data),
      redirect:"follow" 
    })
    .then(result => result.json())
    .then(resp => {
      console.log(resp)
      const {Message, ResponseCode} = resp.Response;
      const {AmountCredited, RecipientWalletBalance,SenderWalletBalance} = resp.Data
      sendFundWallet(AmountCredited, RecipientWalletBalance,SenderWalletBalance)
      loadingOverlay.style.display = 'none'
      bankBalance()
      if(ResponseCode == 200){
        walletSuccess.innerHTML = `<p>${Message}</p>`
        walletSuccess.style.display = 'block'
        timeOut()
      }else{
        walletSuccess.innerHTML = `<p>Error, Try again!</p>`
        walletSuccess.style.backgroundColor = '#C21807'
        walletSuccess.style.display = 'block'
        timeOut()
      } 
    })
    .catch(err => {
       console.log(err)
       loadingOverlay.style.display = 'none'
       walletSuccess.innerHTML = `<p>Something went wrong, please try again</p>`
       walletSuccess.style.backgroundColor = '#C21807'
       walletSuccess.style.display = 'block'
       timeOut()
    })  
    
  }

  const sendFundWallet = (AmountCredited, RecipientWalletBalance,SenderWalletBalance) => {
    db.collection('Fund').add({
      BalanceAdded:  AmountCredited,
      TotalBalance: RecipientWalletBalance, 
    }).then(()=> {
      loadingOverlay.style.display = 'none' 
    })
  }

  




}

export default Wallet;
