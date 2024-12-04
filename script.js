const time = document.getElementById(`time`);
const start = document.getElementById(`start`);
const stop = document.getElementById(`stop`);
const reset = document.getElementById(`reset`);
const text = document.getElementById(`text`);

let time4intervals;
let timerTime = 0;
let inputedTime = 0;

time.addEventListener(`click`, function () {
  time.textContent = ``;
});

function startingTimer() {
  time.classList.remove("blink");
  text.textContent = `Remaining Time:`;
  text.style.color = `green`;
  const inputTime = parseInt(time.textContent.trim());
  if (isNaN(inputTime) || inputTime <= 0) {
    alert(`Please enter positive number for time`);
    return;
  }
  inputedTime = inputTime;
  timerTime = inputTime;
  clearInterval(time4intervals);
  time4intervals = setInterval(() => {
    timerTime--;
    time.textContent = timerTime;
    if (timerTime === 0) {
      clearInterval(time4intervals);
      setTimeout(() => {
        alert(`Time's Up!`);
      }, 1000);
    }
  }, 1000);
  start.removeEventListener(`click`, startingTimer);
}

function stopTimer() {
  clearInterval(time4intervals);
  text.textContent = `Timer has been stopped!`;
  text.style.color = `red`;
  time.classList.add("blink");
  start.addEventListener(`click`, startingTimer);
}

function resetTimer() {
  clearInterval(time4intervals);
  text.innerHTML = `Click <span style="color: green;">START</span> button to begin the countdown.`;
  text.style.color = `blue`;
  time.classList.remove("blink");
  timerTime = inputedTime;
  time.textContent = timerTime;
  start.addEventListener(`click`, startingTimer);
}

start.addEventListener(`click`, startingTimer);
stop.addEventListener(`click`, stopTimer);
reset.addEventListener(`click`, resetTimer);
