// var currentWord = [];
// var answerWord = [];
// var lettersReset = "";
// var i;
// var guessesLeft = 15;


// // Array for the word bank of possible answers
// var wordAnswers = ["vapor", "wave", "test", "keyboard"];

// // Math function to randomly pick a word from the wordbank
// var answer = wordAnswers[Math.floor(Math.random()*wordAnswers.length)];

// // Variable that counts the number of guesses left

// document.getElementById("guesses-remain").innerHTML = guessesLeft;

// // Variable that counts the number of wins
// var wins = 0;
// document.getElementById("num-of-wins").innerHTML = wins;
    
// // Loop that creates empty spaces for the words
// for (i = 0; i < answer.length; i++) {
//     currentWord.push("__");
// }
// document.getElementById("active-word").innerHTML = currentWord.join(" ");

// //Function that will evaluate the position of a letter in the word
// function wordLetters(letter) {
//     var letterPos = new Array();
//     for (i = 0; i < answer.length; i++) {
//         if (answer[i] === letter)
//         letterPos.push(i);
//     }
//     return letterPos;
// }   

// //Return letters that arent guessed still
// function lettersToGuess() {
//     var i; 
//     var toGuess = 0;
//     for (i in currentWord) {
//         if (currentWord[i] === "__")
//             toGuess++;
//     }
//     return toGuess;
// }

// //Function to capture user input
// document.onkeyup = function (event) {
//     var letter = event.key.toLowerCase();
//     var lettersGuessed = letter;
//     var i;
//     var letterPos = wordLetters(lettersGuessed);
//     console.log(letter);


//     //if else comparing letter guessed with the current word
//     if (letterPos.length) {
//         for(i = 0; i < letterPos.length; i++) {
//             currentWord[letterPos[i]] = lettersGuessed;
//         }
//         document.getElementById("active-word").innerHTML = currentWord.join(" ");
//     } else {
//         // if (lettersGuessed.includes(letter)) {
//         //     return;
//         // }
//         document.getElementById("letters-guessed").innerHTML += lettersGuessed + " ";
//         guessesLeft--;
//         document.getElementById("guesses-remain").innerHTML = guessesLeft;
//     }

//     // If user correctly guesses word the game is reset
//     if (lettersToGuess() == 0) {
//         guessesLeft = 15;
//         document.getElementById("guesses-remain").innerHTML = guessesLeft;

//         document.getElementById("letters-guessed").innerHTML = lettersReset;

//         answer = wordAnswers[Math.floor(Math.random() * wordAnswers.length)];

//         currentWord = [];
//         for (i = 0; i < answer.length; i++) {
//         currentWord.push("__");
//         }
//         document.getElementById("active-word").innerHTML = currentWord.join(" ");
        
//         wins++;
//         document.getElementById("num-of-wins").innerHTML = wins;

//     }
    
//     //Resets game if out of guesses
//     if (guessesLeft === 0) {
//         guessesLeft = 15;
//         document.getElementById("guesses-remain").innerHTML = guessesLeft;

//         document.getElementById("letters-guessed").innerHTML = lettersReset;

//         answer = wordAnswers[Math.floor(Math.random() * wordAnswers.length)];

//         currentWord = [];
//         for (i = 0; i < answer.length; i++) {
//         currentWord.push("__");
//         }
//         document.getElementById("active-word").innerHTML = currentWord.join(" ");
//     }




    

// }
