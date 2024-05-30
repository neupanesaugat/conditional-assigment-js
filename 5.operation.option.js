//? 5.Perform arithmetic operation based on the option provided.
//? Set two variables with numbers. Create another variable called
//? “option” which can be add/subtract/multiply/divide/power.
//? Based upon the value of the option. Perform appropriate
//? operation.

let num1 = 5;
let num2 = 4;
let option = "divide";

switch (option) {
  case "add":
    console.log(num1 + num2);
    break;
  case "subtract":
    console.log(num1 - num2);
    break;
  case "multiply":
    console.log(num1 * num2);
    break;
  case "divide":
    console.log(num1 / num2);
    break;
  case "power":
    console.log(num1 ** num2);
    break;
  default:
    console.log("Invalid Operation!");
}
