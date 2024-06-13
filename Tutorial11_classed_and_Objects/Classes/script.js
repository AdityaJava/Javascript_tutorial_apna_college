class ToyotaCar {
    start() {
        console.log('Start');
    }
    stop() {
        console.log('stop');
    }

    setBrand(brand) {
        this.brandName = brand;
    }
}

let fortuner = new ToyotaCar();
fortuner.setBrand('Fortuner');
