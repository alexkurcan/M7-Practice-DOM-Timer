let timer;
let count = 0;
let running = false;

const timerDisplay = document.getElementById("timerDisplay");
const startButton = document.getElementById("startTimer");
const stopButton = document.getElementById("stopTimer");
const resetButton = document.getElementById("resetTimer");

startButton.addEventListener("click", () => {
    if (!running) {
        running = true;
        timer = setInterval(() => {
            count++;
            timerDisplay.innerHTML = count;
        }, 1000);
    }
});

stopButton.addEventListener("click", () => {
    running = false;
    clearInterval(timer);
});

resetButton.addEventListener("click", () => {
    running = false;
    clearInterval(timer);
    count = 0;
    timerDisplay.innerHTML = count;
});
