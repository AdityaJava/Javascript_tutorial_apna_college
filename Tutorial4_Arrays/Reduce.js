let marks = [1, 2, 3, 4];
//The return value is stored in result i:e first argument

let sum = marks.reduce((result, currentValue) => {
    return result + currentValue;
});

console.log(`Sum of ${marks} = ${sum}`);

//Find Largest element

let largestElement = marks.reduce((previous, current) => {
    return previous < current ? current : previous;
});

console.log(`Largest from  ${marks} is  ${largestElement}`);
