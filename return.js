// Declare a Function with two parameters - number1, number2

/* function add(number1, number2) {
  console.log(number1, number2); // This line optional - You can use this code to see the parameter values
  var sum = number1 + number2; // This line must - To add number1, number2 parameter
  return; // This return keyword line must - You must return. You can do 3 things after return:
  // #1. After return keyword you are not writing anything (Example - return;), when you call the 
    //   function it will return something or you will get anything as a output.

} */



/* ========================================================= */



// Declare a Function with two parameters - number1, number2 

/* function add(number1, number2) {
  console.log(number1, number2); 
  var sum = number1 + number2;
  return 15; // This return keyword line must - You must return.
  // #2. After return keyword you can write a value (Example - return 15;), when you call the 
     //  function it will return or you will get 15 value as a output

} */



/* ========================================================= */



// Declare a Function with two parameters - number1, number2 

/* function add(number1, number2) {
  console.log(number1, number2); 
  var sum = number1 + number2; 
  return sum; // This return keyword line must - You must return.
  // #3. After return keyword you can write a variable_name (Example - return sum;), when you 
     //  call the function it will return or you will get this variable value as a output

} */



/* ========================================================= */

// Call a function without return statement

// Declare a Function with two parameters - number1, number2 Without return keyword

/* function add(number1, number2) {
  console.log(number1, number2); 
  var sum = number1 + number2; 
  console.log(sum); // This line will be output sum variable value

}

add(45, 15); */



/* ========================================================= */



// If you Call a function without return statement and get Undefined output

// Declare a Function with two parameters - number1, number2 Without return keyword

/* function add(number1, number2) {
  console.log(number1, number2); 
  var sum = number1 + number2; 
  // console.log(sum); // This line will be output sum variable value

}

// add(45, 15);
var total = add(80, 20);
console.log('Total:', total); */



/* ========================================================= */



// If you Call a function with return statement and get Undefined output

// Declare a Function with two parameters - number1, number2 Without return keyword

/* function add(number1, number2) {
  console.log(number1, number2); 
  var sum = number1 + number2; 
  // console.log(sum); // This line will be output sum variable value
  return;

}

// add(45, 15);
var total = add(80, 20);
console.log('Total:', total); */



/* ========================================================= */



// Fix Undefined Output Issue in Function 

// Declare a Function with two parameters - number1, number2 Without return keyword

/* function add(number1, number2) {
  console.log(number1, number2); 
  var sum = number1 + number2; 
  // console.log(sum); // This line will be output sum variable value
  return sum;

}

// add(45, 15);
var total = add(80, 20);
console.log('Total:', total); */



/* ========================================================= */



// About Multiple Return Statements 

// Declare a Function with two parameters - number1, number2 Without return keyword

function add(number1, number2) {
  console.log(number1, number2); 
  var sum = number1 + number2; 
  // console.log(sum); // This line will be output sum variable value
  return sum;
  console.log('I need more cod');
  return 15;
  return 'Hello Done';
  return 'I am hungry';

}

// add(45, 15);
var total = add(80, 20);
// console.log('Total:', total);



/* ========================================================= */



/* function birngSingara(money){
  var singaraPrice = 10;
  var quantity = money / singaraPrice;
  return quantity;

}

var singaras = birngSingara(200);
console.log('Total Singara Paichhi:', singaras); */



/* ========================================================= */



function birngSingara(money){
  var singaraPrice = 10;
  var quantity = money / singaraPrice;
  return quantity;

}

var myTaka = 150
var singaras = birngSingara(myTaka);
console.log('Total Singara Paichhi:', singaras);



/* ========================================================= */




// Declare a Function with two parameters - number1, number2 Without return keyword

/* function add(number1, number2) {
  console.log(number1, number2); 
  var sum = number1 + number2; 
  console.log(sum); // This line will be output sum


  
}

// add(45, 15); */



/* ========================================================= */

/* // Declare a Function with multiple parameters - a, b, c, d, e but assign arguments more then 5
function sum(a, b, c, d, e) {
  console.log(a, b, c, d, e);
  var sum = a + b + c + d + e;
  console.log('Total:', sum);
}

// Call the Function with more then five arguments (parameter values)
sum(15, 98, 56, 5, 9, 56, 78, 98); // define Or assign more then five argument (Parameter values) in the parenthesis. */

/* 
If you run the code then Expected Output: 
15 98 56 5 9
183
*/