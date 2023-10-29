//*GIVEN I am taking a code quiz
//*WHEN I click the start button
//*THEN a timer starts and I am presented with a question
//*WHEN I answer a question
//*THEN I am presented with another question
//*WHEN I answer a question incorrectly
//*THEN time is subtracted from the clock
//*WHEN all questions are answered or the timer reaches 0
//*THEN the game is over
//*WHEN the game is over
//*THEN I can save my initials and my score

var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var questionElement = document.querySelector('.question')
var choicesElement = document.querySelector('.choices')

var timer;
var timerCount;



// Array of words the user will guess
var questions = ['What is the capital of Portugal?', 'What is the capital Kenya ?','In which continent is Ukrain? ']
var answers = ['Oporto','Nairobi','Europe']
var choices = [['Lagos','Oporto','Madeira', 'Madrid'],['Nairobi','Pretoria','Accra','Luanda']['Africa','Asia','Europe','South America']] //array of arrays answer coices


// The startGame function is called when the start button is clicked
function startGame() {
  timerCount = 10;
  // Prevents start button from being clicked when round is in progress
  startButton.disabled = true;
  startTimer()
  renderQuestions()
}

function renderQuestions(){
  var choice1 = document.createElement('li')
  var choice2 = document.createElement('li')
  var choice3 = document.createElement('li')
 var choice4 = document.createElement('li')
  questionElement.textContent = questions[0]
  choice1.textContent = choices[0][0]
  choice2.textContent = choices[0][1]
  choice3.textContent = choices[0][2]
  choice4.textContent = choices[0][3]

  choicesElement.append(choice1, choice2, choice3, choice4)

}

function checkAnswer(event){
  console.log(event.target.textContent)

// when the user selects choice, we compare it to the correct answer, if wrong, clock continues ticking 
      if (event.target.textContent !=answers[0]){
      return;
      
// if it's correct go on to the next questions, 
      }else{

  alert ('Correct!! The answer is '+ answers[0]);
  
            
  }
 }
// If timer is >0 keep going else stop the game and timer
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

// Event listener to allow the user to choose an option
choicesElement.addEventListener('click', checkAnswer);