var numberofWins = 0
var numberoflosses = 0

var guessesLeft = 9
// var guessLetters = document.getElementById('guessLetters')
var computerGuess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var whatsTyped = [];

document.onkeypress = function(event) {
    var userGuess = event.key;
    
    whatsTyped.push(userGuess);
	var random = computerGuess[Math.floor(Math.random() * computerGuess.length - 1)];
    console.log(random);
    
    
    if (userGuess === random ) { numberofWins ++; whatsTyped = []; guessesLeft= 9;
    } else if (userGuess != random) {guessesLeft = guessesLeft -1;}
   
    if(guessesLeft === 0) {alert("You lost");  guessesLeft= 9; numberoflosses ++; whatsTyped = [];}
    
    var guessLetteres = "<p>You chose: " + whatsTyped + "</p>";
    var wins = "<p>Wins: " + numberofWins + "</p>";
    var losses = "<p>Losses: " + numberoflosses + "</p>";
    var guess = "<p>Guess Left: " + guessesLeft + "</p>";
   

    document.querySelector("#guessLetteres").innerHTML = guessLetteres;
    document.querySelector("#wins").innerHTML = wins;
    document.querySelector("#losses").innerHTML = losses;
    document.querySelector("#guessAmount").innerHTML = guess;
};



