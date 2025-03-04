// Exercise 4: Display current time and switch time zones
// File: exercise4.js
// Description: Displays the current time and switches between different time zones every 5 seconds.

function displayTime() {
    const cities = ["America/Toronto", "America/Los_Angeles", "Europe/Berlin", "Asia/Dubai", "Asia/Shanghai"];
    let index = 0;
    
    setInterval(() => {
        let now = new Date().toLocaleTimeString("en-US", { timeZone: cities[index], hour12: true });
        console.log(`Current time in ${cities[index]}: ${now}`);
        index = (index + 1) % cities.length;
    }, 5000);
}
displayTime();