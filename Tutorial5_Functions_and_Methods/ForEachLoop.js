/*
arr.forEach(callBackFunction)
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
