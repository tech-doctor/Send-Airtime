const Dashboard = () => {
  const copyIcon = document.querySelectorAll('.fa-copy')[0]
  copyIcon.addEventListener ('click', (e) => {
    e.preventDefault()
    const  copyText = document.querySelector("#number");

    var aux = document.createElement('input');
    aux.setAttribute('Value',copyText.innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand('copy');
    document.body.removeChild(aux);
  })


  // const data = {
  //   "skip": 0,
  //   "take": 10,
  //   "dateFrom": "2021-01-11",
  //   "dateTo": "2021-01-12",
  //   "transactionType": 5,
  //   "phoneNumber": "2343702469301",
  //   "transactionPin": "1111",
  //   "currency": "NGN",
  //   "secretKey": "hfucj5jatq8h"
  //   }
  //   const url = "https://sandbox.wallets.africa/self/transactions";
  //   const publicKey = "uvjqzm5xl6bw";
  //   const proxy = "https://cors-anywhere.herokuapp.com/"
  //   const headers = {
  //   'Content-Type' : 'application/json',
  //   'Authorization': `Bearer ${publicKey}`
  //   }
  //   fetch(proxy + url, {
  //     method: "POST",
  //     headers: headers,
  //     body : JSON.stringify(data),
  //     redirect:"follow" 
  //   })
  //   .then(result => result.json())
  //   .then(resp => console.log(resp))
  //   .catch(err => console.log('Error : ',err))
  
  }

export default Dashboard