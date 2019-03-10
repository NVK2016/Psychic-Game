
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
var errorText = document.getElementById("error-text"); 
// var computerText = document.getElementById("computer-text");  
//In case if the player wins hsow image 
var img = document.getElementById("winImage");

/// Display the user guesses, and wins/losses.
userInput.textContent =  "Your Guesses so far: " + playersChoice; 
winsText.textContent = "Wins: " + wins; 
lossesText.textContent = "Losses: " + losses; 
guessLeftText.textContent = "Guesses Left: " + noOfGuessLeft; 

//Check for speical key value and return true if found 
function keyStrokeValues(keyValue){

    switch (keyValue){
    case 8: //backspace
    case 9: //tab
    case 13: //enter
    case 16: //shift
    case 17: //ctrl
    case 18: //alt
    case 19: // pause/break
    case 20: // caps lock 
    case 27: // escape
    case 32: // space key 
    case 33: // page up 
    case 34: // page down
    case 35: // end                 
    case 36: // home                
    case 37: // left arrow  
    case 38: // up arrow  
    case 39: // right arrow 
    case 40: // down arrow 
    case 45:// insert 
    case 46:// delete
    case 91:// meta key 

        return true; 
    default: 
        return false; 
    }
}

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

    // Determines which key was pressed.
    var userGuess = event.key;
    console.log('userGuess ' + userGuess + " "+ event.keyCode);

    //Check that user doesn't click special keys while guessing letters 
    // console.log(keyStrokeValues(event.keyCode)); 
    if (!keyStrokeValues(event.keyCode)) {  
        // Randomly chooses a choice from the options array. This is the Computer's guess.
        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        console.log('computerGuess ' + computerGuess);

        //collecting all the player guesses in array IN CASE OF INVALID OR NULL VALUE IT WONT ADD TO THE ARRAY LIST 
        if ( userGuess !== null ) { 
        playersChoice.push(userGuess); } 

        //Main logic of the game 
        // if ( noOfGuessLeft !== 0 ){

        guessLeftText.textContent = "Guesses Left: " + noOfGuessLeft;
        console.log("Guesses Left: " + (noOfGuessLeft ));

    
        // This logic determines the outcome of the game (win/loss), and resetting the array list & guess so far count 
            //IN CASE IF THE PLAYER ENTERS DATA IN CAPS converting it to lower case to compare values 
            if ((userGuess.toLowerCase() === computerGuess) ) {
                // Count the no. of Wins 
                wins++;
                //Resetting the array of guess so far 
                playersChoice = []; 
                //Resetting the value so player can restart the game again 
                noOfGuessLeft = 9; 
                //Display image if the player wins 
                img.style.display = "block";
            } else if (noOfGuessLeft === 0 ){
                // Count the no. of losses 
                losses++;
                //Resetting the array of guess so far 
                playersChoice = []; 
                //Resetting the value so player can restart the game again 
                noOfGuessLeft = 9; 
                img.style.display = "none";
            } 
            else {
                //Decrese the count of guesses 
                noOfGuessLeft -= 1;
                img.style.display = "none";
            }
            errorText.textContent = "" ; 
    }
    else { 
        errorText.textContent = " Please enter a valid letter " ; 
    }

    /// Display the user guesses, and wins/losses with updated values.
    userInput.textContent =  "Your Guesses so far: " + playersChoice; 
    winsText.textContent = "Wins: " + wins; 
    lossesText.textContent = "Losses: " + losses; 
    guessLeftText.textContent = "Guesses Left: " + noOfGuessLeft; 
    // computerText.textContent = "Computer Guesses so far: " + computerGuess; 

    
};