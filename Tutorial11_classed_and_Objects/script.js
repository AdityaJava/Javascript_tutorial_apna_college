const student = {
    fullName: 'Krishna',
    marks: 100,
    printMarks: function () {
        console.log(`marks=${this.marks}`);
    },
    //This is recommended way
    printMarks2() {
        console.log(`marks=${this.marks}`);
    }
}


//Setting a prototype