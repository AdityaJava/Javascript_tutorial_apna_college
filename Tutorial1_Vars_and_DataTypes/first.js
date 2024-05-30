name = 'Radha Krishna..... from first.js';
age = 24;
price = 78.90;
console.log(name);
console.log(age);
console.log(price);

//////////////////////
//Never use 'var' to declare variables
var fAge = 89;
var fAge = 96; //Allowed but not a good practice
console.log(fAge);

let fName = 'Krishna';
//let fname = 'Narayan'; //--> This will produce error as same variable defined by let cannot be redeclared

const fLastName = 'Radha Krishna Yadav';
// fLastName = 'Radha Krishna Yadavvv'; //-->This will produce error on console (ReferenceError: fname is not defined)

console.log(fName);