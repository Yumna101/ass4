// Exercise 8: Random Quote
// File: exercise8.js
// Description: Displays a random quote from a JSON file.

//fetch("quotes.json")

let quotes = [
    { "text": "The only limit to our realization of tomorrow is our doubts of today.", "author": "Franklin D. Roosevelt" },
    { "text": "Do what you can, with what you have, where you are.", "author": "Theodore Roosevelt" },
    { "text": "Success is not final, failure is not fatal: it is the courage to continue that counts.", "author": "Winston Churchill" },
    { "text": "In the middle of every difficulty lies opportunity.", "author": "Albert Einstein" },
    { "text": "Believe you can and you're halfway there.", "author": "Theodore Roosevelt" },
    { "text": "It does not matter how slowly you go as long as you do not stop.", "author": "Confucius" },
    { "text": "Act as if what you do makes a difference. It does.", "author": "William James" },
    { "text": "Don't watch the clock; do what it does. Keep going.", "author": "Sam Levenson" },
    { "text": "Everything you’ve ever wanted is on the other side of fear.", "author": "George Addair" },
    { "text": "You must be the change you wish to see in the world.", "author": "Mahatma Gandhi" }
  ];

let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
document.getElementById("quote").innerText = `${randomQuote.text} - ${randomQuote.author}`;

