function updateClock() {
    const timezones = ['UTC', 'America/New_York', 'Europe/London', 'Asia/Tokyo'];
    const clockDiv = document.getElementById('clock');
    clockDiv.innerHTML = '';

    timezones.forEach(timezone => {
        const date = new Date().toLocaleString('en-US', { timeZone: timezone });
        const time = new Date(date);
        clockDiv.innerHTML += `<div>${timezone}: ${time.toLocaleTimeString()}</div>`;
    });
}

setInterval(updateClock, 1000);
updateClock();
