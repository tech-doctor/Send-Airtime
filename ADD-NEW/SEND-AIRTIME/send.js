
const tableBody = document.querySelector('.table-body')


const Table = () => {
const result = `
<tr>
<td>1</td>
<td id="basic-info">
    <div class="basic-info">
        <div class="icon">
    <i class="fa fa-user-circle fa-2x"></i>
   </div>
   <div class="name-track">
       <p id="name">Oluka Isaac</p>
       <p id="track">Front-End</p>
   </div>
   </div>
</td>

<td>+2348129366772</td>
<td>MTN</td>
<td>
    <input type="number" id="input-amount" required>

</td>
<td>
    <i class="fa fa-trash"></i>
</td>
</tr>`

 return result;

}

tableBody.innerHTML = Table()