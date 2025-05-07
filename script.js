function toggleMenu() {
  document.getElementById('sideMenu').classList.toggle('active');
}
let iconcard = document.querySelector(".iconcard");
let body = document.querySelector("body");
let closecard = document.querySelector(".close");
let listproduct = document.querySelector(".fifthbox");
let listCartHTML = document.querySelector(".ListCard");
let iconcardspan = document.getElementById("span1");
let totalPriceElement = document.querySelector(".totalPrice");



let listproducts = [];
let carts = [];

iconcard.addEventListener('click', () => {
  body.classList.toggle('showCart')
})

closecard.addEventListener('click', () => {
  body.classList.toggle('showCart')
})

const addDataToHTML = () => {
  listproduct.innerHTML = '';
  if (listproducts.length > 0) {
    listproducts.forEach(product => {
      let newProduct = document.createElement('div');
      newProduct.dataset.id;
      newProduct.classList.add('item');
      newProduct.dataset.id = product.id;
      newProduct.innerHTML = `
      <div class="fifthbox1">
        <img src="${product.image}" alt="">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
        <a href="#" class="addCart">Add to card</a>
      </div>
      `;
      listproduct.appendChild(newProduct)
    })
  }

}

listproduct.addEventListener('click', (event) => {
  let positionClick = event.target;
  if (positionClick.classList.contains('addCart')) {
    event.preventDefault(); // ⛔️ Stop page refresh
    let product_id = positionClick.closest('.item').dataset.id;
    addtoCard(product_id);
  }
});


const addtoCard = (product_id) => {
  let positionThisProductInCart = carts.findIndex((value) => value.product_id == product_id);
  if (carts.length <= 0) {
    carts = [{
      product_id: product_id,
      quantity: 1
    }]
  }
  else if (positionThisProductInCart < 0) {
    carts.push({
      product_id: product_id,
      quantity: 1
    });
  } else {
    carts[positionThisProductInCart].quantity = carts[positionThisProductInCart].quantity + 1;
  }
  addCartToHTML()
}
// let iconcardspan = document.getElementById("span1"); // Updated to match the ID

const addCartToHTML = () => {
  listCartHTML.innerHTML = '';
  let totalquantity = 0;
  let totalPrice = 0;

  if (carts.length > 0) {
    carts.forEach(cart => {
      totalquantity += cart.quantity;
      let product = listproducts.find(p => p.id == cart.product_id);
      if (!product) return;

      let itemTotal = Number(product.price) * cart.quantity; // ✅ define itemTotal here
      totalPrice += itemTotal; // ✅ now this works

      let newCart = document.createElement('div');
      newCart.classList.add('item');
      newCart.innerHTML = `
    <div class="image">
      <img src="${product.image}" alt="">
    </div>
    <div class="name">${product.name}</div>
    <div class="totalprice">$${itemTotal.toFixed(2)}</div>
    <div class="quantity" data-id="${cart.product_id}">
   
      <span>${cart.quantity}</span>
      
    </div>
  `;
      listCartHTML.appendChild(newCart);
    });
  }

  // ✅ Update the cart quantity badge inside the icon
  iconcardspan.innerText = totalquantity;

  // Add final total price to the cart display
  if (totalPriceElement) {
    totalPriceElement.innerText = `total:$${totalPrice.toFixed(2)}`; // Format to two decimal places
  } else {
    // If the element doesn't exist, create it and add to the cart
    let newTotalPriceElement = document.createElement('div');
    newTotalPriceElement.classList.add("totalPrice");
    newTotalPriceElement.innerText = `Total :$${totalPrice.toFixed(2)}`;
    listCartHTML.appendChild(newTotalPriceElement);
  }
};


const initApp = () => {
  fetch('product.json')
    .then(response => response.json())
    .then(data => {
      listproducts = data;
      addDataToHTML();
    })
}
initApp();

