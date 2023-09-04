var swiper = null; // Initialize swiper as null

// Function to handle the search input
function searchGames() {
  // ... (Your existing search function code)

  // Check if swiper is initialized to stop/start autoplay
  if (swiper !== null) {
    if (searchTerm.trim() !== '') {
      swiper.autoplay.stop();
    } else {
      swiper.autoplay.start();
    }
  }
}

// Pause autoplay when the search input is focused
searchInput.addEventListener('focus', function () {
  if (swiper !== null) {
    swiper.autoplay.stop();
  }
});

// Resume autoplay when the search input is blurred
searchInput.addEventListener('blur', function () {
  if (swiper !== null) {
    swiper.autoplay.start();
  }
});

// ... (Other parts of your code)

// Initialize swiper when needed (you can place this in an event handler, for example)
function initializeSwiper() {
  swiper = new Swiper('.swiper-container', {
    // swiper.js configuration options
  });
}

// Call initializeSwiper when you want to start swiper.js
// For example, after the page loads or when a specific event occurs
initializeSwiper();


