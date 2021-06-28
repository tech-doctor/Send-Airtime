const addCustomer = () =>{
  const addRow = document.getElementById("Add-row");
  const newForm = document.querySelector('.new-form');
  const addCustomer = document.querySelector('#Add-intern');
  
  // const  newFormFunction = () => {
    const result =  `
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
   

  newForm.innerHTML = result
 
  

  //////Add more formfield
  addRow.addEventListener('click', (event) => {
    event.preventDefault()
    //resultList.push(result)
    newForm.innerHTML += result;
  })
    
  //})
  
  // function getForm(){
  //   const eachForm = document.querySelectorAll('.each-form')  
    
  // }
  
  ///Get Input value
  function getInputVal(){
    const  fullName = document.querySelectorAll('#full-name');
    const  track =  document.querySelectorAll('.Add-new #track');
    const  mobileNumber = document.querySelectorAll('.Add-new #mobileNumber');
    const  network = document.querySelectorAll('.Add-new #network'); 
   // getForm()

    //  const formArray = [
    //    {
    //     fullName : fullName.value,
    //     track: 'frontend',
    //     mobileNumber: '090',
    //     network: 'MTN'
    //    }
    //   ];

    const formArray = [fullName, track, mobileNumber,network]
        
      formArray.forEach(form => {
        console.log(form.value)
      })

    //  //console.log()

    //  fullName.forEach(name => {
    //    console.log(name.value)
    //  });

     //console.log(fullName, track, mobileNumber, network)
  }

  //Add customer
  //const formField = document.querySelector('.formField')
  

  addCustomer.addEventListener('click',  (e) => {
    e.preventDefault();
    getInputVal()
  })
   
    //getInputVal(fullName, track, mobileNumber, network);
    //const  inputValue = getInputVal();
    //const {fullName, track, mobileNumber, network} = inputValue;
    //console.log(fullName, track, mobileNumber,network)
    
    // postAirtimeData()  

  /////Send Data to Airtime API

  // function postAirtimeData(){
    // const data1 =
    //   {
    //     "Code": "airtel",
    //     "Amount": 50,
    //     "PhoneNumber": "07068260000",
    //     "SecretKey": "hfucj5jatq8h"
    //   }

  

   
    // const url = "https://sandbox.wallets.africa/bills/airtime/purchase"
    // const publicKey = "uvjqzm5xl6bw";
    // const proxy = "https://mighty-island-92084.herokuapp.com/"
    // const headers = {
    //   'Content-Type' : 'application/json',
    //   'Authorization': `Bearer ${publicKey}`
    //   }
  
    // fetch(proxy +  url, {
    //   method: "POST",
    //   headers: headers,
    //   body : JSON.stringify(data1, data2),
    // })
  

    // .then(result => result.json())
    // .then(resp => console.log(resp))
    // .catch(err => console.log('Error :', err))
}

export default addCustomer;