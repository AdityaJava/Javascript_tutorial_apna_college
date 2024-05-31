//Template Literals:- The way to have embeded expressions in strings. Note this is a string only
//This phenomenon is called string interpolation
let krishnaName = 'Krishna';
let radhaName = `radha ${krishnaName}`;

console.log(radhaName);

///////////
let obj = {
    item: "pen",
    price: 10
}

console.log(`The cost of ${obj.item} is ${obj.price}rs`);