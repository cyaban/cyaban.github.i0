// Function to handle the search input
function searchGames() {
    // Get the search input element
    var input = document.querySelector('.search-txt');
    // Get the game cards
    var gameCards = document.querySelectorAll('.swiper-slide');
    // Get the <h2> element
    var h2Element = document.querySelector('.io-games h2');
    // Get the <i> element with class "fa-star"
    var starIcon = document.querySelector('.io-games .fa-star');
    // Get the <h5> element
    var h5Element = document.querySelector('.io-games .view-more');

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

    // Hide or show the <h2> element, <i> element, and <h5> element based on the flag
    if (resultsFound) {
        h2Element.style.display = 'block'; // Show the <h2> element if results were found
        starIcon.style.display = 'block'; // Show the <i> element with class "fa-star" if results were found
        h5Element.style.display = 'block'; // Show the <h5> element if results were found
    } else {
        h2Element.style.display = 'none'; // Hide the <h2> element if no results were found
        starIcon.style.display = 'none'; // Hide the <i> element with class "fa-star" if no results were found
        h5Element.style.display = 'none'; // Hide the <h5> element if no results were found
    }
}

// Add an event listener to the search input
var searchInput = document.querySelector('.search-txt');
searchInput.addEventListener('input', searchGames);
