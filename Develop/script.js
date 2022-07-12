// Adding variables
var highScore = ""
var correct = 0;
var incorrect = 0;
var questions = ["Inside which HTML element do we put the JavaScript? <js> <script> <scripting> <javascript>", "Where is the correct place to insert a JavaScript? The <body> section, The <head> section, Both the <head> section and the <body> section are correct" ];

// Adding eventListeners
document.getElementById("generate").addEventListener("click", askQuestions);
document.getElementById("next").addEventListener("click", askQuestions);

  function askQuestions() {
var four = Number(prompt("What is 2 +2?"));
if (four === 4) {
    alert("Correct!");
}
else if (four !== "4") {
        alert("Sorry, the correct answer was 4.");
}
  }

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