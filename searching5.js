function searchGames() {
  // Get the search input element
  var input = document.querySelector('.search-txt');
  // Get the game cards
  var gameCards = document.querySelectorAll('.swiper-slide');
  // Get the element where you want to display the "No results found" message
  var noResultsMessage = document.querySelector('.no-results-message');
  // Get the copyright div
  var copyrightDiv = document.querySelector('.copyright.container');
  // Get all trending sections (including the main one)
  var trendingSections = document.querySelectorAll('.trending.container');

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

    // Check if the card contains an <a> element with href="io.html" and hide it if necessary
    var ioLink = card.querySelector('a[href="io.html"]');
    if (ioLink) {
      ioLink.style.display = 'none';
    }
  });

  // If no results were found, show the "No results found" message and copyright div
  if (!resultsFound) {
    noResultsMessage.style.display = 'block';
    copyrightDiv.style.display = 'block';
  }

  // Hide the "IO Games" heading and "View more" link
  var ioGamesHeading = document.querySelector('h2.io-games');
  var ioGamesViewMoreLink = document.querySelector('.io-games .view-more');
  ioGamesHeading.style.display = 'none';
  ioGamesViewMoreLink.style.display = 'none';
}
