const  sideClick = document.querySelectorAll(".sidebar-content p");

sideClick.forEach(sideClick => {
    sideClick.addEventListener('click', (e)=> {
        const active = document.querySelectorAll('.active');
        active.forEach(active => {
            if(active) {
                active.classList.remove('active');
            }
            e.target.classList.add('active');
        })
        

        const display = document.querySelectorAll('.display')
        display.forEach(display => {
            if(display.getAttribute('data-number') === sideClick.getAttribute('data-number')){
                display.style.display = "block"
            }
            else{
                display.style.display = 'none';
            }
        })

    })
})





const addRow = document.getElementById("Add-row");
const newForm = document.querySelector('.new-form');
const menuIcon = document.getElementById("bars-icon");
const mobileSidebar = document.querySelector(".mobile-sidebar");
const fixedSidebar = document.querySelector('.fixed-sidebar');


document.addEventListener('click', (e) => {
    if(menuIcon.contains(e.target)) {
        mobileSidebar.style.display = 'block';
    } else if(mobileSidebar.contains(e.target)) {
      mobileSidebar.style.display = 'block';
    } else{
        mobileSidebar.style.display = 'none';
    }   
})


const name = document.querySelector('#name')
const addCustomer = document.querySelector('#Add-intern')

//const nameValue = name.value

// addCustomer.addEventListener('submit', (e) => {
//     //e.preventDefault()
//     console.log(name.value)
// })

   const  addNewForm = () => {
       newForm.innerHTML = ''
    const result = `
        <input class="form" type="text" name="name"  placeholder="Full Name">
        <br>
        <input class="form" type="text" name="track"  placeholder="Track">
        <br>
        <input class="form" type="number" name="mobile"  placeholder="Mobile Number">
        <br>
        <select class="select">
            <option>Select Network</option>
            <option>GLO</option>
            <option>AIRTEL</option>
            <option>MTN</option>
            <option>9MOBILE</option>
        </select>
        <br>
        <br>
     `
     return result;
    
    }

    addRow.addEventListener('click', (event) => {
        newForm.innerHTML += addNewForm();
        event.preventDefault()
    })