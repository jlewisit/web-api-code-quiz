// Adding variables
var highScore = "";
var question = "";
var correct = 0;
var incorrect = 0;
var answers = [];

//Timer
var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');

var message =
  'GAME_OVER';
var words = message.split(' ');

// Timer that counts down 
function countdown() {
  var timeLeft = 3;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft + ' seconds remaining';
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = '';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `displayMessage()` function
      displayMessage();
    }
  }, 1000);
}

// Displays the message one word at a time
function displayMessage() {
  var wordCount = 0;

  // Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var msgInterval = setInterval(function () {
    // If there are no more words left in the message
    if (words[wordCount] === undefined) {
      // Use `clearInterval()` to stop the timer
      clearInterval(msgInterval);
    } else {
      // Display one word of the message
      mainEl.textContent = words[wordCount];
      wordCount++;
    }
  }, 1000);
}

countdown();

// //  Selects carousel element
// var carousel = document.querySelector(".carouselbox");

// // Selects buttons using their parent carousel element
// var next = carousel.querySelector(".next");
// var index = 0;
// var currentQuestion;

// var questions = ["Inside which HTML element do we put the JavaScript? <js> <script> <scripting> <javascript>", "Where is the correct place to insert a JavaScript? The <body> section, The <head> section, Both the <head> section and the <body> section are correct"];

// function navigate(direction) {
//   index = index + direction;
//   if (index < 0) { 
//     index = questions.length - 1; 
//   } else if (index > questions.length - 1) { 
//     index = 0;
//   }
//   currentQuestion = questions[index];

// //   carousel.style.backgroundImage = "url('" + currenQuestion + "')";
// }

// // Clicking on image opens a new window containing the image
// carousel.addEventListener("click", function() {
//   window.location.href = questions[index];
// });

// // Clicking on next button displays next image in carousel
// next.addEventListener("click", function(event) {
//   // Stops event from bubbling up and new window opening
//   event.stopPropagation();

//   navigate(1);
// });

// // Adding eventListeners
// document.getElementById("next").addEventListener("click", askQuestions);
// document.getElementById("begin").addEventListener("click", outputQuestion);






// function createQuestion() {
//     for (var i = 0; i < questions.length; i++) {
//     }
//     return question;
//   }

// function outputQuestion() {
//     question = createQuestion();
//     var questionText = document.getElementById("question");

//     questionText.value = question;

//   }

//   function askQuestions() {
// var four = Number(prompt("What is 2 +2?"));
// if (four === 4) {
//     alert("Correct!");
// }
// else if (four !== "4") {
//         alert("Sorry, the correct answer was 4.");
// }
//   }

//   //Print stats with line breaks
//   window.alert(
//     "Stats:\nCorrect Answers:  " + correct  + "\nIncorrect Answers:  " + incorrect + "\nTies:  " + ties
//   )

//   //Ask user to take re-take quiz
//   var retake = window.confirm("Re-take quiz?");

//   //If user pressed okay, run function again
//   if (retake) {
//     correct = 0;
//     incorrect = 0;
//     takeQuiz();
//   }

//   // Run the quiz for the first time
//   takeQuiz
  
//   function printScore() {
//     document.getElementById("score").innerHTML = "<span class=`your score`>Your score:  " + yourScore + "</span><br><span class=`cpu score`>Computer's score:  " + cpuScore + "</span>;
//   }