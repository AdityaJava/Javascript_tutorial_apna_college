
/*
    Write a code which can give grades to students according to their scores
    80-100 A
    70-79 B
    60-69 C
    50-59 D
    0-49 E
*/

percentage = prompt("Enter students percentage");

console.log(percentage);
if (percentage >= 80 && percentage <= 100) {
    console.log("GRADE - A");
}

else if (percentage >= 70 && percentage <= 79) {
    console.log("GRADE - B");
}
else if (percentage >= 60 && percentage <= 69) {
    console.log("GRADE - C");
}
else if (percentage >= 50 && percentage <= 59) {
    console.log("GRADE - D");
}
else if (percentage >= 40 && percentage <= 49) {
    console.log("GRADE - E");
}
else {
    console.log("Poor performance");
}