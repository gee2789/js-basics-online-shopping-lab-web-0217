var cart = [];

// const getCart = () => {}
// same as
// const getCart = function(){}


function setCart(newCart) {
  cart = newCart;
}

const getCart = () => cart

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }
  return t
}


const addToCart = (item) => {
  let newItem = {[item]: Math.floor(Math.random())}
  cart.push(newItem)
  console.log(`${item} has been added to your cart.`)
  return cart
}

const viewCart = () => {
  if(!cart[0]){
    console.log("Your shopping cart is empty.")
    return
  }

  let itemSummary = cart.map((item)=>{ //set
    let itemName = Object.keys(item)[0] //only one item in here
    let itemPrice = item[itemName]
    return `${itemName} at $${itemPrice}`
  })
  console.log(`In your cart, you have ${itemSummary.join(", ")}.`)
}

// const removeFromCart = (item) => {
//   let filteredCart = cart.filter((storedItem)=> { //storedItem represents each item in the cart.  Sort of like array.select do |storedItem|
//     return !storedItem[item]
//   })
//
//   if(filteredCart.length == cart.length){
//     console.log("That item is not in your cart.")
//   } else {
//     cart = filteredCart
//   }
// }
const removeFromCart = (item) => {
  let itemInCart = false
  for (let i = 0, l = cart.length; i < l; i++) {
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true
      cart = cart.slice(0, i).concat(cart.slice(i + 1))
    }
  }
  if (!itemInCart) {
    console.log("That item is not in your cart.")
  }
  return cart
}

const placeOrder = (number) => {
  if (!number){
    console.log("We don't have a credit card on file for you to place your order.")
  }else{
    const t = total()
    console.log(`Your total cost is $${t}, which will be charged to the card 123.`)
    cart = []
  }
}
  // function addToCart(element){
  //   var productObject = {element: Math.floor(Math.random()*100)};
  //   cart.push(productObject);
  //   console.log(`${element} has been added to your cart.`);
  //   return cart
  // }
  //
  // function viewCart(){
  //   if (cart.length===0){
  //     console.log("Your shopping cart is empty.")
  //   }else{
  //     return "In your cart, you have " +
  //     for (i=0; i<cart.length; i++){
  //       return
  //     }
  //   }
  // }
