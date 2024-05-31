/*
Create a game where you start with any random game number. Ask the user to keep
guessing the game number until the user enters correct value.
*/

randomNumber = 90;

let userInput;

userInput = prompt('Guess the Number!!');

while (userInput != randomNumber) {
    userInput = prompt('Wrong Number Guess again!!');
}

alert('Husshh you guessed it right');