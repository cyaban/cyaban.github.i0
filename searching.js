function searchGames() {
    // Disable swiper
    swiper.autoplay.stop();
    swiper.allowTouchMove = false;

    // Get the search input element
    var input = document.querySelector('.search-txt');
    // Get the game cards
    var gameCards = document.querySelectorAll('.swiper-slide');

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
    
    // Re-enable swiper if the search input is empty
    if (searchTerm === '') {
        enableSwiper();
    }
}


