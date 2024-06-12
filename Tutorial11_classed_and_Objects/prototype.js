const employee = {
    calcTax() {
        console.log('Tax Calculation is 10%');
    }
}

const aditya = {
    salary: 100000
}

//Setting prototype means we can use other objects methods 

aditya.__proto__ = employee;

console.log(aditya.calcTax());