/* ===================== Array Vs Object ===================== */

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

/* const keys = Object.keys(shoppingCart);
console.log(keys); */

// The Object.keys() method returns an array with the keys of an object.
const properties = Object.keys(shoppingCart);
console.log(properties);

// The Object.values() method returns an array of the property values of an object.
const propertiesValue = Object.values(shoppingCart);
console.log(propertiesValue);

/* ======================================================================== 
   #1. This is hard way to looping to get object property & property values
   ======================================================================== */
// var properties = [ 'books', 'sunglass', 'keyboard', 'mouse', 'pen', 'shoes' 'bottle ' ]
for (var i = 0; i < properties.length; i++) {
  // console.log(properties[i]);
  var propertyName = properties[i];
  var propertiesValues = shoppingCart[propertyName];
  // console.log(propertyName, "=", propertiesValues);
}

/* ======================================================================== 
   #2. This is easy way to looping to get object property & property values
   ======================================================================== */
//  for in loop
for (var propertyName in shoppingCart) {
  const value = shoppingCart[propertyName];
  console.log(propertyName, value);
}



var friendsAge = {
  rahim: 12,
  samad: 45,
  karim: 78,
  jamal: 12,
  robi: 32,
  kazi: 14,
};

console.log(4%2);
console.log(98%2);
console.log(144%2);
console.log(1286%2);