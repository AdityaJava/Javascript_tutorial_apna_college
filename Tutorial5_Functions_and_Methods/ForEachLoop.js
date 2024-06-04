/*
arr.forEach(callBackFunction)
A callBackFunction is a function passed as an argument to another function.
*/

let arr = ['a', 'b', 'c', 'd', 'e', 'f',];

arr.forEach((eArr) => {
    console.log(eArr);
});


/////////////////////
console.log('------------------------using variable------------------------')
const fArr = (eArr) => {
    console.log(eArr);
};

arr.forEach(fArr);
