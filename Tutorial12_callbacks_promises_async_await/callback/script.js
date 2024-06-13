function sum(a, b) {
    return a + b;
}

function calculator(a, b, sumCallback) {
    return sumCallback(a, b);
}

console.log(calculator(1, 2, sum));

///////////////////////////////////////


