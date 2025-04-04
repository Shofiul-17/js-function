/* ===================== 
  Array Vs Object 
===================== */

// This is an array
var shoppingItems = ["Books", "Sunglass", "Shoes", "Pen"];

// This is an Object
/* var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25,
    shoes: 2
  }; */

// This is an array
var friendsAge = [12, 45, 78, 12, 32, 14];

// This is an Object
var friendsAge = {
  rahim: 12,
  samad: 45,
  karim: 78,
  jamal: 12,
  robi: 32,
  kazi: 14,
};
/* ========================================================== */

// This is an Object
var shoppingCart = {
  books: 3,
  sunglass: 1,
  keyboard: 5,
  mouse: 1,
  pen: 25,
  shoes: 2,
  bottle: 1,
};

// console.log(shoppingCart);

/* =====================================================================================
  Using Object.keys method you will get output all the properties name from an object.
====================================================================================== */
const keys = Object.keys(shoppingCart);
// console.log(keys);

/* =====================================================================================
  Using Object.values method you will get output all the properties value from an object.
===================================================================================== */
const values = Object.values(shoppingCart);
// console.log(values);



/* ============================================================================ 
   #1. This is the hard way to get object property & property values using loop
============================================================================ */
/* 
What is keys? keys means an array.
var keys = [ 'books', 'sunglass', 'keyboard', 'mouse', 'pen', 'shoes' 'bottle ' ]
*/
for (var i = 0; i < keys.length; i++){
  // console.log(keys[i]);
  // console.log(shoppingCart[])
}
for (var i = 0; i < keys.length; i++){
  var propertyName = keys[i];
  var propertyValue = shoppingCart[propertyName];
  console.log(propertyName, ":", propertyValue);
}



/* ======================================================================== 
   #2. This is easy way to looping to get object property & property values
======================================================================== */
//  for in loop
for (var propertyName in shoppingCart) {
  const value = shoppingCart[propertyName];
  // console.log(propertyName, value);
}
