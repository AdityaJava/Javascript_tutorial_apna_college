function myFunction() {
    console.log('My FUnction');
}

function myFunction(name) {
    console.log(name);
}

myFunction();
myFunction('Krishna');

/////////////////////////
function sum(a, b) {
    let s = a + b;
    return s;
}

let s = sum(1, 3);
console.log(`sum of 1, 3 is ${s}`);