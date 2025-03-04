// Exercise 2: Process a sentence
// File: exercise2.js
// Description: This script prompts the user for a sentence, counts the words, and displays them sorted alphabetically.

function processSentence() {
    let sentence = prompt("Enter a sentence:");
    let words = sentence.split(/\s+/).filter(word => word.length > 0);
    
    console.log(`Word count: ${words.length}`);
    console.log("Words in alphabetical order:");
    words.sort().forEach(word => console.log(word));
}
processSentence();