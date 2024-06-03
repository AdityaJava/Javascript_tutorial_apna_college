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
