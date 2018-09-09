var add = function(num1, num2) {
  return num1 + num2;
};

var subtract = function(num1, num2) {
  return num1-num2;
};

var multiply = function(num1,num2) {
  return num1*num2;
};

var divide = function(num1,num2) {
  return num1/num2;
};


var inputNum1 = parseInt(prompt("Please enter the first number:"));
var inputNum2 = parseInt(prompt("Please enter the second number:"));

alert(add(inputNum1, inputNum2));
alert(subtract(inputNum1,inputNum2));
alert(multiply(inputNum1,inputNum2));
alert(divide(inputNum1,inputNum2));
