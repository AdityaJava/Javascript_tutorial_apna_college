let marks = [1, 2, 3, 4];


let sum = marks.reduce((result, currentValue) => {
    return result + currentValue;
});

console.log(`Sum of ${marks} = ${sum}`);