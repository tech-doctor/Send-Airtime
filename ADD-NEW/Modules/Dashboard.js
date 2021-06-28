//document.addEventListener("DOMContentLoaded",transactionData);
const transactionContent  = document.querySelector('.transaction-div')

const copyFunction = () => {
  const copyIcon = document.querySelectorAll('.fa-copy')[0]
  // Event that handles the copied text
  copyIcon.addEventListener ('click', (e) => {
    e.preventDefault()
    const  copyText = document.querySelector("#number");
    let aux = document.createElement('input');
    aux.setAttribute('Value',copyText.innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand('copy');
    document.body.removeChild(aux);
  })
 }

const  transactionData = async () => {
  const data = {
    "skip": 0,
    "take": 5,
    "dateFrom": "2021-01-11",
    "dateTo":  new Date(),
    "transactionType": 5,
    "phoneNumber": "2343702469301",
    "transactionPin": "1111",
    "currency": "NGN",
    "secretKey": "hfucj5jatq8h"
    }
    const url = "https://sandbox.wallets.africa/self/transactions";
    const publicKey = "uvjqzm5xl6bw";
    const proxy = "https://mighty-island-92084.herokuapp.com/"
    const headers = {
    'Content-Type' : 'application/json',
    'Authorization': `Bearer ${publicKey}`
  }
      
  const response =  await fetch(proxy + url, {
    method: "POST",
    headers: headers,
    body : JSON.stringify(data),
    redirect:"follow" 
  })
  const fetchedData = await response.json()
  return fetchedData
}
 

 //transactionData()

 const transactionTable = () => {
   //keeping the state when the wallet is created 
   let createWallet = true
  const  result1 = `
  ${!createWallet? `<div class="transaction-initial">
  <p>No Transactions Yet!</p>
 </div>`: '' }
  <div class="transaction-table">
  <div class="transaction-button">
    <h3>Transactions</h3>
    <button>View all</button>
  </div>
  <div class = 'table'>
      <table cellspacing="35px" style="width:100%" id="t01">
      <thead>
        <th>S/N</th>
        <th>Currency</th>
        <th>Amount</th>
        <th >Category</th>
        <th >Narration</th>
        <th>Date</th>
      </thead>
      <tbody class = 'table-body'>
    
      </tbody> 
    </table> 
  </div>
  
  </div>`

  // <div class="spinner-overlay">
  // <div class="spinner"></div>
  // </div>
  transactionContent.innerHTML += result1
   transactionData()
   .then(fetchedData => {
     const data = fetchedData.Data.Transactions
    data.forEach((data,i) => {
      const {Amount, Currency, Category, Narration, DateTransacted} = data;
       const result2 = `
      <tr>
          <td>${i+1}</td>
          <td>
            <div class="basic-info">
              <p>${Currency}</p>
            </div>
          </td>
          <td>${Amount}</td>
          <td id="categorate">${Category}</td>
          <td id="narrate">
          ${Narration}
          </td>
          <td>
          ${DateTransacted}
          </td>
        </tr>
      `
      document.querySelector('.table-body').innerHTML += result2  
    })
   })
   
  

    

  }

  
const Dashboard = () => {
  // console.log('dashboard')
  copyFunction()
  transactionTable()
  }

export default Dashboard



