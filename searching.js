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

    const swiperInstance = swiper; // Use the swiper instance initialized earlier

    if (searchTerm === '') {
        swiperInstance.autoplay.start();
        swiperInstance.allowSlidePrev = true;  // Enable swiping
        swiperInstance.allowSlideNext = true;
        isSearching = false;
    } else {
        swiperInstance.autoplay.stop();
        swiperInstance.allowSlidePrev = false;  // Disable swiping
        swiperInstance.allowSlideNext = false;
        isSearching = true;
    }
}




