let number = prompt("Enter the number:");
console.log(number);
console.log(typeof number);

if (typeof number === 'string') {
    console.log('String type');
}

/*
Type Coercion:

The line if (number % 5 === 0) performs a mathematical operation. 
In this case, JavaScript implicitly converts the number string to a number to evaluate the expression number % 5.
*/
if (number % 5 === 0) {
    console.log(number, " is a multiple of 5")
}

else {
    console.log(number, " is a not a multiple of 5")
}