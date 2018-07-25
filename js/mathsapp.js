
alert("Let's do some maths!");
var firstInput = prompt("Enter a number");
firstInput = parseFloat(firstInput); 
var secondInput = prompt("Enter another number");
secondInput = parseFloat(secondInput);

var message = "Maths with the numbers ";
message += firstInput + ' and ';
message += secondInput;

var secondMessage = firstInput + " + " + secondInput + " = ";
secondMessage += firstInput + secondInput + "<br>";
secondMessage += firstInput + " * " + secondInput + " = ";
secondMessage += firstInput * secondInput + "<br>";
secondMessage += firstInput + " / " + secondInput + " = ";
secondMessage += firstInput / secondInput + "<br>";
secondMessage += firstInput + " - " + secondInput + " = ";
secondMessage += firstInput - secondInput + "<br>";


document.write("<h1>" + message + "</h1>" + "<p>" + secondMessage + "</p>");



