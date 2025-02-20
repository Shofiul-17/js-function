
/* 
Function
Arguments
Parameter
invoked - Means call
*/




/* // Declare a Function without parameter
function bringSingara () {
  // code to be executed
  console.log("Mama singara den");
}

// Call the Function without argument
bringSingara(); */



/* ================================ */


/* // Declare a Function with one parameter
function bringSingara (money) {
  // code to be executed
  console.log("Mama singara den");
}

// Call the Function with argument
bringSingara(300); // 300 is an Argument, argument means parameter value */


/* ================================ */
  
// Declare a Function with one parameter
function bringSingara (money) {
  // code to be executed
  console.log("Mama singara den");
  console.log(money);
}

// Call the Function with argument
bringSingara(300); // 300 is an Argument, argument means parameter value












/* ================================ */
/* ================================ */
// Milestone 4, Module 20-3 Add Function Parameter, Handle Multiple Parameters

/* // Declare a Function without parameter
function bringSingara20_3(){
  console.log('Ai nen singgara!');
}

// Call the Function without argument (parameter value)
bringSingara20_3(); */


/* ================================ */


/* // Declare a Function with one Parameter
function bringSingara20_3(money){
  console.log('Ai nen singgara!');
}

// Call the Function with Argument
bringSingara20_3(100); // 100 is an Argument, argument means parameter value */



/* ================================ */


/* // Declare a Function with one Parameter
function bringSingara20_3(money){
  console.log('Ai nen singgara!');
}

// Call the Function with Argument
bringSingara20_3(100); // 100 is an Argument, argument means parameter value */


/* ================================ */


/* If you use the parameter name "money" and you want to print argument (parameter value: 100) from outside of the function, 
you CANNOT get any output or print of the parameter value. It will give  you an error. */

/* // Declare a Function with one Parameter
function bringSingara20_3(money){
  console.log('Ai nen singgara!');
}

console.log(money) // Because you are trying to print from outside of the function, the expected output is an error.

// Call the Function with Argument
bringSingara20_3(100); // 100 is an Argument, argument means parameter value */



/* ================================ */



/* // Declare a Function with one Parameter
function bringSingara20_3(money){
  console.log(money)
  console.log('Ai nen singgara!');
}

// Call the Function with Argument
bringSingara20_3(100); // 100 is an Argument, argument means parameter value */



/* ================================ */



/* // Declare a Function with one Parameter
function bringSingara20_3(money){
  console.log('Taka dichhen:', money)
  console.log('Ai nen singgara!');
}

// Call the Function with Argument
bringSingara20_3(100); // 100 is an Argument, argument means parameter value */



/* ================================ */



// Declare a Function with one Parameter
function bringSingara20_3(money){
  console.log('Taka dichhen:', money);
  console.log('Ai nen singgara!');
}

/* If you would like, you can declare a variable with a value and then 
   use the variable name for the value of the argument.
 */
var taka = 300;


// Call the Function with variable name as a Argument
bringSingara20_3(taka); // ""taka"" variable name is an Argument, argument means parameter value



/* ================================ */



// Declare a Function with multiple parameters
function add (num1, num2){
  console.log("Going to add: ", num1, num2);
}

// Call the Function without arguments (parameter values)
add(); // Not define Or assign any value(s) in the parenthesis.

// If you run the code then Expected Output: Going to add:  undefined undefined



/* ================================ */



/* // Declare a Function with multiple parameters but call the function with only one argument (one parameter value)

// Declare a Function with multiple parameters
function add (num1, num2){
  console.log("Going to add: ", num1, num2);
}

// Call the Function with one arguments (parameter values)
add(125); // Define Or assign only one argument in the parenthesis.

// If you run the code then Expected Output: Going to add:  125 undefined */



/* ================================ */



// Declare a Function with multiple parameters
function add (num1, num2){
  console.log("Going to add: ", num1, num2);
}

// Call the Function with arguments (parameter values)
add(125, 96); // Argument (Parameter values) in the parenthesis.

// Expected Output: Going to add:  125 96



/* ================================ */



// Declare a Function with multiple parameters - a, b, c, d, e but No arguments
function sum(a, b, c, d, e) {
  console.log(a, b, c, d, e);
  var sum = a + b + c + d + e;
  console.log(sum);
}

// Call the Function without argument (parameter values)
sum(); // Not define Or assign any value(s) in the parenthesis.

/* 
If you run the code then Expected Output: 
undefined undefined undefined undefined undefined
NaN
*/



/* ================================ */




// Declare a Function with multiple parameters - a, b, c, d, e but three arguments
function sum(a, b, c, d, e) {
  console.log(a, b, c, d, e);
  var sum = a + b + c + d + e;
  console.log(sum);
}

// Call the Function with three arguments (parameter values)
sum(15, 98, 56); // Just define Or assign three argument value(s) in the parenthesis.

/* 
If you run the code then Expected Output: 
15 98 56 undefined undefined
NaN
*/



/* ================================ */




// Declare a Function with multiple parameters - a, b, c, d, e 
function sum(a, b, c, d, e) {
  console.log(a, b, c, d, e);
  var sum = a + b + c + d + e;
  console.log('Total:', sum);
}

// Call the Function with arguments (parameter values)
sum(15, 98, 56, 5, 9); // define Or assign argument (Parameter values) in the parenthesis.

/* 
If you run the code then Expected Output: 
15 98 56 5 9
183
*/



/* ================================ */



// Declare a Function with multiple parameters - a, b, c, d, e but assign arguments more then 5
function sum(a, b, c, d, e) {
  console.log(a, b, c, d, e);
  var sum = a + b + c + d + e;
  console.log('Total:', sum);
}

// Call the Function with more then five arguments (parameter values)
sum(15, 98, 56, 5, 9, 56, 78, 98); // define Or assign more then five argument (Parameter values) in the parenthesis.

/* 
If you run the code then Expected Output: 
15 98 56 5 9
183
*/




/* ================================ */
/* ================================ */






/* var numbers = [1, 8, 98, 45, 65, 71, 63];

console.log(numbers.slice(2, 4));
console.log(numbers.slice(2, 5)); */



/* // Declare a Function with multiple parameters - num1, num2
function add (num1, num2){
    console.log("Going to add: ", num1, num2);
  }

  // Call the Function without parameter values
//   add(125); 

// Declare a Function
function sum(a, b, c, d, e) {
  console.log(a, b, c, d, e);
  var sum = a + b + c + d + e;
  console.log(sum);
}

// Call the Function
sum(5, 98, 56, 5, 9, 19, 28, 40, 59);
// sum(15, 98, 56); */