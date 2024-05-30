let number = prompt("Enter the number:");
console.log(number);
console.log(typeof number);

if (typeof number === 'string') {
    console.log('String type');
}

if (number % 5 === 0) {
    console.log(number, " is a multiple of 5")
}

else {
    console.log(number, " is a not a multiple of 5")
}