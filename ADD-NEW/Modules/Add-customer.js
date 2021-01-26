const addCustomer = () =>{
  const addRow = document.getElementById("Add-row");
  const newForm = document.querySelector('.new-form');
  
  const  addNewForm = () => {
    const result = `
    <div class="each-form">
    <hr>
      <input class="form" id="full-name" type="text" name="name" placeholder="Full Name..">
      <br>
      <input class="form" type="text" id="track" name="track"  placeholder="Track">
      <br>
      <input class="form" type="number" id="mobileNumber" name="mobile" placeholder="Mobile Number">
      <br>
      <select class="select" name="network" id="network">
        <option>Select Network</option>
        <option>GLO</option>
        <option>AIRTEL</option>
        <option>MTN</option>
        <option>9MOBILE</option>
      </select>
      <br>
    </div>`
    return result;
  }
  
  

  //////Add more formfield
  addRow.addEventListener('click', (event) => {
    event.preventDefault()
    newForm.innerHTML += addNewForm();
    getForm()  
  })
  
  function getForm(){
    const eachForm = document.querySelectorAll('.each-form')  
    
  }
  
  ///Get Input value
  function getInputVal(){
    const  fullName = document.querySelector('#full-name');
    const  track =  document.querySelector('.Add-new #track').value;
    const  mobileNumber = document.querySelector('.Add-new #mobileNumber').value;
    const  network = document.querySelector('.Add-new #network').value; 
   // getForm()
    //console.log(eachForm.length)
   //  return  {
    //   fullName,
    //   track,
    //   mobileNumber,
    //   network
     //}
     console.log(fullName.value)

  }

  //Add customer
  //const formField = document.querySelector('.formField')
  const addCustomer = document.querySelector('#Add-intern')

  // const logFunction = (e) => {
  //   e.preventDefault();
  //   console.log(fullName)
  // }

  addCustomer.addEventListener('click',  (e) => {
    e.preventDefault();
   // console.log('log')
    //getInputVal()
    //console.log(fullName)

  })
   
    //getInputVal(fullName, track, mobileNumber, network);
    //const  inputValue = getInputVal();
    //const {fullName, track, mobileNumber, network} = inputValue;
    //console.log(fullName, track, mobileNumber,network)
    
    // postAirtimeData()  

  /////Send Data to Airtime API
  function postAirtimeData(){
    const data = {
      Code: "MTN",
      Amount: 200,
      PhoneNumber: '08129366772',
      SecretKey: "hfucj5jatq8h",
    }

    const url = "https://sandbox.wallets.africa/bills/airtime/purchase"
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

export default addCustomer;