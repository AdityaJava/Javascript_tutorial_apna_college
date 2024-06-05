let number = prompt("Enter number to calculate it's square");
let innerHtmlTxt = document.getElementById('result').innerHTML;
document.getElementById('result').innerHTML = innerHtmlTxt + (number * number);

///////////

let innerHtmlQueryTxt = document.querySelector('#query-selector-result').innerHTML;
document.querySelector('#query-selector-result').innerHTML = innerHtmlQueryTxt + (number * number);