var totalTime = 1 * 60;


var timeDisplay = document.getElementById("time-display");
var actionTimer = document.querySelector(".time-action");

var timer = setInterval(function () {
  totalTime--;

  var minutes = Math.floor(totalTime / 60);
  var seconds = totalTime % 60;


  timeDisplay.textContent = minutes + ":" + (seconds < 10 ? "0" + seconds : seconds);

  var action = (totalTime / 60) * 100; 

  actionTimer.style.width = action + "%";

  if (totalTime <= 0) {

    clearInterval(timer);
    window.location.href = "result.html"; 
  }
}, 1000);

