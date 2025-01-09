/* // if & else if er karbar chchhe protita condition dhore dhore check kore kore nicher dike jay. 
eta if else er ekta boishistho. Eitar bhalo alternative hochchhe - switch */
const color = "yellow";
if (color === "green") {
  console.log("You are a green friend");
} 
else if (color === "blue") {
  console.log("You are a blue friend");
} 
else if (color === "red") {
  console.log("You are a red friend");
} 
else if (color === "white") {
  console.log("You are a white friend");
} 
else if (color === "yellow") {
  console.log("You are a yellow himu friend");
} 
else {
  console.log("You are a black black friend");
}


// switch
switch(color){
    case "green":
        console.log("You are a green friend");
        break;
    case "blue":
        console.log("You are a blue friend");
        break;
    case "red":
        console.log("You are a red friend");
        break;
    case "white":
        console.log("You are a white friend");
        break;
    case "yellow":
        console.log("You are a yellow himu friend");
        break;
    default:
        console.log("You are a kala kala friend");
}



// Practise Task #1
function make_avg(int1, int2, int3){
    const total = int1 + int2 + int3;
    const average = total / 3;
    return average;
}

const num1 = 60;
const num2 = 58;
const num3 = 59;

var myAverage = make_avg(
    num1,
    num2,
    num3
  );
  
  console.log("My Average so far: ", myAverage);


