// Computer Randomly Picks a letter, user has to guess it.
// Need variables for wins, losses, chances left, computer choice, choices




// 
var letters = ["abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var guessedLetters = [];
var comChoice = null;
var guessesLeft = 10; // decrease this by one each wrong guess, if reach 0, restart game and add 1 to losses

var wins = 0;
var losses = 0;


//update guesses so far 
var updateGuessesLeft = function() {
    document.querySelector("#guessesLeft").innerHTML = guessedLeft;
};

var updateLetterToGuess = function() {
    letterToGuess = letters[Math.floor(Math.random() * letters.length)];
};

var updateGuessesSoFar = functio() {
    document.querySelector("#querySelector").innrerHTML = guessedLetters.join(",");
};


var reset = function() {
    guessesLeft = 9;
    guessesLetters = [];
    updateLetterToGuess();
    updateGuessesLeft();
    updateGuessesSoFar();
};

updateLetterToGuess();
updateGuessesLeft();

document.onkeyup = function(event) {
    guessesLeft--;

    var letter = String.fromCharCode(event.keyCode).toLowerCase();

    guessedLetters.push(letter);

    updateGuessesLeft();
    updateGuessesSoFar();

    if (letter === letterToGuess) {

        wins++;
        document.querySelector("#wins").innerHTML = wins;

        reset();
    }

    if (guessesLeft === 0) {

        lossess++;
        document.querySelector("#losses").innerHTML = losses;

        reset();
    }
};


//updateGuesses
//updateGuessesLeft
//updateGuessesSoFar
































// function myFunction() {
// 	var comChoice; 
// 	var wins = 0
// 	var losss = 0
// 	var chancess = 10; decreas this by one with each 

// 	var choices = [ ]

// 	var computerchoice = " "; 
// } 




// declared variables 
// create random numbers to grab aphabet 

// var userGuess  = 



// declared variables 
// create random numbers to grab aphabet 

// var 



// var str = "abcdefghijklmnopqrstuvwxyz";
// var res = str.charAt(Math.Random(Math.floor()*12)+1);