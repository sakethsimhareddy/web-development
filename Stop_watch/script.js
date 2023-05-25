let play = document.querySelector("#startStopBtw");
let reset = document.querySelector("#reset");

let seconds = 0;
let minutes = 0;
let hours = 0;
let leadingseconds = 0;
let leadingmintes = 0;
let leadinghours = 0;
let timerInterval = 0;
let timerStatus = "stop";

function stopwatch() {
  seconds++;
  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;
  }
  if (minutes / 60 === 1) {
    minutes = 0;
    hours++;
  }
  if (seconds < 10) {
    leadingseconds = "0" + seconds.toString();
  } else {
    leadingseconds = seconds.toString();
  }
  if (minutes < 10) {
    leadingmintes = "0" + minutes.toString();
  } else {
    leadingmintes = minutes.toString();
  }
  if (hours < 10) {
    leadinghours = "0" + hours.toString();
  } else {
    leadinghours = hours.toString();
  }
  let displayTimer = document.getElementsByClassName("timer")[0];
  displayTimer.innerText = leadinghours + ":" + leadingmintes + ":" + leadingseconds;
}

play.addEventListener("click", function () {
  if (timerStatus === "stop") {
    timerInterval = window.setInterval(stopwatch, 1000);
    document.getElementById("startStopBtw").innerHTML = '<i class="fa fa-pause" id="pause"></i>';
    document.getElementById('startStopBtw').style.backgroundColor = "orange";
    timerStatus = "Started";
  } else {
    window.clearInterval(timerInterval);
    document.getElementById("startStopBtw").innerHTML = '<i class="fa fa-play" id="play"></i>';
    document.getElementById('startStopBtw').style.backgroundColor = "green";
    timerStatus = "stop";
  }
})
reset.addEventListener('click',function () {
    document.getElementsByClassName('timer')[0].innerText='00:00:00';
});
