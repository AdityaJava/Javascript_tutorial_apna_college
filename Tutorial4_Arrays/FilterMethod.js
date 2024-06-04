let marks = [98, 97, 56, 34, 90, 23, 14, 89, 32];


let passedMarks = marks.filter(eachMark => {
    return eachMark >= 35;
});

console.log(passedMarks);