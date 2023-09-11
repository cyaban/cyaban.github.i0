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
    }
    
    // Hide the "IO Games" header and "View more" link if no results were found
    var ioGamesHeader = document.querySelector('h2');
    var viewMoreLink = document.querySelector('.view-more a');
    
    if (!resultsFound) {
        ioGamesHeader.style.display = 'none';
        viewMoreLink.style.display = 'none';
    } else {
        ioGamesHeader.style.display = 'block';
        viewMoreLink.style.display = 'block';
    }
}

// Add an event listener to the search input
var searchInput = document.querySelector('.search-txt');
searchInput.addEventListener('input', searchGames);

// Initial search to hide "IO Games" and "View more" if no results
searchGames();

