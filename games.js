// Get references to elements
const menu = document.querySelector('.menu-icon');
const navbar = document.querySelector('.menu');
const searchInput = document.querySelector('.search-txt');
const trendingContent = document.querySelector('.trending-content');

// Event listener for the menu icon
menu.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menu.classList.toggle('move');
});

// Initialize the Swiper
const swiper = new Swiper(".trending-content", {
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

// Event listener for the search input
searchInput.addEventListener('input', searchGames);

// Event delegation for favorite button clicks
trendingContent.addEventListener('click', (event) => {
    if (event.target.classList.contains('favorite-button')) {
        // Handle favorite button click here
        // You can add your favorite functionality if needed
        // const gameId = event.target.dataset.gameId;
        // addToFavorites(gameId);
    }
});

// Function to handle the search input
function searchGames() {
    const searchTerm = searchInput.value.toLowerCase();
    const gameCards = document.querySelectorAll('.swiper-slide');

    gameCards.forEach((card) => {
        const title = card.querySelector('h2').textContent.toLowerCase();

        if (title.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });

    const swiperInstance = trendingContent.swiper;

    if (searchTerm === '') {
        swiperInstance.autoplay.start();
    } else {
        swiperInstance.autoplay.stop();
    }
}



