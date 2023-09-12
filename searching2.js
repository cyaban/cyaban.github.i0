function searchGames() {
    // ... (previous code remains the same)

    // Loop through all game cards
    gameCards.forEach(function(card) {
        var title = card.querySelector('h2').textContent.toLowerCase(); // Get the game title

        // Check if the game title contains the search term
        if (title.includes(searchTerm)) {
            card.style.display = 'block'; // Show the card if it matches the search term
            resultsFound = true; // Set the flag to true since a result was found
        } else {
            card.style.display = 'none'; // Hide the card if it doesn't match
        }
    });

    // Hide or show the "No results found" message based on the flag
    if (resultsFound) {
        noResultsMessage.style.display = 'none'; // Hide the message if results were found
    } else {
        noResultsMessage.style.display = 'block'; // Show the message if no results were found

        // Hide the <a> element within the trending section
        var trendingSection = document.querySelector('#trending');
        var trendingLink = trendingSection.querySelector('a');
        if (trendingLink) {
            trendingLink.style.display = 'none';
        }
    }

    // ... (rest of the code remains the same)
}



