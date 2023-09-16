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
        var viewMore = card.querySelector('h5.view-more'); // Get the view more element

        // Check if the game title contains the search term and it's not the term you want to hide
        if (title.includes(searchTerm) && searchTerm !== 'fa-solid fa-star') {
            card.style.display = 'block'; // Show the card if it matches the search term
            resultsFound = true; // Set the flag to true since a result was found
        } else {
            card.style.display = 'none'; // Hide the card if it doesn't match

            // Hide the view more element
            if (viewMore) viewMore.style.display = 'none';

            // Check if the card contains an anchor with class "fa-solid fa-star" and hide it
            var starAnchor = card.querySelector('a i.fa-solid.fa-star');
            if (starAnchor) starAnchor.parentNode.style.display = 'none';
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

    // Hide or show the trending sections based on the flag
    var trendingSections = document.querySelectorAll('.trending.container');
    trendingSections.forEach(function(section) {
        if (!resultsFound) {
            section.style.display = 'none'; // Hide the section if no results were found
        } else {
            section.style.display = 'block'; // Show the section if results were found
        }
    });

    // Hide the <a> elements with class "view-more" if no results were found
    var viewMoreLinks = document.querySelectorAll('.view-more a');
    viewMoreLinks.forEach(function(link) {
        if (!resultsFound) {
            link.style.display = 'none';
        } else {
            link.style.display = 'block';
        }
    });

    // Hide the pagination if there is text in the search input
    var pagination = document.querySelector('.pagination');
    if (input.value.length > 0) {
        pagination.style.display = 'none';
    } else {
        pagination.style.display = 'block';
    }
}

// Add an event listener to the search input
var searchInput = document.querySelector('.search-txt');
searchInput.addEventListener('input', searchGames);

// Initially hide the copyright div
var copyrightDiv = document.querySelector('.copyright.container');
copyrightDiv.style.display = 'none';







