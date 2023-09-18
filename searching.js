function searchGames() {
    // Get the search input element
    var input = document.querySelector('.search-txt');
    // Get the game cards
    var gameCards = document.querySelectorAll('.swiper-slide');
    // Get the element where you want to display the "No results found" message
    var noResultsMessage = document.querySelector('.no-results-message');
    // Get the copyright div
    var copyrightDiv = document.querySelector('.copyright.container');

    // Convert the search input value to lowercase for case-insensitive search
    var searchTerm = input.value.toLowerCase();

    var resultsFound = false; // Flag to track if any results were found

    // Loop through all game cards
    gameCards.forEach(function(card) {
        var title = card.querySelector('h2').textContent.toLowerCase(); // Get the game title
        var starIcons = card.querySelectorAll('i.fa-solid.fa-star'); // Get all the star icons
        var viewMore = card.querySelector('h5.view-more'); // Get the view more element

        // Check if the game title contains the search term and it's not the term you want to hide
        if (title.includes(searchTerm) && searchTerm !== 'fa-solid fa-star') {
            card.style.display = 'block'; // Show the card if it matches the search term
            resultsFound = true; // Set the flag to true since a result was found
        } else {
            card.style.display = 'none'; // Hide the card if it doesn't match
            // Hide the star icons and view more element
            starIcons.forEach(function(icon) {
                icon.style.display = 'none';
            });
            if (viewMore) viewMore.style.display = 'none';
            
            // Hide specific elements with class "hide-on-search"
            var specificElements = card.querySelectorAll('.hide-on-search');
            specificElements.forEach(function(element) {
                element.style.display = 'none';
            });
        }
    });

    // Hide or show the trending sections based on the flag
    var trendingSection = document.getElementById('trending');
    if (trendingSection) {
        trendingSection.style.display = resultsFound ? 'block' : 'none';
    }
}

// Add an event listener to the search input
var searchInput = document.querySelector('.search-txt');
searchInput.addEventListener('input', searchGames);
