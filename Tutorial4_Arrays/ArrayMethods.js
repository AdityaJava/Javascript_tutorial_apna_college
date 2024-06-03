/*
Methods of arrays push(), Pop(), toString(), concat()
*/
let krishnaNames = ['krishna', 'radhaVallabh', 'radhaKantKrishna', 'krish'];

krishnaNames.pop();

console.log(krishnaNames);

krishnaNames.push('vitthal');
console.log(krishnaNames);
console.log(krishnaNames.toString())

let radhaRaniNames = ['krishnaKanta', 'RadhaRani', 'vrindavaneshwari'];

let radhaKrishnaNames = krishnaNames.concat(radhaRaniNames);

console.log(radhaKrishnaNames);

/////////////////////////////
//Shift() unshift()

radhaKrishnaNames.unshift('KrishnaPreyasi');
console.log(radhaKrishnaNames);

radhaKrishnaNames.unshift('ABC');

console.log(radhaKrishnaNames);
radhaKrishnaNames.shift();
console.log(radhaKrishnaNames);
//////////////////////////////////

//slice() :- Gives slice of array it doesn't change original array
//splice() :- Gives slice of array it changes the original array
console.log('-----------------Slice Splice started-----------------');

let alphas = ['a', 'b', 'c', 'e', 't'];
console.log(alphas);
let alphaSlice = alphas.slice(0, 2);
console.log('After slice-----------------');
console.log('alphas', alphas);
console.log('alphas.slice(0, 2);', alphaSlice);

let alphaSplice = alphas.splice(0, 2);
console.log('After splice-----------------');
console.log('alphas.splice(0, 2);', alphaSplice);
console.log('alphas', alphas);