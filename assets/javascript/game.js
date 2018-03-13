// Computer Randomly Picks a letter, user has to guess it.
// Need variables for wins, losses, chances left, computer choice, choices

// "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

var guessedLetters = [];

var letterToGuess = null;

var guessesLeft = 9;

var wins = 0;
var losses = 0;

var updateGuessesLeft = function() {
    document.querySelector("#guessesLeft").innerHTML = guessesLeft;
};

var updateLetterToGuess = function() {
    letterToGuess = letters[Math.floor(Math.random() * letters.length)];
};

var updateGuessesSoFar = function() {
    document.querySelector("#guessesSoFar").innerHTML = guessedLetters.join(", ");
};

var reset = function() {
    guessesLeft = 9;
    guessedLetters = []
    updateLetterToGuess();
    updateGuessesLeft();
    updateGuessesSoFar();

};

console.log("checking")

updateLetterToGuess();
updateGuessesSoFar();

document.onkeyup = function(event) {
    guessesLeft--;

    var letter = String.fromCharCode(event.keyCode).toLowerCase();

    guessedLetters.push(letter);

    updateGuessesLeft();
    updateGuessesSoFar();

    if (letter === letterToGuess) {

        wins++;
        document.querySelector("#win").innerHTML = wins;

        reset();
    }

    if (guessesLeft === 0) {

        losses++;
        document.querySelector("#loss").innerHTML = losses;

        reset();
    }

};