let marks = [1, 2, 3, 4];


let sum = marks.reduce((result, currentValue) => {
    return result + currentValue;
});

console.log(`Sum of ${marks} = ${sum}`);

//Find Largest element

let largestElement = marks.reduce((previous, current) => {
    if (current > previous) {
        previous = current;
    }
    return previous;
});

console.log(`Largest from  ${marks} is  ${largestElement}`);
