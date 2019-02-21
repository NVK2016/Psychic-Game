
//Creates an array that lists out all of the options for the computer
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

//Creating variables to hold wins, losses  starting at 0 and guess left starting at 9
var wins = 0;
var losses = 0;
var noOfGuessLeft = 9;
var playersChoice = [];

// Create variables that hold references to the places in the HTML where we want to display things.

var userChoiceText = document.getElementById("userInput-text");

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var userInput = document.getElementById("userInput-text");
var guessLeftText = document.getElementById("guessLeft-text"); 
// var computerText = document.getElementById("computer-text");  

/// Display the user guesses, and wins/losses.
userInput.textContent =  "Your Guesses so far: " + playersChoice; 
winsText.textContent = "Wins: " + wins; 
lossesText.textContent = "Losses: " + losses; 
guessLeftText.textContent = "Guesses Left: " + noOfGuessLeft; 

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
 
        
    // Determines which key was pressed.
    var userGuess = event.key;
    console.log('userGuess ' + userGuess);

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log('computerGuess ' + computerGuess);

    //collecting all the player guesses in array 
    if ( userGuess !== null ) { 
    playersChoice.push(userGuess); } 

    //Main logic of the game 
    // if ( noOfGuessLeft !== 0 ){

    guessLeftText.textContent = "Guesses Left: " + noOfGuessLeft;
    // console.log("Guesses Left: " + (noOfGuessLeft ));

   
    // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
    
        if ((userGuess === computerGuess) ) {
            // Count the no. of Wins 
            wins++;
            //Resetting the array of guess so far 
            playersChoice = []; 
            //Resetting the value so player can restart the game again 
            noOfGuessLeft = 9; 
        } else if (noOfGuessLeft === 0 ){
            // Count the no. of losses 
            losses++;
            //Resetting the array of guess so far 
            playersChoice = []; 
            //Resetting the value so player can restart the game again 
            noOfGuessLeft = 9; 
        } 
        else {
            //Decrese the count of guesses 
            noOfGuessLeft -= 1;
        }
    // }

        /// Display the user guesses, and wins/losses with updated values.
        userInput.textContent =  "Your Guesses so far: " + playersChoice; 
        winsText.textContent = "Wins: " + wins; 
        lossesText.textContent = "Losses: " + losses; 
        guessLeftText.textContent = "Guesses Left: " + noOfGuessLeft; 
        // computerText.textContent = "Computer Guesses so far: " + computerGuess; 

    
};