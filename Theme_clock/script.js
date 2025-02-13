let timerInterval;
let totalSeconds = 0;
let isRunning = false;

document.addEventListener("DOMContentLoaded", function () {
    const timeInput = document.getElementById("timeInput");
    const startButton = document.getElementById("startTimer");
    const stopButton = document.getElementById("stopTimer");
    const resetButton = document.getElementById("resetTimer");
    const setButton = document.getElementById("setTimer");

    setButton.addEventListener("click", function () {
        let inputTime = timeInput.value.trim();
        console.log("Raw Input Time:", inputTime); // Debugging input value

        if (!isValidTimeFormat(inputTime)) {
            alert("Please enter time in HH:MM:SS format.");
            return;
        }

        let timeParts = inputTime.split(":").map(Number);
        if (timeParts.length === 3) {
            let [hours, minutes, seconds] = timeParts;
            totalSeconds = hours * 3600 + minutes * 60 + seconds;
        } else {
            console.error("Invalid time format");
            return;
        }

        if (totalSeconds <= 0) {
            alert("Set a valid time greater than 00:00:00.");
            return;
        }

        console.log("Computed totalSeconds:", totalSeconds);
        updateDisplay();
    });

    startButton.addEventListener("click", function () {
        console.log("Start Button clicked. Current totalSeconds(global):", totalSeconds);
        
        if (isRunning) return; // Prevent multiple timers
        if (totalSeconds <= 0) {
            console.error("Start Failed - totalSeconds is 0!");
            alert("Please set a valid time first.");
            return;
        }

        isRunning = true;
        timerInterval = setInterval(() => {
            if (totalSeconds <= 0) {
                clearInterval(timerInterval);
                isRunning = false;
                alert("Time is up!");
                return;
            }

            totalSeconds--;
            updateDisplay();
        }, 1000);
    });

    stopButton.addEventListener("click", function () {
        clearInterval(timerInterval);
        isRunning = false;
    });

    resetButton.addEventListener("click", function () {
        clearInterval(timerInterval);
        isRunning = false;
        totalSeconds = 0;
        updateDisplay();
    });

    function isValidTimeFormat(time) {
        const regex = /^\d{1,2}:\d{2}:\d{2}$/; 
        return regex.test(time);
    }

    function updateDisplay() {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        const displayTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
        timeInput.value = displayTime;
    }

    function pad(number) {
        return number.toString().padStart(2, "0");
    }
});
