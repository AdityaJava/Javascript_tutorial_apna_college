let marks = [98, 97, 56, 34, 90];

console.log(marks.length);

let hereos = ['Ram', 'Krishna', 'Hari', 'Vitthal'];
console.log(hereos);
console.log(hereos[1]);

//This will print values i:e Ram, Krishna etc
for (let hero of hereos) {
    console.log(hero);
}


//This will print keys i:e 0, 1 etc
for (let heroIndex in hereos) {
    console.log(heroIndex);
}