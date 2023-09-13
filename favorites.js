<script>
    window.addEventListener('DOMContentLoaded', () => {
        const favoritesSlider = document.getElementById('favorites-slider');
        const queryParams = new URLSearchParams(window.location.search);
        const title = queryParams.get('title');
        const genre = queryParams.get('genre');
        const downloadURL = queryParams.get('downloadURL');
        const imageURL = queryParams.get('imageURL');

        // Create a slide for the favorite game
        const gameSlide = document.createElement('div');
        gameSlide.className = 'swiper-slide';
        gameSlide.innerHTML = `
            <div class="box">
                <img src="${imageURL}" alt="${title}">
                <div class="box-text">
                    <h2>${title}</h2>
                    <h3>${genre}</h3>
                    <a href="${downloadURL}" class="box-btn"><i class="fa-solid fa-download"></i></a>
                </div>
            </div>
        `;
        favoritesSlider.appendChild(gameSlide);
    });
</script>
