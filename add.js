
/* 
function add(num1, num2) {
    const sum = num1 + num2;
    return sum;
  }
  
  const result1 = add(12, 13);
  const result2 = add(35, 7);
  const finalResult = add(result1, result2);
  
  console.log(finalResult); */

  var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25,
    shoes: 2,
  };
  
  const keys = Object.keys(shoppingCart);
  console.log(keys);