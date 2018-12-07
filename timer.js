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






// document.getElementById("timer").innerHTML =
//   00 + ":" + 10;
// startTimer();

// function startTimer() {
//   var presentTime = document.getElementById('timer').innerHTML;
//   var timeArray = presentTime.split(/[:]+/);
//   var m = timeArray[0];
//   var s = checkSecond((timeArray[1] - 1));
//   if (s == 59) { m = m - 1 }
//   document.getElementById('timer').innerHTML =
//     m + ":" + s;
//   setTimeout(startTimer, 1000);
//   if (m < 0) {
//     setTimeout(function () { alert("Times Up!"); }, 1000);
//   }

// }

// function checkSecond(sec) {
//   if (sec < 10 && sec >= 0) { sec = "0" + sec };
//   if (sec < 0) { sec = "59" };
//   return sec;
// }

