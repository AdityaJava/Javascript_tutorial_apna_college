class ToyotaCar {

    constructor(brand) {
        console.log('Creating new object');
        this.brand = brand;
    }

    start() {
        console.log('Start');
    }
    stop() {
        console.log('stop');
    }

    setBrand(brand) {
        this.brand = brand;
    }
}

let fortuner = new ToyotaCar('Fortuner');

let lexus = new ToyotaCar();

console.log(fortuner);
console.log(lexus);
