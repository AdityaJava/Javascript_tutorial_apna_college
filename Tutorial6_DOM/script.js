let number = prompt("Enter number to calculate it's square");
let innerHtmlTxt = document.getElementById('result').innerHTML;
document.getElementById('result').innerHTML = innerHtmlTxt + (number * number);