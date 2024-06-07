let boxes = document.querySelectorAll('.box');

let turnO = true;

let winningPatternsList = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const checkWinner = () => {
    console.log('checking winner');
    for (let winningPatterns of winningPatternsList) {
        if (boxes[winningPatterns[0]].innerText != '' && boxes[winningPatterns[1]].innerText != '' && boxes[winningPatterns[2]].innerText != '') {
            if (boxes[winningPatterns[0]].innerText === boxes[winningPatterns[1]].innerText
                &&
                boxes[winningPatterns[1]].innerText === boxes[winningPatterns[2]].innerText
                &&
                boxes[winningPatterns[0]].innerText === boxes[winningPatterns[2]].innerText
            ) {
                console.log(`Patter won ${boxes[winningPatterns[0]].innerText}`);
                return boxes[winningPatterns[0]].innerText;
            }
        }
    }
    return 'W';
}

boxes.forEach((box) => {
    box.addEventListener('click', (e) => {
        if (turnO) {
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
        let patternWon = checkWinner();
        if (patternWon !== 'W') {
            console.log(`Won patter = ${patternWon}`);
            boxes.forEach(box => {
                box.disabled = true;
            });
            let wonMessage = document.querySelector('#won-message');
            wonMessage.innerText = 'Player with Sign' + patternWon + 'won';
            wonMessage.style.display = 'block';
        }
    });
})


let reset = document.querySelector('.reset-btn');


reset.addEventListener('click', (e) => {
    boxes.forEach(box => {
        box.innerText = '';
        box.classList.remove('x-background');
        box.classList.remove('o-background');
        box.disabled = false;
    })
});

