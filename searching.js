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

    // Loop through all h2 elements in game cards and hide them when no results are found
    gameCards.forEach(function(card) {
        var h2 = card.querySelector('h2'); // Get the h2 element
        if (!resultsFound) {
            h2.style.display = 'none'; // Hide the h2 element if no results were found
        } else {
            h2.style.display = 'block'; // Show the h2 element if results were found
        }
    });

    // Hide or show the "No results found" message based on the flag
    if (resultsFound) {
        noResultsMessage.style.display = 'none'; // Hide the message if results were found
    } else {
        noResultsMessage.style.display = 'block'; // Show the message if no results were found
    }

    // Hide the <a> elements with class "view-more" if no results were found
    var viewMoreLinks = document.querySelectorAll('.view-more a');
    viewMoreLinks.forEach(function(link) {
        if (!resultsFound) {
            link.style.display = 'none';
        } else {
            link.style.display = 'block';
        }
    });

    // Hide the <a> elements with class "fa-star" and "fa-angles-right" if no results were found
    var starLinks = document.querySelectorAll('.fa-star');
    var anglesRightLinks = document.querySelectorAll('.fa-angles-right');
    if (!resultsFound) {
        starLinks.forEach(function(starLink) {
            starLink.style.display = 'none';
        });
        anglesRightLinks.forEach(function(anglesRightLink) {
            anglesRightLink.style.display = 'none';
        });
    } else {
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
