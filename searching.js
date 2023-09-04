// Declare swiper variable
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

// Function to handle the search input
function searchGames() {
    // Disable swiper
    swiper.autoplay.stop();
    swiper.allowTouchMove = false;

    // Get the search input element and its value
    var input = document.querySelector('.search-txt');
    var searchTerm = input.value.trim().toLowerCase(); // Trim and convert to lowercase

    // Get the game cards
    var gameCards = document.querySelectorAll('.swiper-slide');

    // Loop through all game cards
    gameCards.forEach(function(card) {
        var title = card.querySelector('h2').textContent.toLowerCase(); // Get the game title

        // Check if the game title contains the search term
        if (title.includes(searchTerm) || searchTerm === '') {
            card.style.display = 'block'; // Show the card if it matches the search term or search term is empty
        } else {
            card.style.display = 'none'; // Hide the card if it doesn't match
        }
    });
}

// Function to re-enable swiper after searching
function enableSwiper() {
    swiper.autoplay.start();
    swiper.allowTouchMove = true;
}

// Add event listeners to the search input
var searchInput = document.querySelector('.search-txt');
searchInput.addEventListener('input', searchGames);
searchInput.addEventListener('blur', enableSwiper); // Re-enable swiper when the input loses focus



