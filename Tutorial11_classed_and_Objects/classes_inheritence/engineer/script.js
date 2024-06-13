class Person {
    constructor() {
        this.species = 'Homo Sapiens';
    }
    eat() {
        console.log('eat');
    }
    sleep() {
        console.log('Sleep');
    }
}


class Engineer extends Person {
    constructor(branch) {
        super();//This is compulsory for derived classes
        this.branch = branch;
    }

    work() {
        this.eat();
        console.log('Treat Machines');
    }
}

class Doctor extends Person {
    work() {
        console.log('Treat Patients');
    }
}

let eng = new Engineer();
let doc = new Doctor();

console.log(eng);
console.log(doc);