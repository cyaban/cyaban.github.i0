// Selectors
const searchInput = document.querySelector('.search-txt');
const gameCards = document.querySelectorAll('.swiper-slide');
const noResultsMessage = document.querySelector('.no-results-message'); 
const copyrightDiv = document.querySelector('.copyright.container');
const trendingSection = document.getElementById('trending');

// Search function
function searchGames() {

  // Convert search term to lowercase
  const searchTerm = searchInput.value.toLowerCase();

  // Flag to track results found
  let resultsFound = false;

  // Loop through cards
  gameCards.forEach(card => {

    // Get title and star icons
    const title = card.querySelector('h2').textContent.toLowerCase();
    const starIcons = card.querySelectorAll('i.fa-solid.fa-star');

    // Check if title includes search term
    if (title.includes(searchTerm)) {
      card.style.display = 'block';
      resultsFound = true;
    } else {
      // Hide non-matching card and star icons
      card.style.display = 'none';
      starIcons.forEach(icon => {
        icon.style.display = 'none';
      });
    }

  });

  // Get visible cards
  const visibleCards = gameCards.filter(card => card.style.display !== 'none');

  // Hide trending section if no cards
  if (visibleCards.length === 0) {
    trendingSection.style.display = 'none'; 
  }

  // Show/hide no results message
  if (resultsFound) {
    noResultsMessage.style.display = 'none';
  } else {
    noResultsMessage.style.display = 'block';
  }

  // Show/hide copyright
  if (resultsFound) {
    copyrightDiv.style.display = 'none';
  } else {
    copyrightDiv.style.display = 'none'; 
  }

}

// Event listener
searchInput.addEventListener('input', searchGames);

// Hide initial elements
trendingSection.style.display = 'none';
copyrightDiv.style.display = 'none';

// Hide elements with .hide-on-search class
document.querySelectorAll('.hide-on-search').forEach(el => {
  el.style.display = 'none';
});
