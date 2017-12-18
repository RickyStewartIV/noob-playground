/// To find a random number between two user specified numbers. 
var LowerLimitInput = prompt('Enter a number to serve as your low limit.'); 
var lowerLimit = parseInt(LowerLimitInput);
var upperLimitInput = prompt('Enter a number to serve as your high limit.');
var upperLimit = parseInt(upperLimitInput);
var randomNumber = (Math.floor(Math.random() * (upperLimit - lowerLimit + 1) + lowerLimit));
var message = "<p>" + randomNumber + ' is a number between ' + lowerLimit + ' and ' + upperLimit + ".</p>";
document.write(message);