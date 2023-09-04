// Function to handle the search input
function searchGames() {
    // Get the search input element
    var input = document.querySelector('.search-txt');
    // Get the game cards
    var gameCards = document.querySelectorAll('.swiper-slide');
    var swiper = document.querySelector(".trending-content").swiper; // Get the Swiper instance

    // Convert the search input value to lowercase for case-insensitive search
    var searchTerm = input.value.toLowerCase();

    // Loop through all game cards
    gameCards.forEach(function(card) {
        var title = card.querySelector('h2').textContent.toLowerCase(); // Get the game title

        // Check if the game title contains the search term
        if (title.includes(searchTerm)) {
            card.style.display = 'block'; // Show the card if it matches the search term
        } else {
            card.style.display = 'none'; // Hide the card if it doesn't match
        }
    });

    // Check if the Swiper instance exists and the search input is not empty
    if (swiper && searchTerm.trim() !== '') {
        swiper.autoplay.stop(); // Stop Swiper autoplay
    } else if (swiper) {
        swiper.autoplay.start(); // Start Swiper autoplay if input is empty
    }
}

// Add an event listener to the search input
var searchInput = document.querySelector('.search-txt');
searchInput.addEventListener('input', searchGames);
