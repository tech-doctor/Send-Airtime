document.addEventListener("DOMContentLoaded",transactionData);
const tableRow = document.querySelector('.tbody');
const  loader = document.querySelector('.loading-overlay')
const  table = document.querySelector('.table')
const backTryagain = document.querySelector('.back-tryAgain')

{/* <div class="no-transaction">
<p>NO TRANSACTION(S) YET!</p>
</div>  */}


//let loaderDisplay = true;

 function transactionData(){
  const requestData = {
    "skip": 0,
    "take": 15,
    "dateFrom": "2021-01-15",
    "dateTo": new Date(),
    "transactionType": 5,
    "transactionPin": "1",
    "Currency": "NGN",
    "SecretKey": "hfucj5jatq8h"
  }

  //uncomment the code below to debug
 // const url = "https://sandbox.wallets.africa/self/transactions";
  const publicKey = "uvjqzm5xl6bw";
  const proxy = "https://mighty-island-92084.herokuapp.com/"
  const headers = {
  'Content-Type' : 'application/json',
  'Authorization': `Bearer ${publicKey}`
  }

  fetch(proxy + url,{
    method: "POST",
    headers: headers,
    body : JSON.stringify(requestData),
    redirect:"follow" 
  })

  .then(result => result.json())
  .then((resp) => {
    backTryagain.innerHTML = `<button onclick="goBack()"><i class="fas fa-arrow-left"></i> Back</button>`
    
    const responseData = resp.data.transactions 
    console.log(responseData)
    responseData.forEach((responseData,i) => {
      console.log(responseData, i)
      const {currency,amount, category, narration,dateTransacted} = responseData
      const result = `
        <tr>
          <td>${i+1}</td>
          <td>${currency}</td>
          <td>${amount}</td>
          <td>${category}</td>
          <td>${narration}</td>
          <td>${dateTransacted}</td>
        </tr>`
       tableRow.innerHTML += result
       loader.style.display = 'none'
    })
  })
  .catch((err) => {
    console.log('Error : ',err)
    loader.style.display = 'none'
    backTryagain.innerHTML = `<button onclick="tryAgain()"> Try again</button>`
    table.style.overflowX = 'hidden'
    const errorMessage = `<div>
    <p class = 'error-message'>Something went wrong!</p>
    </div>`
    table.innerHTML += errorMessage
  }) 
}




const tryAgain = () => {
  window.location.reload()
}


const goBack = () => {
  window.history.back()
 }

 