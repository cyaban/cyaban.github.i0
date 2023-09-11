// Function to handle the search input
function searchGames() {
    // Get the search input element
    var input = document.querySelector('.search-txt');
    // Get the game cards
    var gameCards = document.querySelectorAll('.swiper-slide');
    // Get the element where you want to display the "No results found" message
    var noResultsMessage = document.querySelector('.no-results-message');

    // Convert the search input value to lowercase for case-insensitive search
    var searchTerm = input.value.toLowerCase();

    var resultsFound = false; // Flag to track if any results were found

    // Loop through all game cards
    gameCards.forEach(function(card) {
        var titleElement = card.querySelector('h2'); // Get the h2 element
        var titleText = titleElement.textContent.toLowerCase(); // Get the game title text

        // Check if the game title text contains the search term
        if (titleText.includes(searchTerm)) {
            card.style.display = 'block'; // Show the card if it matches the search term
            titleElement.style.display = 'block'; // Show the h2 element
            resultsFound = true; // Set the flag to true since a result was found
        } else {
            card.style.display = 'none'; // Hide the card if it doesn't match
            titleElement.style.display = 'none'; // Hide the h2 element
        }
    });

    // Display or hide the "No results found" message based on the flag
    if (resultsFound) {
        noResultsMessage.style.display = 'none'; // Hide the message if results were found
    } else {
        noResultsMessage.style.display = 'block'; // Show the message if no results were found
    }
}

// Add an event listener to the search input
var searchInput = document.querySelector('.search-txt');
searchInput.addEventListener('input', searchGames);

