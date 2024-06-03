/*
Qs. Create an array to store companies -> “Bloomberg”, microsoft, uber, google, IBM, Netflix

a. Remove the first company from the array
b. Remove Uber & Add Ola in its place
c. Add Amazon at the end
*/

let companies = ['Bloomberg', 'microsoft', 'uber', 'google', 'IBM', 'Netflix'];
console.log(companies);

companies.shift();
console.log('After removing first element');
console.log(companies);

companies.splice(companies.indexOf('uber'), 1, 'Ola');
console.log('After Remove Uber & Add Ola in its place');
console.log(companies);

companies.push('Amazon');
console.log('After Add Amazon at the end');
console.log(companies);
