let gameImages = document.querySelectorAll('.img-tgs');

const rock = 'rock';
const paper = 'paper'
const scissors = 'scissors';
let userScore = 0;
let compScore = 0;

const userChoiceToClass = new Map(
    [
        [rock, 'user-choice-stone'],
        [paper, 'user-choice-paper'],
        [scissors, 'user-choice-scissors']
    ]
);

const compChoiceToClass = new Map(
    [
        [rock, 'comp-choice-stone'],
        [paper, 'comp-choice-paper'],
        [scissors, 'comp-choice-scissors']
    ]
);


const displayNoneAll = () => {
    console.log('display none alls');
    let userChoices = document.querySelectorAll('.user-choices');
    userChoices.forEach(userChoice => {
        userChoice.classList.add('display-none');
    })
    console.log(userChoices);
    let compChoices = document.querySelectorAll('.comp-choices');
    compChoices.forEach(compChoice => {
        compChoice.classList.add('display-none');
    })
    console.log(compChoices);

}

const generateComputerChoice = () => {
    const options = [rock, paper, scissors];
    let randomNumber = Math.floor(Math.random() * 3);
    return options[randomNumber];
}

const checkWinner = (userChoice, compChoice) => {
    if (userChoice === compChoice) {
        return [userScore, compScore];
    }
    else {
        if (userChoice === rock) {
            if (compChoice === paper) {
                compScore++;
            }
            else if (compChoice === scissors) {
                userScore++;
            }
        }
        else if (userChoice === paper) {
            if (compChoice === rock) {
                userScore++;
            }
            else if (compChoice === scissors) {
                compScore++;
            }
        }
        else if (userChoice === scissors) {
            if (compChoice === paper) {
                userScore++;
            }
            else if (compChoice === rock) {
                compScore++;
            }
        }
    }
    return [userScore, compScore];
}

const printScore = (userScore, compScore) => {
    let userScoreTag = document.querySelector('#user-score');
    let compScoreTag = document.querySelector('#comp-score');
    userScoreTag.innerText = userScore;
    compScoreTag.innerText = compScore;
}

const printChoices = (userChoice, compChoice) => {
    let userChoiceclass = document.querySelector('#' + userChoiceToClass.get(userChoice));
    userChoiceclass.classList.remove('display-none');
    userChoiceclass.classList.add('display-block');
    console.log(userChoiceclass);
}

//Generate computer choice
const playGame = (userChoice) => {
    let compChoice = generateComputerChoice();
    printChoices(userChoice, compChoice);
    let scores = checkWinner(userChoice, compChoice);
    printScore(scores[0], scores[1]);
}
displayNoneAll();
gameImages.forEach(gameImage => {
    gameImage.addEventListener('click', (e) => {
        let userChoice = gameImage.getAttribute('id');
        playGame(userChoice);
    })
})