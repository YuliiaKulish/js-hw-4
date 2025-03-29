function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
let timerId = null;

const onClickStart = () => {
   timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startBtn.disabled = true;
stopBtn.disabled = false;
};

const onClickStop = () => {
    clearInterval(timerId);
    timerId = null;
    stopBtn.disabled = true;
    startBtn.disabled = false;
 };

 startBtn.addEventListener("click", onClickStart);
 stopBtn.addEventListener("click", onClickStop);