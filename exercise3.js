// Exercise 3: Number guessing game
// File: exercise3.js
// Description: Generates a random number and prompts the user to guess it.

function guessingGame() {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    let guess;
    do {
        guess = parseInt(prompt("Guess a number between 1 and 10:"));
        if (guess === randomNumber) {
            alert("Correct! You won a prize!");
            return;
        } else {
            let retry = confirm("Wrong guess! Do you want to try again?");
            if (!retry) return;
        }
    } while (guess !== randomNumber);
}
guessingGame();