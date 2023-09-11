<!-- Wrap the elements you want to hide/show in a container div -->
<div id="ioGamesContainer">
    <h2>IO Games</h2>
    <h5 class="view-more">View more <a href="io.html"><i class="fa-solid fa-angles-right"></i></a></h5>
</div>

<!-- Rest of your HTML content -->

<script>
// Function to handle the search input
function searchGames() {
    // Get the search input element
    var input = document.querySelector('.search-txt');
    // Get the game cards
    var gameCards = document.querySelectorAll('.swiper-slide');
    // Get the element where you want to display the "No results found" message
    var noResultsMessage = document.querySelector('.no-results-message');
    
    // Get the container div
    var ioGamesContainer = document.getElementById('ioGamesContainer');

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
        ioGamesContainer.style.display = 'block'; // Show the container if results were found
    } else {
        noResultsMessage.style.display = 'block'; // Show the message if no results were found
        ioGamesContainer.style.display = 'none'; // Hide the container if no results were found
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
}

// Add an event listener to the search input
var searchInput = document.querySelector('.search-txt');
searchInput.addEventListener('input', searchGames);
</script>
