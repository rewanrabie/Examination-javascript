var totalTime = .10 * 60;

var timeview = document.getElementById("time");
var actionLine = document.querySelector(".action");

var timer = setInterval(function () {
  totalTime--;

  var minutes = Math.floor(totalTime / 60);
  var seconds = totalTime % 60;

  timeview.textContent = minutes + ":" + (seconds < 10 ? "0" + seconds : seconds);

  actionLine.style.width = (totalTime / (15 * 60)) * 100 + "%";

  if (totalTime <= 0) {
    
    // endQuiz(true,"../resultPage/index.html");
    window.location.href="../resultPage/index.html"
  }
}, 1000);


