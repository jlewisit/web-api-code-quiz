// Adding variables
var highScore = 0;
var currentScore = 0;
var timeLeft = 30;
var arrayOfQuestions = [
{
    question: "Question number 1?",
    answer: [
      "Answer A", 
      "Answer B",  
      "Answer C", 
      "Answer D"
    ],
    correctAnswer: "Answer A",
},
{
question: "Inside which HTML element do we put the JavaScript?", 
answer: [
  "<js>", 
  "<script>", 
  "<scripting>", 
  "<javascript>"
],
correctAnswer: "<js>",
},
 { 
  question: "Where is the correct place to insert a JavaScript?", 
  answer: [
    "The <body> section", 
    "The <head> section", 
    "Both the <head> section and the <body> section are correct", 
    "None of the above"
  ],
  correctAnswer: "The <body> section",
},
];

// Button element for each answer with button text = arrayOfQuestions[index].answer[i]
for (var i = 0; i < 5; i++) {
  var answerText = arrayOfQuestions[qIndex].answer[i];
  var button = document.createElement('button');
  button.textContent = answerText;

  // Add data attribute called data-answer 
  var answerAtt = element.getAttribute(data-answer)
  // Assign each option text event listener for each button 
  answerAtt.addEventListener("click", function(event) {
  var element = event.target;
  }

// Begin Quiz
document.getElementById("begin").addEventListener("click", outputQuestion);

// Code for targeting something in nested structure of objects and arrays
var clickedAnswer = document.querySelector("#settings");
// Declare a index variable and initialize to 0
var qIndex = 0;

function getQuestion() {
  // within getQuestion() function create an element H2 
  var element = document.createElement("h2");
  // Add text to h2 using .innerHTML = arrayOfQuestions[index].question
  element.innerHTML = arrayOfQuestions[qIndex].question

  // Append the element to the parent element
  document.getElementById("questions").append(element);
  for (var i = 0; i < arrayOfQuestions; i++) {
  }
  // append h2 element to a div with an id question
}

function outputQuestion() {
    question = getQuestion();
    var questionText = document.getElementById("question");

    questionText.textContent = question;

}

document.querySelector("#choiceA").addEventListener("click", function(event) {
  var element = event.target;
  console.log(event.target);
 })


// //*************Timer********************
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