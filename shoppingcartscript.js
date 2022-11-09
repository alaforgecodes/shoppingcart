/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
//const products = ["Carton of Cherries", "Carton of Strawberries", "Bag of Oranges"]

/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/
const cherry = {
    name: "Cherries",
    price: 4,
    quantity: 0,
    productID: 10203,
    image: "images/cherry.jpg",
  };
  
  const strawberry = {
    name: "Strawberries",
    price: 5,
    quantity: 0,
    productID: 40506,
    image: "images/strawberry.jpg",
  };
  
  const orange = {
    name: "Oranges",
    price: 10,
    quantity: 0,
    productID: 70809,
    image: "images/orange.jpg"
  };
  
  const products = [cherry, strawberry, orange];
  
  /* Images provided in /images folder. All images from Unsplash.com
     - cherry.jpg by Mae Mu
     - orange.jpg by Mae Mu
     - strawberry.jpg by Allec Gomes
  */
  
  /* Declare an empty array named cart to hold the items in the cart */
  const cart = [];
  
  /* Create a function named addProductToCart that takes in the product productId as an argument
    - addProductToCart should get the correct product based on the productId
    - addProductToCart should then increase the product's quantity
    - if the product is not already in the cart, add it to the cart
  */
  function addProductToCart(productID) {
    let productFound = products.find(product => products.productID === productID);
    if (productFound.quantity === 0) {
      cart.push(productFound);
      productFound.quantity = 1;
    } else {
      productFound.quantity += 1;
    }
  };
  
  /* Create a function named increaseQuantity that takes in the productId as an argument
    - increaseQuantity should get the correct product based on the productId
    - increaseQuantity should then increase the product's quantity
  */
  function increaseQuantity(productID) {
    let productFound = products.find(product => products.productID === productID);
    if (productFound.quantity >= 0) {
      productFound.quantity += 1;
    }
  };
  
  /* Create a function named decreaseQuantity that takes in the productId as an argument
    - decreaseQuantity should get the correct product based on the productId
    - decreaseQuantity should decrease the quantity of the product
    - if the function decreases the quantity to 0, the product is removed from the cart
  */
  function decreaseQuantity(productID) {
    let productFound = products.find(product => products.productID === productID);
    if (productFound.quantity >= 1) {
      productFound.quantity -= 1;
      if (productFound.quantity === 0) {
      remove = cart.indexOf(productFound)
      cart.splice(remove, 1);
      }
    } else {
      remove = cart.indexOf(productFound);
      cart.splice(remove, 1);
    };
  };
  
  /* Create a function named removeProductFromCart that takes in the productId as an argument
    - removeProductFromCart should get the correct product based on the productId
    - removeProductFromCart should update the product quantity to 0
    - removeProductFromCart should remove the product from the cart
  */
  function removeProductFromCart(productID) {
    let productFound = products.find(product => products.productID === productID)
    if (!productFound) {
      remove = cart.indexOf(productFound);
      cart.splice(remove, 1);
      productFound.quantity = 0;
    }
  };
  
  
  /* Create a function named cartTotal that has no parameters
    - cartTotal should iterate through the cart to get the total of all products
    - cartTotal should return the sum of the products in the cart
  */
  function cartTotal() {
    cart.forEach(function (element) {
      cartSum = cartSum + (element.price * element.quantity);
      return cartSum
    });
  };
  
  /* Create a function called emptyCart that empties the products from the cart */
  function emptyCart() {
    cart.splice(0, cart.length);
  };
  
  /* Create a function named pay that takes in an amount as an argument
    - pay will return a negative number if there is a remaining balance
    - pay will return a positive number if money should be returned to customer
  */
  let totalPaid = 0
  
  function pay(amount) {
    totalPaid += amount;
    return (totalPaid -= cartTotal);
  };
  
  /* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/
  
  
  /* The following is for running unit tests. 
     To fully complete this project, it is expected that all tests pass.
     Run the following command in terminal to run tests
     npm run test
  */
  
  module.exports = {
    products,
    cart,
    addProductToCart,
    increaseQuantity,
    decreaseQuantity,
    removeProductFromCart,
    cartTotal,
    pay, 
    emptyCart,
    /* Uncomment the following line if completing the currency converter bonus */
    // currency
  }