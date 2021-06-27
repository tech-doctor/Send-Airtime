const profileFlexContent = document.querySelector('.display .first-div .profile-div .innerFlex')

 //let numberValue = '8086362';

 const profileTextFunction = () => {
  const profileFlexText = `
  <div class="flex-div">
    <div class="left-div">
      <div  class="avatar">
        <!-- <img alt="avatar" src="https://avatars.githubusercontent.com/u/55724699?v=4"> -->
        <img alt="avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjbzb7pVBgYK7AJEL4G5m-sUykuYsUz3Tysz4uYw5Hlt_o_xkgF0PRLu_VG_xsvn1ZHmk&usqp=CAU">
        <div class="edit-icon">
          <label style="cursor: pointer;" class="filebutton">
            <i class="fa fa-plus" aria-hidden="true"></i>
            <input style="display: none;" type="file" id="myfile" name="myfile">
          </label>
        </div> 
      </div>
      <div class="editPicture-button">
        <button>Edit picture</button>
      </div>
      <div class="updated-profile">
        <div class="bio">
          <p style="font-weight: 700;" class="title">Bio</p>
          <p class="bio-initial">-------------------------------------</p>
          <p class="body">I'm Oluka Damilola isaac, a front-end engineer located in Benin city</p>
        </div>
      </div>
      <div class="email">
        <p style="font-weight: 700;" class="title">Email</p>
        <p class="body">hilghsilk2damson@gmail.com</p>
      </div> 
    </div>
    <div class="right-div">
      <div class="Full-name">
        <p style="font-weight: 700;" class="title">Full name</p>
        <p class="body">Oluka Damilola Isaac</p>
      </div>
      <div class="updated-profile">
        <div class="company">
          <p  style="font-weight: 700;"  class="title">Company name</p>
          <p class="company-initial">-------------------------------------</p>
          <p class="body">Wallet africa.plc</p>
        </div>
        <div class="location">
          <p style="font-weight: 700;" class="title">Location</p>
          <p class="location-initial">-------------------------------------</p>
          <p class="body">Lagos, Nigeria</p>
        </div>
      </div>
      <div class="phone-number">
        <!-- <div style="text-align: center;" class="button">
          <button>Add phone-number</button>
        </div> -->
        <div class="update-input">
          <div class="input">
            <form>
              <input type="number" placeholder="Phone-number.." required>
              <button type = 'submit' style = "cursor: pointer;">Update</button>
            </form>
          </div>
        </div>
          <div class="number">
          <p style="font-weight: 700;"  class = title>Phone Number</p>
          <p class="body">08067883093</p>
          </div>   
      </div>
    </div>
  </div>`

  return profileFlexText
 }
  

const Profile = () =>{
   // initial profile of content when the page is load
    profileFlexContent.innerHTML += profileTextFunction();
    /// set numberDetails display as visible when update button is clicked
    const numberDetails = document.querySelector('.display .profile-div .innerFlex .flex-div .right-div .phone-number .number')
    const numberInput = document.querySelector('.phone-number .update-input .input form input')
    const numberButton =  document.querySelector('.phone-number .update-input .input form button')
    const numberDiv =  document.querySelector('.phone-number .update-input .input')
    const number = document.querySelector('.phone-number .number .body')

    numberButton.addEventListener('click', (event) =>{
      event.preventDefault()
     if(numberInput.value) {
      number.innerHTML = numberInput.value;
      numberDiv.style.display = 'none'
      numberDetails.style.display = 'block'
     }
    })

    
  
    //console.log('profile')
}  


export default Profile