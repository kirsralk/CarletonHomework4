// Function that runs the timer on quiz start
var counter = 10;

function startTimer() {

  setInterval(function () {
    counter--;
    if (counter >= 0) {
      span = document.getElementById("count");
      span.innerHTML = counter;
    }
    if (counter === 0) {
      alert("Sorry, out of time!");
      clearInterval(counter);
      endUserQuiz();
    }
  }, 1000);
}
function start() {
  document.getElementById("count");
  startTimer();
};

// Logic for show/hide main divs during quiz

document.getElementById("startQuiz").addEventListener("click", startUserQuiz);

// Events on quiz start (start timer, hide main content, show question content)
function startUserQuiz() {
  //   alert("test test");
  document.getElementById("landingPage").classList.add("d-none");
  document.getElementById("questionArea").classList.remove("d-none");
  runQuestions();
}

function endUserQuiz() {
  // alert("quiz over");
  document.getElementById("questionArea").classList.add("d-none");
  document.getElementById("finalScreen").classList.remove("d-none");
  document.getElementById("timerDiv").classList.add("d-none");
  printScore();
};

// Logic to run quiz questions
var questionIndex = 0;

function runQuestions() {
  // alert("this ruNQuestions function works");
  var questionTitle = document.getElementById("questionsHere");


  questionTitle.innerHTML = questions[questionIndex].Question;
  op1 = document.getElementById("option1");
  op1.innerHTML = questions[questionIndex].Choices[0];
  op2 = document.getElementById("option2");
  op2.innerHTML = questions[questionIndex].Choices[1];
  op3 = document.getElementById("option3");
  op3.innerHTML = questions[questionIndex].Choices[2];
  op4 = document.getElementById("option4");
  op4.innerHTML = questions[questionIndex].Choices[3];

};
  //add event listener for clicked answer
  document.getElementById("questionArea").addEventListener("click",function(){
    //check if correct answer
    // alert("testing event listener");
    questionIndex++;
    runQuestions();
  });


// Click event each time a question is answered
function choiceClick(){

};

  // Move to Next Question
questionIndex++;

// Print out Final Score

function printScore() {
  span = document.getElementById("finalScore");
  span.innerHTML = counter;
}