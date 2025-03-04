// Exercise 1: Find the largest, smallest, and average of three numbers
// File: exercise1.js
// Description: This script prompts the user for three integers and displays the largest, smallest, and average rounded to two decimal places in the console.

function findNumbers() {
    let num1 = parseInt(prompt("Enter first integer:"));
    let num2 = parseInt(prompt("Enter second integer:"));
    let num3 = parseInt(prompt("Enter third integer:"));

    let numbers = [num1, num2, num3];
    let largest = Math.max(...numbers);
    let smallest = Math.min(...numbers);
    let average = (num1 + num2 + num3) / 3;
    
    console.log(`Largest: ${largest}`);
    console.log(`Smallest: ${smallest}`);
    console.log(`Average: ${average.toFixed(2)}`);
}
findNumbers();