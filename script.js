// Function that runs the timer on quiz start
function startTimer(){
    var counter = 75;
    setInterval(function() {
      counter--;
      if (counter >= 0) {
        span = document.getElementById("count");
        span.innerHTML = counter;
      }
      if (counter === 0) {
          alert("Sorry, out of time!");
          clearInterval(counter);
      }
    }, 1000);
  }
  function start()
  {
      document.getElementById("count");
      startTimer();
  };