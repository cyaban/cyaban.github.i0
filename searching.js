// Function to handle the search input
function searchGames() {
  // Get the search input element
  var input = document.querySelector('.search-txt');
  // Get the game cards
  var gameCards = document.querySelectorAll('.swiper-slide');

  // Convert the search input value to lowercase for case-insensitive search
  var searchTerm = input.value.toLowerCase();

  // Toggle autoplay based on search input
  if (searchTerm.length > 0 && autoplayEnabled) {
    swiper.autoplay.stop();
    autoplayEnabled = false;
  } else if (searchTerm.length === 0 && !autoplayEnabled) {
    swiper.autoplay.start();
    autoplayEnabled = true;
  }

  // Loop through all game cards
  gameCards.forEach(function (card) {
    var title = card.querySelector('h2').textContent.toLowerCase(); // Get the game title

    // Check if the game title contains the search term
    if (title.includes(searchTerm) || searchTerm.length === 0) {
      card.style.display = 'block'; // Show the card if it matches the search term or if the search term is empty
    } else {
      card.style.display = 'none'; // Hide the card if it doesn't match
    }
  });
}

// Add an event listener to the search input
var searchInput = document.querySelector('.search-txt');
searchInput.addEventListener('input', searchGames);
