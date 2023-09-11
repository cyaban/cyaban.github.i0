function searchGames() {
    // Get the search input element
    var input = document.querySelector('.search-txt');
    // Get the game cards
    var gameCards = document.querySelectorAll('.swiper-slide');
    // Get the element where you want to display the "No results found" message
    var noResultsMessage = document.querySelector('.no-results-message');
    // Get the specific <h2> element you want to hide the text of
    var ioGamesHeader = document.querySelector('.swiper-slide h2');
    
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
    noResultsMessage.style.display = resultsFound ? 'none' : 'block';
    
    // Hide or show the text within the specific <h2> element with the text "IO Games" based on the flag
    if (resultsFound) {
        ioGamesHeader.style.display = 'block'; // Show the text
    } else {
        ioGamesHeader.style.display = 'none'; // Hide the text
    }
    
    // Hide or show other elements based on the flag
    var viewMoreLinks = document.querySelectorAll('.view-more a');
    var starLinks = document.querySelectorAll('.fa-star');
    var anglesRightLinks = document.querySelectorAll('.fa-angles-right');
    
    if (!resultsFound) {
        viewMoreLinks.forEach(function(link) {
            link.style.display = 'none';
        });
        
        starLinks.forEach(function(starLink) {
            starLink.style.display = 'none';
        });
        
        anglesRightLinks.forEach(function(anglesRightLink) {
            anglesRightLink.style.display = 'none';
        });
    } else {
        viewMoreLinks.forEach(function(link) {
            link.style.display = 'block';
        });
        
        starLinks.forEach(function(starLink) {
            starLink.style.display = 'block';
        });
        
        anglesRightLinks.forEach(function(anglesRightLink) {
            anglesRightLink.style.display = 'block';
        });
    }
}

// Add an event listener to the search input
var searchInput = document.querySelector('.search-txt');
searchInput.addEventListener('input', searchGames);
