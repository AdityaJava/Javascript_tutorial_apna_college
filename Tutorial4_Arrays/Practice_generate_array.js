let number = prompt("Enter number to generate array till that number");

let numberArr = [];

for (let i = 1; i <= number; i++) {
    numberArr.push(i);
}

console.log(numberArr);

/////////

let sum = numberArr.reduce((result, currentValue) => {
    return result + currentValue;
})

console.log(`Sum of ${numberArr} = ${sum}`);


let multiplication = numberArr.reduce((result, currentValue) => {
    return result = result * currentValue;
});

console.log(`Multiplication of ${numberArr} = ${multiplication}`);
