let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.menu');
menu.onclick = () => {
    navbar.classList.toggle('active');
    menu.classList.toggle('move');
};

let swiper = initializeSwiper(); // Initialize Swiper

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

// Function to initialize Swiper
function initializeSwiper() {
    return new Swiper(".trending-content", {
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
}

// Function to handle the search input
function searchGames() {
    // Destroy the current Swiper instance
    if (swiper) {
        swiper.destroy();
    }

    // Get the search input element
    var input = document.querySelector('.search-txt');
    // Get the game cards
    var gameCards = document.querySelectorAll('.swiper-slide');

    // Convert the search input value to lowercase for case-insensitive search
    var searchTerm = input.value.toLowerCase();

    // Variable to keep track of the number of cards displayed
    var displayedCardCount = 0;

    // Loop through all game cards
    gameCards.forEach(function (card) {
        var title = card.querySelector('h2').textContent.toLowerCase(); // Get the game title

        // Check if the game title contains the search term
        if (title.includes(searchTerm)) {
            card.style.display = 'block'; // Show the card if it matches the search term
            displayedCardCount++;
        } else {
            card.style.display = 'none'; // Hide the card if it doesn't match
        }
    });

    // Reinitialize Swiper when the search is complete
    if (displayedCardCount > 0) {
        swiper = initializeSwiper();
    }
}

// Add an event listener to the search input to trigger search on input change
var searchInput = document.querySelector('.search-txt');
searchInput.addEventListener('input', searchGames);


