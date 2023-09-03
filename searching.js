function searchGame() {
  let input = document.getElementById("searchbar").value.toLowerCase();
  let games = document.querySelectorAll(".swiper-slide");

  games.forEach((game) => {
    let gameTitle = game.querySelector("h2").textContent.toLowerCase();
    if (gameTitle.includes(input)) {
      game.style.display = "block";
    } else {
      game.style.display = "none";
    }
  });
}
