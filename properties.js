/* ===========================================
How to Get Or Access specific Object Property?
=========================================== */
// Three different ways you can get or access specific object properly 

var shoppingCart = {
  books: 3,
  sunglass: 1,
  keyboard: 5,
  mouse: 1,
  pen: 25
};

console.log(shoppingCart);

// ==== Example # 1 : ==== Declare a object and access specific Object Property Value.
// When you know the specific property name, then you can use dot (.) notation to get the property value.
var penCount = shoppingCart.pen;
// console.log(penCount);


// ==== Example # 2: ==== Alternative System - When you know the specific property name, then you can use dot (.) notation to get the property value.
var penCount2 = shoppingCart["pen"];
// console.log(penCount2);


// ==== Example # 3: ==== When you know the specific property name, then you can create two variables. One of them to keep property_name and other one to keep property_Value to get the property value..
var propertyName = "mouse";
var propertyValue = shoppingCart[propertyName];
// console.log(propertyName, propertyValue);


/* =========================================== 
How to know Or Get All object properties name? 
=========================================== */
var properties = Object.keys(shoppingCart);
// console.log(properties);


/* ===========================================
How to set Or change object property value?
=========================================== */
// Three different ways you can set or change specific object property value.

// ==== Way # 1. Example # 1: ====
shoppingCart.mouse = 15;
// console.log(shoppingCart);

// ==== Way # 2. Example # 2: ====
shoppingCart["mouse"] = 29;
// console.log(shoppingCart);

// ==== Way # 3. Example # 3: ====
var propertyName = "mouse";
shoppingCart[propertyName] = 99;
console.log(shoppingCart);