/*
Find average of below
[85, 97, 44, 37, 76, 60]
*/

let studentMarks = [85, 97, 44, 37, 76, 60];

let sum = 0;
for (let mark of studentMarks) {
    sum += mark;
}

let average = sum / studentMarks.length;

console.log(`Average of 85, 97, 44, 37, 76, 60 is ${average}`);