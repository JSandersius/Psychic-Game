// Computer Randomly Picks a letter, user has to guess it.
// Need variables for wins, losses, chances left, computer choice, choices

var win = 0;
var loss = 0;
var guessesLeft = 10;
var guessTotal = "";

// creating an array with alphabet
var computerChoices = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

//runs at a key press 
document.onkeyup = function(event) {

    //computers guess, randomly chooses a number
    var computerGuess = computerChoices.charAt(Math.floor(Math.random() * compututerChoices.length));
    console.log(computerGuess);

    //Determines which key was pressed. 
    var userGuess = event.key;
    totalGuess = totalGuess + "\'" + userGuess + "\'  ";
    document.getElementById('lbl4').innerHTML = totalGuess;


    if (userGuess === computerGuess) {
        win++;
        document.getElementById('lbl1').innerHTML = win;
        totalGuess = "";
        document.getElementById('lbl3').innerHTML = guessesLeft;
    } else {
        guessesLeft--;
        document.getElementById('lbl3').innerHTML = guessesLeft;

        if (guessesLeft === 0) {

            loss++;
            document.getElementById('lbl2').innerHTML = loss;
            totalGuess = "";
            guessesLeft = 10;
        }
    }
};