var mode = prompt("Please type in an operation (+, -, *, and /): ");
var num1 =  parseInt(prompt("Please type in a number."));
var num2 = parseInt(prompt("Please type in a second number."));


var add = function (num1, num2){
return num1+num2;
};

var subtract = function(num1, num2){
  return num1-num2;
};

var multiply = function(num1, num2){
  return num1*num2;
};

var divide = function(num1, num2){
  return num1/num2
}

alert(add(num1,num2));
alert(subtract(num1,num2));
alert(multiply(num1,num2));
alert(divide(num1,num2));
