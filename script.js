// Function that runs the timer on quiz start
function startTimer(){
    var counter = 10;
    setInterval(function() {
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
  function start()
  {
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
      };

// Logic to run quiz questions

      function runQuestions () {
        alert("this ruNQuestions function works");
        span = document.getElementById("questionsHere");
        span.innerHTML = questions[0].Question;
        span2 = document.getElementById("optionsHere");
        span2.innerHTML = questions[0].Choices;
      };