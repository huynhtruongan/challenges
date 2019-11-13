const user = {
  name: "An",
  active: true,
  cart: [],
  purchases: []
}
let item = [{name: "moto", price: 10000}, {name: "Iphone", price: 1000}];
// let item = [{name: 'laptop', price: 60}];
let pipe = (f, g) => (...args) => g(f(...args));

purchaseItem(
  addItemToCart,
  addTax,
  buyItem,
  emptyCart
)(user, item);
function addItemToCart(user, item){
  item.map(item => user.cart.push(item))
  return user;
}
function addTax(user){
  user.cart.map(item => item.price *= 1.3)
  return user
}
function buyItem(user){
  user.purchases = Object.assign([],user.cart);
  return user;
}
function emptyCart(user){
  user.cart = [];
  return user;
}

function purchaseItem(...fns){
  return fns.reduce(pipe);
}

// addItemToCart(user, item)
// addTax(user)
// buyItem(user)
// emptyCart(user)
