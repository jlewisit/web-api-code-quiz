// Adding variables
var highScore = 0;
var currentScore = 0;
var timeLeft = 30;
var arrayOfQuestions = [
{
    question: "Question number 1?",
    answer: [
      "Answer A", 
      "Answer B",  //index 1 to target correct answer
      "Answer C", 
      "Answer D"
    ],
    correctAnswer: 1,
},
{
question: "Inside which HTML element do we put the JavaScript?", 
answer: [
  "<js>", 
  "<script>", 
  "<scripting>", 
  "<javascript>"
],
correctAnswer: 0,
},
 { 
  question: "Where is the correct place to insert a JavaScript?", 
  answer: [
    "The <body> section", 
    "The <head> section", 
    "Both the <head> section and the <body> section are correct", 
    "None of the above"
  ],
  correctAnswer: 0,
},
];

// code for targeting something in nested structure of objects and arrays
var clickedAnswer = document.querySelector("#settings")
arrayOfQuestions[0].answer;

if (clickedAnswer.getAttribute("data-number") == arrayOfQuestions[0].correctAnswer) {
currentScore + 10;
console.log(currentScore);
}
else {
  //deduct seconds from timer
  console.log("incorrect");
}

document.getElementById("begin").addEventListener("click", displayQuestions);

function displayQuestions() {
  arrayOfQuestions = ("#placeholder");
  for (var i = 0; i < arrayOfQuestions.length; i++);
}

// //*************Timer********************
//*************Timer********************
var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');

var message =
  'GAME_OVER';
var words = message.split(' ');

// Timer that counts down 
function countdown() {
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

document.querySelector("#choiceA").addEventListener("click", function(event) {
  var element = event.target;
  console.log(event.target);
 })



// document.getElementById("begin").addEventListener("click", outputQuestion);

// function paramPrompts() {
//   if (lowerPrompt === false && upperPrompt === false && numbersPrompt === false && symbolsPrompt === false) {
//     alert("At least one character type must be selected");
//     return;
//     }
//     outputQuestion();
//   }

// function displayQuestion() {
//   for (let i = 0; i <  questions.length; i++) {
//     // questions[i];    
//   }
//   return question;
// }

// function outputQuestion() {
//   question = displayQuestion();
//   var questionText = document.getElementById("question");

//   questionText.value = question;
// }


// // Adding eventListeners
// document.getElementById("submit").addEventListener("click", askQuestions);
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


// //Write code to print all numbers from 1 to `num`
// //
// //1. create an array for numbers
// //2. calling a function to print to the console
// //3. making a loop
//   //3a. define the loop parameters
//   //3b. print each number into the console

//   var logNums = function(num) {
//     var numArray = [0,1,2];
//     console.log(numArray);
//     for (var i = 1; i <= num; i++) {
//       //code that the for loop does every time
//       console.log(i);
//     }
//     };
  
//   logNums(10);