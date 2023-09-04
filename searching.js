function searchGames() {
  // Get the search input element
  var input = document.querySelector('.search-txt');
  // Get the game cards
  var gameCards = document.querySelectorAll('.swiper-slide');

  // Convert the search input value to lowercase for case-insensitive search
  var searchTerm = input.value.toLowerCase();

  // Pause the Swiper autoplay while searching
  swiper.autoplay.stop();

  // Loop through all game cards
  gameCards.forEach(function (card) {
    var title = card.querySelector('h2').textContent.toLowerCase(); // Get the game title

    // Check if the game title contains the search term
    if (title.includes(searchTerm)) {
      card.style.display = 'block'; // Show the card if it matches the search term
    } else {
      card.style.display = 'none'; // Hide the card if it doesn't match
    }
  });

  // Resume the Swiper autoplay after the search
  swiper.autoplay.start();
}




