const addRow = document.getElementById("Add-row")
const newForm = document.querySelector('.new-form');
const menuIcon = document.getElementById("icon");
const sideMenu = document.querySelector(".side-menu");
const closeMenu = document.getElementById("close-menu")



menuIcon.addEventListener("click", () =>{

    sideMenu.style.width = '100%';
})

closeMenu.addEventListener("click", () =>{

    sideMenu.style.width  = '0';
})






   const  addNewForm = () => {
    const result = `
        <input id="form" type="text" name="name"  placeholder="Full Name">
        <br>
        <input id="form" type="text" name="track"  placeholder="Track">
        <br>
        <input id="form" type="number" name="mobile"  placeholder="Mobile Number">
        <br>
        <select id="select">
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