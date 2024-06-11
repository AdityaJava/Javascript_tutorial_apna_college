let gameImages = document.querySelectorAll('.img-tgs');

console.log('event');
console.log(gameImages);
const rock = 'rock';
const paper = 'paper'
const scissors = 'scissors';


const generateComputerChoice = () => {
    const options = [rock, paper, scissors];
    let randomNumber = Math.floor(Math.random() * 3);
    return options[randomNumber];
}

const checkWinner = (userChoice, compChoice) => {
    let userScore = 0;
    let compScore = 0;

    if (userChoice === compChoice) {
        return [userScore, compScore];
    }
    else {
        debugger;
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

//Generate computer choice
const playGame = (userChoice) => {
    let compChoice = generateComputerChoice();
    console.log('User choice =' + userChoice);
    console.log('Computer choice =' + compChoice);
    let scores = checkWinner(userChoice, compChoice);
    console.log('Scores = ' + scores);
}

gameImages.forEach(gameImage => {
    gameImage.addEventListener('click', (e) => {
        let userChoice = gameImage.getAttribute('id');
        playGame(userChoice);
    })
})