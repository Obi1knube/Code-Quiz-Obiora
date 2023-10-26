
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");


var timer;
var timerCount;

// Array of words the user will guess
var words = ["variable","array", "modulus", "object", "function", "string", "boolean"];


// The startGame function is called when the start button is clicked
function startGame() {
  timerCount = 10;
  // Prevents start button from being clicked when round is in progress
  startButton.disabled = true;
   startTimer()
}


// The setTimer function starts and stops the timer and triggers winGame() and loseGame()

// if timer is >0 keep going else stop the game and timer
function startTimer() {
  // Sets timer
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
     // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timer);
        }
  }, 1000);
}

// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);