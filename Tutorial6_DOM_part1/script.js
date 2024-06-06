let number = prompt("Enter number to calculate it's square");
let result = document.getElementById('result');
result.innerText = result.innerText + (number * number);

///////////

let querySelectorResult = document.querySelector('#query-selector-result');
querySelectorResult.innerText = querySelectorResult.innerText + (number * number);


let divList = document.querySelectorAll('div');

for (let divs of divList) {
    divs.classList.add('box');
}