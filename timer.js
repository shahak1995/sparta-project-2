var timeLeft = 59;
var elem = document.getElementById('timer');

var timerId = setInterval(countdown, 1000);

function countdown() {
  if (timeLeft == 00 + 00) {
    clearTimeout(timerId);
    setTimeout(function () { alert("TIMES UP!"); }, 1000);

  } else {
    elem.innerHTML = timeLeft;
    timeLeft--;
  }
}




