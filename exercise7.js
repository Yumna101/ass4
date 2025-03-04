// Exercise 7: Sum function
// File: exercise7.js
// Description: Function to sum numbers from 1 to n.

let n = parseInt(prompt("Enter an integer:"));

function sumToN(n) {
    return n * (n + 1) / 2;
}

console.log(`Sum from 1 to ${n}:`, sumToN(n));


