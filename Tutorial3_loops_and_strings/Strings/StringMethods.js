let str = 'Hare Krishna radhe krishna   ';
console.log(str.toUpperCase());

console.log(str.trim());


////////Below is not possible

let str1 = 'I love Radha Krishna';

str1[0] = 'W';  //This will not happen because strings are immutable

console.log(str1);

//Instead we use replace

str1 = str1.replace('I', 'w');
console.log(str1);