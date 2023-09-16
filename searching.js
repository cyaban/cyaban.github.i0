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

            // Hide the specific elements you mentioned
            var specificElements = card.querySelectorAll('h2, h5.view-more, a[href="io.html"]');
            specificElements.forEach(function(element) {
                element.style.display = 'none';
            });
        }
    });

    // Hide or show the "No results found" message based on the flag
    if (resultsFound) {
        noResultsMessage.style.display = 'none'; // Hide the message if results were found
        copyrightDiv.style.display = 'none'; // Hide the copyright div if results were found
    } else {
        noResultsMessage.style.display = 'block'; // Show the message if no results were found
        copyrightDiv.style.display = 'none'; // Hide the copyright div if no results were found
    }

    // ... (rest of the code remains the same)
}

// Add an event listener to the search input
var searchInput = document.querySelector('.search-txt');
searchInput.addEventListener('input', searchGames);

// Initially hide the copyright div
var copyrightDiv = document.querySelector('.copyright.container');
copyrightDiv.style.display = 'none';

// Initial hiding of the specific elements
var specificElements = document.querySelectorAll('.swiper-slide h2, .swiper-slide h5.view-more, .swiper-slide a[href="io.html"]');
specificElements.forEach(function(element) {
    element.style.display = 'none';
});
