// let startTime = new Date();
// let timer = document.querySelectorAll(".digits :not(#colon)");
// let all = document.querySelectorAll("digits");
// let timerInterval = setInterval(function () {
//   updateTimer();
// }, 10);
// function updateTimer(startTime, timer) {
//   let time = new Date();
//   let currentTime = 1;

//   for (i = 0; i < timer.lenght; i++) {
//     timer[i].textContent = currentTime[i];
//   }
// }

let timer = document.querySelectorAll(".digits :not(#colon)");

function updateTimer(startTime, timer) {
  let time = new Date();
  let currentTime;

  for (i = 0; i < timer.lenght; i++) {
    timer[i].textContent = currentTime[i];
  }
}
