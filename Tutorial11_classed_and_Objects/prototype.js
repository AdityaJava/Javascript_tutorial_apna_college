const employee = {
    calcTax() {
        return 'Tax Calculation is 10%';
    }
}

const aditya = {
    salary: 100000
}

const vishnu = {
    salary: 100000,
    calcTax() {
        return 'Tax Calculation is 20%';
    }
}


//Setting prototype means we can use other objects methods 
aditya.__proto__ = employee;
vishnu.__proto__ = employee;

//This will call prototype's method
console.log(aditya.calcTax(), 'for aditya');

//This will call objects method and not prototype's method
console.log(vishnu.calcTax(), 'for vishnu');