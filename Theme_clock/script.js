let stopwatchInterval;
let startTime;
let elapsedTime = 0;

function startStopwatch() {
    if (stopwatchInterval) return; //prevent multiple intervals
    startTime = Date.now() - elapsedTime; // adjust start time
    stopwatchInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        document.getElementById('stopwatch').innerText = formatTime(elapsedTime);
    }, 1000);
}

function stopStopwatch() {
    if (stopwatchInterval) {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
   }
}

function resetStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
    startTime = null;
    elapsedTime = 0;
    document.getElementById('stopwatch').innerText ='00:00:00';
}

function formatTime(milliseconds) {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(number) {
    return number.toString().padStart(2, '0');
}