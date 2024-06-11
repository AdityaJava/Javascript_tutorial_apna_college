let gameImages = document.querySelectorAll('.img-tgs');

console.log('event');
console.log(gameImages);


const generateComputerChoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    let randomNumber = Math.floor(Math.random() * 3);
    return options[randomNumber];
}

//Generate computer choice
const playGame = (userChoice) => {
    let compChoice = generateComputerChoice();
    console.log('User choice =' + userChoice);
    console.log('Computer choice =' + compChoice);
}

gameImages.forEach(gameImage => {
    gameImage.addEventListener('click', (e) => {
        let userChoice = gameImage.getAttribute('id');
        playGame(userChoice);
    })
})