const Student = {
    fullName: 'Radha Krishna',
    age: 23,
    CGPA: 10,
    isPass: true
};

console.log(Student);
console.log(typeof Student);

//
console.log(Student.fullName);
console.log(Student["fullName"]);//Both will print fullName

/////update in object
Student.age = Student.age + 1;
console.log(Student.age);