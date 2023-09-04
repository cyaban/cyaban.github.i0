let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.menu');
menu.onclick = () => {
  navbar.classList.toggle('active');
  menu.classList.toggle('move');
};

var autoplayEnabled = true; // Flag to control autoplay

var swiper = new Swiper(".trending-content", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1068: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

const favoriteButtons = document.querySelectorAll('.favorite-button');
favoriteButtons.forEach(button => {
  button.addEventListener('click', addToFavorites);
});

function addToFavorites(event) {
  const gameId = event.target.dataset.gameId;

  const xhr = new XMLHttpRequest();
  xhr.open('POST', '/api/favorites', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({ gameId }));
}

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

// Initialize search functionality and autoplay state
searchGames();
