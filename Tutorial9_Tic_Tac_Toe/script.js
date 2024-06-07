let boxes = document.querySelectorAll('.box');
console.log(boxes);

let turnO = true;

let winningPatters = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener('click', (e) => {
        if (box.innerText === '') {
            if (turnO) {
                box.innerText = 'O';
                turnO = false;
            }
            else {
                box.innerText = 'X';
                turnO = true;
            }
        }
    });
})


let reset = document.querySelector('.reset-btn');
console.log(reset);

reset.addEventListener('click', (e) => {
    console.log('reset clicked');
    boxes.forEach(box => {
        box.innerText = '';
    })
})
