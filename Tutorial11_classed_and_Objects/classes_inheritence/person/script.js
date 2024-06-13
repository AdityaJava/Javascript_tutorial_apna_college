class parent {
    hello() {
        console.log('parent');
    }
}

//Child will override
class child extends parent {
    hello() {
        console.log('child');
    }
}


let childObj = new child();
childObj.hello();