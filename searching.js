// Function to handle the search input
function searchGames() {
    // Get the search input element
    var input = document.querySelector('.search-txt');
    // Get the game cards
    var gameCards = document.querySelectorAll('.swiper-slide');

    // Convert the search input value to lowercase for case-insensitive search
    var searchTerm = input.value.toLowerCase();

    // Determine the number of matching game cards
    var matchingGameCards = [];

    // Loop through all game cards
    gameCards.forEach(function(card) {
        var title = card.querySelector('h2').textContent.toLowerCase(); // Get the game title

        // Check if the game title contains the search term
        if (title.includes(searchTerm)) {
            matchingGameCards.push(card);
        }

        // Reset card style and swiper if not matching
        card.style.display = 'none';
        card.swiper.disable(); // Disable swiper for all cards initially
    });

    // If there are 1 or 2 matching game cards, enable swiper for them
    if (matchingGameCards.length === 1 || matchingGameCards.length === 2) {
        matchingGameCards.forEach(function(card) {
            card.style.display = 'block'; // Show the card
            card.swiper.enable(); // Enable swiper for these cards
        });
    } else {
        // For more than 2 matching game cards, keep swiper disabled
        matchingGameCards.forEach(function(card) {
            card.style.display = 'block'; // Show the card
        });
    }
}

// Add an event listener to the search input
var searchInput = document.querySelector('.search-txt');
searchInput.addEventListener('input', searchGames);


