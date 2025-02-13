function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourHand = document.getElementById('hour-hand');
    const minuteHand = document.getElementById('minute-hand');
    const secondHand = document.getElementById('second-hand');

    // Calculate angles for each hand
    const hourAngle = (hours % 12) * 30 + (minutes / 2); // 30 degrees per hour + 0.5 degrees per minute
    const minuteAngle = minutes * 6 + (seconds / 10); // 6 degrees per minute + 0.1 degrees per second
    const secondAngle = seconds * 6; // 6 degrees per second
     // Apply rotation to the hands
     hourHand.style.transform = `rotate(${hourAngle}deg)`;
     minuteHand.style.transform = `rotate(${minuteAngle}deg)`;
     secondHand.style.transform = `rotate(${secondAngle}deg)`;
   }

   // Update the clock every second
   setInterval(updateClock, 1000);
   updateClock(); // Initial call to set the clock immediately