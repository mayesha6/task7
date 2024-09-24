 const iconMenu = document.getElementById("icon-menu");
 const iconClose = document.getElementById("icon-close");
 const mainMenu = document.getElementById("main-menu");
 iconMenu.addEventListener("click", ()=>{
    iconClose.classList.add("block");
    mainMenu.classList.add("block");
    iconMenu.classList.add("hidden");
 })
 iconClose.addEventListener("click", ()=>{
    iconClose.classList.remove("block");
    mainMenu.classList.remove("block");
    iconMenu.classList.remove("hidden");
 })

// cart 
const cartIcon = document.getElementById("cart-icon");
const cartContent = document.getElementById("cart-content");
cartIcon.addEventListener("click", ()=>{
  cartContent.classList.toggle("block");
})

//product price 
let offerPrice = document.getElementById("offer-price");
let offerPercent = document.getElementById("offer-percent");
let delPrice = document.getElementById("del-price");
offerPrice.innerText = parseFloat(delPrice.innerText)*(parseFloat(offerPercent.innerText)/100);

// update quantity 
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
let proQuantity = document.getElementById("pro-quantity");
let cartIconProduct = document.getElementById("cart-icon-product");
const addToCart = document.getElementById("add-to-cart")
const cartBody = document.getElementById("cart-body")
const proName = document.getElementById("pro-name")
let productQuantity = 0;


plus.addEventListener("click", ()=>{
   productQuantity++;
   proQuantity.innerText = productQuantity;
   cartIconProduct.innerText = productQuantity;   
   cartIconProduct.classList.add("block")

   // add to cart 
   let totalPrice = parseFloat(offerPrice.innerText)*productQuantity;
   addToCart.addEventListener("click", ()=>{
      cartBody.innerHTML=`
      <div id="prod-cart">
      <div class="product-details-cart flex items-center justify-between pt-3" id="product-details-cart">
         <img src="assets/img/image-product-1-thumbnail.jpg" alt="" class="w-[80px]">
         <div class="product-details-content-cart">
               <div id="product-name">${proName.innerText}</div>
               <div id="product-price">${offerPrice.innerText}*${proQuantity.innerText} <span class="font-bold ps-2">$${totalPrice}</span> </div>
         </div>
         <div class="product-del-cart cursor-pointer" id="product-del-cart">
               <img src="assets/img/icon-delete.svg" alt="">
         </div>
      </div>
      </div>
      `
      // delete product from cart 
      const productDelCart = document.getElementById("product-del-cart")
      const prodCart = document.getElementById("prod-cart")
      productDelCart.addEventListener("click", ()=>{
         prodCart.classList.add("hidden");
         cartBody.innerHTML=`
            <p class="text-center py-5 font-bold">your cart is empty.</p>
         `
         productQuantity = 0;
         proQuantity.innerText = 0;
         cartIconProduct.innerText= 0;
      })
   })
})
minus.addEventListener("click", ()=>{
   productQuantity--;
   proQuantity.innerText = productQuantity;
   cartIconProduct.innerText = productQuantity;
   // cartIconProduct.classList.add("block")
   if(productQuantity<=0){
      proQuantity.innerText = 0;
      cartIconProduct.innerText = 0;
      totalPrice=0;
   }

   // add to cart
   let totalPrice = parseFloat(offerPrice.innerText)*productQuantity;
   addToCart.addEventListener("click", ()=>{
      cartBody.innerHTML=`
      <div id="prod-cart">
      <div class="product-details-cart flex items-center justify-between pt-3" id="product-details-cart">
         <img src="assets/img/image-product-1-thumbnail.jpg" alt="" class="w-[80px]">
         <div class="product-details-content-cart">
               <div id="product-name">${proName.innerText}</div>
               <div id="product-price">${offerPrice.innerText}*${proQuantity.innerText} <span class="font-bold ps-2">$${totalPrice}</span> </div>
         </div>
         <div class="product-del-cart cursor-pointer" id="product-del-cart">
               <img src="assets/img/icon-delete.svg" alt="">
         </div>
      </div>
      </div>
      `
      // delete product from cart 
      const productDelCart = document.getElementById("product-del-cart")
      const prodCart = document.getElementById("prod-cart")
      productDelCart.addEventListener("click", ()=>{
         prodCart.classList.add("hidden");
         cartBody.innerHTML=`
            <p class="text-center py-5 font-bold">your cart is empty.</p>
         `
         productQuantity = 0;
         proQuantity.innerText = 0;
         cartIconProduct.innerText= 0;
      })
   })
})




// let slide = new Swiper('.slide', {
//    slidesPerView: 1,
//    loop: true,
//    navigation: {
//      nextEl: '.swiper-button-next',
//      prevEl: '.swiper-button-prev',
//    },
//    breakpoints: {
//       768: {
//         slidesPerView: 2, // 3 slides per view for screens >= 768px
//         spaceBetween: 30, // 30px space between slides
//       },
//       1024: {
//         slidesPerView: 3, // 4 slides per view for screens >= 1024px
//         spaceBetween: 40, // 40px space between slides
//       },
//     },
//  });