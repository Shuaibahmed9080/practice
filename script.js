function toggleMenu() {
      document.getElementById('sideMenu').classList.toggle('active');
    }
let iconcard = document.querySelector(".iconcard");
let body = document.querySelector("body");
let closecard = document.querySelector(".close")

iconcard.addEventListener('click',() => {
body.classList.toggle('showCart')
})

closecard.addEventListener('click',() => {
body.classList.toggle('showCart')
})

