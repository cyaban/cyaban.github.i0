// ...

// Function to handle the search input
function searchGames() {
  // Get the search input element
  var input = document.querySelector('.search-txt');
  // Get the game cards
  var gameCards = document.querySelectorAll('.swiper-slide');

  // Convert the search input value to lowercase for case-insensitive search
  var searchTerm = input.value.toLowerCase();

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

  // Check if the search input has any content to stop autoplay
  if (searchTerm.trim() !== '') {
    swiper.autoplay.stop();
  } else {
    swiper.autoplay.start(); // Resume autoplay if the search input is empty
  }
}

// ...

// Pause autoplay when the search input is focused
searchInput.addEventListener('focus', function () {
  swiper.autoplay.stop();
});

// Resume autoplay when the search input is blurred
searchInput.addEventListener('blur', function () {
  swiper.autoplay.start();
});

// ...


