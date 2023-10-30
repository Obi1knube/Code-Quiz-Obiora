

var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var questionElement = document.querySelector('.question');
var choicesElement = document.querySelector('.choices');
var scoreForm = document.querySelector('.score-form');

var timer;
var timerCount;



// Array of words the user will guess
var questions = ['What is the capital of Portugal?', 'What is the capital Kenya ?','In which continent is Ukrain? ']
var answers = ['Oporto','Nairobi','Europe']
var choices = [['Lagos','Oporto','Madeira', 'Madrid'],['Nairobi','Pretoria','Accra','Luanda'],['Africa','Asia','Europe','South America']] //array of arrays answer coices


// The startGame function is called when the start button is clicked
function startGame() {
  timerCount = 60;
  // Prevents start button from being clicked when round is in progress
  startButton.disabled = true;
  startTimer()
  renderQuestions()
}

var questionIndex= 0;

function renderQuestions(){
  var choice1 = document.createElement('li')
  var choice2 = document.createElement('li')
  var choice3 = document.createElement('li')
 var choice4 = document.createElement('li')
  questionElement.textContent = questions[0]
  choice1.textContent = choices[questionIndex][0]
  choice2.textContent = choices[questionIndex][1]
  choice3.textContent = choices[questionIndex][2]
  choice4.textContent = choices[questionIndex][3]

  // Clear previous choices
  choicesElement.innerHTML = ''; 

  choicesElement.append(choice1, choice2, choice3, choice4)

  
}

function checkAnswer(event) {
  console.log(event.target.textContent);

  // When the user selects a choice, we compare it to the correct answer
  if (event.target.textContent !== answers[questionIndex]) {
    timerCount-10;

   // Move to the next question
  questionIndex++;
  
    return;
     
  } else {
    alert('Correct!! The answer is ' + answers[questionIndex]);
  }

  // Move to the next question
  questionIndex++;

  // Check if all questions have been answered
  if (questionIndex === questions.length) {
    // Game over
    clearInterval(timer);
    alert('Game over!');
  } else {
    // Render the next question
    renderQuestions();
  }
}

// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
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
};



// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);

// Event listener to allow the user to choose an option
choicesElement.addEventListener('click', checkAnswer);

scoreForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const initials = initialsInput.value;
  const score = timerCount;
  // You can save the initials and score as needed, e.g., in localStorage
  console.log("Initials:", initials);
  console.log("Score:", score);
});