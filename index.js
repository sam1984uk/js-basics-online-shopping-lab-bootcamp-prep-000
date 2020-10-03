var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var random = Math.random()*100
  var floor = Math.floor(random)
  var update = {itemName: (item), itemPrice: (floor)}
  cart.push(update)
  return `${item} has been added to your cart.`
  }

function viewCart() {
  var list = []
  for (let i = 0; i < cart.length; i++){
  if (cart.length === 0){ return `Your shopping cart is empty.`}
   else if (cart.length === [i]) {list.push(cart[i])};
    else (return `In your cart, you have ${list}.`)
  }

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
