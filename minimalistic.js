function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourDeg = (hours % 12) * 30 + (minutes / 60) * 30;
    const minuteDeg = minutes * 6 + (seconds / 60) * 6;
    const secondDeg = seconds * 6;

    document.getElementById('hour').style.transform = `rotate(${90 + hourDeg}deg)`;
    document.getElementById('minute').style.transform = `rotate(${90 + minuteDeg}deg)`;
    document.getElementById('second').style.transform = `rotate(${90 + secondDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock();
