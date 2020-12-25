const Wallet = () =>{
  const createWalletButon = document.querySelector('.button-div .create');
  const fundWalletButton = document.querySelector('.button-div .fund');
  const modal = document.querySelectorAll('.modal');
  const closeModal = document.querySelectorAll('.close')

  //open create wallet modal
  createWalletButon.addEventListener( 'click', (event) =>{
  modal[1].style.display = 'block'
  })
  //open fund wallet modal
  fundWalletButton.addEventListener( 'click', (event) => {
  modal[0].style.display = 'block'
  })


  //to close the modal
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
 
  ///////////////////////////////////////// Submit generate/create wallet form. ///////////////////////////////////////////////////////
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

/////////Send create wallet data
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

    const publicKey = "uvjqzm5xl6bw";
    const proxy = "https://cors-anywhere.herokuapp.com/"
    const headers = {
    'Content-Type' : 'application/json',
    'Authorization': `Bearer ${publicKey}`
    }

    fetch(proxy + url, {
      method: "POST",
      headers: headers,
      body : JSON.stringify(data),
      redirect:"follow" 
    })
    .then(result => result.json())
    .then(resp => console.log(resp))
    .catch(err => console.log('Error : ',err))
  }  


/// Submit Fund form wallet to fund wallet.
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
  // const url = "https://sandbox.wallets.africa/self/balance";
  const url = "https://sandbox.wallets.africa/wallet/credit";
  const publicKey = "uvjqzm5xl6bw";
    const proxy = "https://cors-anywhere.herokuapp.com/"
    const headers = {
    'Content-Type' : 'application/json',
    'Authorization': `Bearer ${publicKey}`
    }
    fetch(proxy + url, {
      method: "POST",
      headers: headers,
      body : JSON.stringify(data),
      redirect:"follow" 
    })
    .then(result => result.json())
    .then(resp => console.log(resp))
    .catch(err => console.log('Error : ',err))
}
}

export default Wallet;