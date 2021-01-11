const content = document.querySelector('.content');

const Transaction = () =>{
    const result = `<div class="header">
    <h1>Transaction</h1> 
</div>
<div class="no-transaction">
    <p>NO TRANSACTION(S) YET!</p>
</div>
<div class="table">
    <table cellspacing="35px" style="width:100%" id="t01">
        <thead>
            <th>S/N</th>
            <th>Currency</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Narration</th>
            <th>Date</th>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>NGN</td>
                <td>25</td>
                <td>Bank Transfer Charges</td>
                <td>Transaction Charge for Bank Transfer</td>
                <td>Date</td>
            </tr>
        </tbody>
    </table> 		
</div>
<div class="back">
    <button>Back</button>
</div>	`
return result
}

content.innerHTML += Transaction()