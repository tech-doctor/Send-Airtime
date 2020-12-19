const Wallet = () =>{
  const createWalletButon = document.querySelector('.button-div .create');
  const fundWalletButton = document.querySelector('.button-div .fund');
  const modal = document.querySelectorAll('.modal');
  const closeModal = document.querySelectorAll('.close')


  createWalletButon.addEventListener( 'click', (event) =>{
  modal[1].style.display = 'block'
  })

  fundWalletButton.addEventListener( 'click', (event) => {
  modal[0].style.display = 'block'
  })

  
  const close = (event) =>{
    for(let i = 0; i < modal.length; i++){
      if(event.target == modal[i] || event.target == closeModal[i]){
      modal[i].style.display = 'none'  
      }
    }
  }
  
  //to close the modal
  window.onclick = (event) => {
    close(event);
  }

}

export default Wallet;