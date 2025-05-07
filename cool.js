//   const addCartToHTML = () =>{
//     let totalquantity = 0;
    
//     listCartHTML.innerHTML='';
//     if(carts.length > 0){
//       carts.forEach(cart =>{
//       totalquantity = totalquantity + cart.quantity; 
//         let newCart = document.createElement('div');
//         let positionProduct = listproducts.findIndex((value) =>value.id == cart.product_id);
//         let info = listproducts[positionProduct];
//         newCart.classList.add('item');
//         newCart.innerHTML = `
//         <div class="image">
//         <img src="${info.image}" alt="">
//         </div>
//         <div class="name">
//         ${info.name}
//         </div>
//         <div class="totalprice">${Number(info.price) * cart.quantity}</div>
//         <div class="quantity" data-id="${cart.product_id}">
//   <span class="decrease">-</span>
//   <span>${cart.quantity}</span>
//   <span class="increase">+</span>
// </div>`
// ;
        
//         listCartHTML.appendChild(newCart);
//       })
//   }
//   iconcard.innerHTML = totalquantity;
// }



  const addCartToHTML = () =>{
    let totalquantity = 0;
    
    listCartHTML.innerHTML='';
    if(carts.length > 0){
      carts.forEach(cart =>{
      totalquantity = totalquantity + cart.quantity; 
        let newCart = document.createElement('div');
        let positionProduct = listproducts.findIndex((value) =>value.id == cart.product_id);
        let info = listproducts[positionProduct];
        newCart.classList.add('item');
        newCart.innerHTML = `
        <div class="image">
        <img src="${info.image}" alt="">
        </div>
        <div class="name">
        ${info.name}
        </div>
        <div class="totalprice">${Number(info.price) * cart.quantity}</div>
        <div class="quantity" data-id="${cart.product_id}">
  <span class="decrease">-</span>
  <span>${cart.quantity}</span>
  <span class="increase">+</span>
</div>`
;
        
        listCartHTML.appendChild(newCart);
      })
  }
  iconcard.innerHTML = totalquantity;
}