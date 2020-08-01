const menuIcon = document.getElementById("icon");
const sideMenu = document.querySelector(".side-menu");
const closeMenu = document.getElementById("close-menu")



menuIcon.addEventListener("click", () =>{

    sideMenu.style.width = '100%';
})

closeMenu.addEventListener("click", () =>{

    sideMenu.style.width  = '0';
})
