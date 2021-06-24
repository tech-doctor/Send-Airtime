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

 const transactionData = () => {
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
    fetch(proxy + url, {
      method: "POST",
      headers: headers,
      body : JSON.stringify(data),
      redirect:"follow" 
    })
    .then(result => result.json())
    .then((resp) => {
      return resp
    })
    .catch(err => console.log('Error : ',err))
 }

 transactionData()

 const transactionTable = () => {
   transactionData()
  console.log(resp)
  console.log('hello')
  const result = `
    <div class="transaction-initial">
     <p>No Transactions Yet!</p>
    </div>
    <div class="transaction-table">
    <div class="transaction-button">
      <h3>Transaction</h3>
      <button>View all</button>
    </div>
      <table cellspacing="35px" style="width:100%" id="t01">
        <thead>
          <th>S/N</th>
          <th>Currency</th>
          <th>Amount</th>
          <th >Category</th>
          <th >Narration</th>
          <th>Date</th>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <div class="basic-info">
                <p>NGN</p>
              </div>
            </td>
            <td>25</td>
            <td id="categorate">Bank Transfer Charges</td>
            <td id="narrate">
                Transaction Charge for Bank Transfer
            </td>
            <td>
                Date
            </td>
          </tr>
        </tbody>
      </table> 
    </div>`

    return result
  }

  


const Dashboard = () => {
   console.log('dashboard')
  copyFunction()
  transactionContent.innerHTML += transactionTable()
  }

export default Dashboard