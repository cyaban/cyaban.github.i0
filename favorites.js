// favorites.js

function addToFavorites(title, genre, gameUrl, imageUrl) {
    const favoriteGames = JSON.parse(localStorage.getItem('favoriteGames')) || [];
    const gameData = { title, genre, gameUrl, imageUrl };
    favoriteGames.push(gameData);
    localStorage.setItem('favoriteGames', JSON.stringify(favoriteGames));
}

window.addEventListener('DOMContentLoaded', () => {
    const favoritesSlider = document.getElementById('favorites-slider');
    const favoriteGames = JSON.parse(localStorage.getItem('favoriteGames')) || [];

    favoriteGames.forEach((game) => {
        const gameSlide = document.createElement('div');
        gameSlide.className = 'swiper-slide';
        gameSlide.innerHTML = `
            <div class="box">
                <img src="${game.imageUrl}" alt="${game.title}">
                <div class="box-text">
                    <h2>${game.title}</h2>
                    <h3>${game.genre}</h3>
                    <a href="${game.gameUrl}" class="box-btn"><i class="fa-solid fa-download"></i></a>
                </div>
            </div>
        `;
        favoritesSlider.appendChild(gameSlide);
    });
});
