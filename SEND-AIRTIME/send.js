
const tableBody = document.querySelector('.table-body')


const customerInfo = [
  {
    id: 1,
    name: 'Oluka Isaac',
    stack: 'Frontend',
    phoneNumber: '08129366772',
    network: 'MTN',
    amount: `<input type="number" id="input-amount" required>`,
    deleteIcon: `<i class="fa fa-trash"></i>`
  },
  {
    id: 2,
    name: 'Mobayode Isaac',
    stack: 'Backend',
    phoneNumber: '08067883093',
    network: 'Airtel',
    amount: `<input type="number" id="input-amount" required>`,
    deleteIcon: `<i class="fa fa-trash"></i>`
    },
  {
    id: 3,
    name: 'Damilola oluwaseyi',
    stack: 'UI/UX',
    phoneNumber: '08129374822',
    network: 'GLO',
    amount: `<input type="number" id="input-amount" required>`,
    deleteIcon: `<i onclick = "deleteCustomer()" class="fa fa-trash"></i>`
  }
]



const myFunction = ()  => {
  const  inputNumber =  document.querySelectorAll('#input-amount')
  
  const arrayNumber = [2,5,6]
  
  customerInfo.forEach ((data,i) => {
    data.amount  = inputNumber[i].value
    console.log(data)
  })

}







//const  Table = () => {
const customerArray = customerInfo.map((customer,i) => {
  const {id, name, stack, phoneNumber, network,amount,deleteIcon} = customer
  
  return  `
<tr>
<td>${id}</td>
<td id="basic-info">
    <div class="basic-info">
        <div class="icon">
    <i class="fa fa-user-circle fa-2x"></i>
   </div>
   <div class="name-track">
       <p id="name">${name}</p>
       <p id="track">${stack}</p>
   </div>
   </div>
</td>

<td>${phoneNumber}</td>
<td>${network}</td>
<td>${amount}</td>
<td>
  <i onclick = "deleteCustomer(${i})" class="fa fa-trash"></i>
</td>
</tr>`;
});
   

tableBody.innerHTML = customerArray

function deleteCustomer (i){
  //customerInfo.pop()
  customerArray.pop()
  console.log(customerArray)

  console.log('hi', i)
}




 

 