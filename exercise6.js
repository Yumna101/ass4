// Exercise 6: Click Counter
// File: exercise6.js
// Description: Starts a counter on click, stops it on another click.

let counter = 0;
let interval;
document.addEventListener("click", () => {
    if (interval) {
        console.log(`Timer: Stop`);
        clearInterval(interval);
        interval = null;
    } else {
        console.log(`Timer: Start `);
        interval = setInterval(() => console.log(++counter), 1000);
    }
});
