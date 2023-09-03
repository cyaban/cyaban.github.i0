function search_game() {
    let input = document.getElementById("searchbarbottom").value.toLowerCase();
    let games = document.querySelectorAll('.swiper-slide');

    games.forEach(game => {
        const gameTitle = game.querySelector('h2').textContent.toLowerCase();
        const gameGenre = game.querySelector('h3').textContent.toLowerCase();

        if (gameTitle.includes(input) || gameGenre.includes(input)) {
            game.style.display = "block";
        } else {
            game.style.display = "none";
        }
    });
}

