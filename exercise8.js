// Exercise 8: Random Quote
// File: exercise8.js
// Description: Displays a random quote from a JSON file.

//fetch("quotes.json")
fetch("quotes.json")
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to load quotes.json");
        }
        return response.json();
    })
    .then(quotes => {
        let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        document.getElementById("quote").innerText = `${randomQuote.text} - ${randomQuote.author}`;
    })
    .catch(error => console.error("Error fetching quotes:", error));


