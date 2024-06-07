let boxes = document.querySelectorAll('.box');

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
        if (turnO) {
            console.log(turnO);
            box.innerText = 'O';
            box.classList.add('o-background');
            turnO = false;
        }
        else {
            console.log(turnO);
            box.innerText = 'X';
            box.classList.add('x-background');
            turnO = true;
        }
        box.disabled = true;
    });
})


let reset = document.querySelector('.reset-btn');

reset.addEventListener('click', (e) => {
    console.log('reset clicked');
    boxes.forEach(box => {
        box.innerText = '';
    })
})
