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

// Events on quiz end (hide questions, show final screen, hide timer)
function endUserQuiz() {
  // alert("quiz over");
  document.getElementById("questionArea").classList.add("d-none");
  document.getElementById("finalScreen").classList.remove("d-none");
  document.getElementById("timerDiv").classList.add("d-none");
  printScore();
};

// Logic to run quiz questions
var questionIndex = 0;
var checkAnswer = document.getElementById("showCorrect");

function storeVar(el) {
  var amount = el.getAttribute("value");
    console.log(amount);

   //Check correctness, Question 1 
  if (questionIndex === 0 && amount === "2") {
      alert("correct");
  } else {
      alert("incorrect");
  }
  
  //Check correctness, Question 2
  if (questionIndex === 1 && amount === "2") {
    alert("correct");
  } else {
    alert("incorrect");
  }
  
  //Check correctness, Question 3
  if (questionIndex === 2 && amount === "3") {
    alert("correct");
  } else {
    alert("incorrect");
  }

  //Check correctness, Question 4
  if (questionIndex === 3 && amount === "2") {
    alert("correct");
  } else {
    alert("incorrect");
  }

  //Check correctness, Question 5
  if (questionIndex === 4 && amount === "3") {
      alert("correct");
  } else {
      alert("incorrect");
  }

  // Continue iterating through questions, if any left.  Otherwise, end quiz

  if (questionIndex < 4){
    questionIndex++;
    runQuestions();
  } else {
    endUserQuiz();
  }
};

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



// Click event each time a question is answered
function choiceClick(){

};

// Print out Final Score

function printScore() {
  span = document.getElementById("finalScore");
  span.innerHTML = counter;
}

// Save score to High Scores

function saveScore(){
  var initialsEl = document.querySelector("#initials");
  var userInitials = initialsEl.value.trim();
  var ulScores = document.getElementById("scoreList");
  var li = document.createElement("li");

  var saveHighScores = JSON.parse(window.localStorage.getItem("highscores")) || [];

  var newScore = {
    score: counter,
    initials: userInitials
  };

 saveHighScores.push(newScore);

  window.localStorage.setItem("highscores", JSON.stringify(saveHighScores));



    console.log(userInitials);
};


