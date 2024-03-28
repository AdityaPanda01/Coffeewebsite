let x=5;
function searchbar(){
    document.getElementById("search-box").classList.toggle("active")
    document.getElementById("menu").classList.remove("active");
};
  
document.getElementById("menubar").addEventListener("click", function() {
    document.getElementById("menu").classList.toggle("active");
  //  document.getElementById("menupic").classList.toggle("active");
    document.getElementById("search-box").classList.remove("active")
  });


  //menu cart
  let cartitems=[];
  let totalprice=0;
let addToCart=document.querySelectorAll(".add-cart")
addToCart.forEach((button)=>{
    button.addEventListener("click",function(){
        alert("Added to Cart")
       const price = parseFloat(button.parentNode.querySelector('h4').textContent.replace('Price:$', '0'));
        const val=Number(price)
        cartitems.push(val)
       // Update total price
      totalprice=totalprice+val;
        
    // Update total price in the cart
    document.getElementById('totalPrice').innerHTML = `Total Price:$${totalprice}`;
    
})
})

let mycart=document.getElementById("cart-out")
mycart.addEventListener("click",function(){
   // alert("hello")
   document.getElementById("cart").classList.toggle("activate");
})

  


  //menu cart ends
  //let total=0
  
