function search_game() {
  let input = document.getElementById("searchbar").value.toLowerCase();
  let x = document.getElementsByClassName("swiper-slide");

  for (let i = 0; i < x.length; i++) {
    let gameTitle = x[i].querySelector("h2").textContent.toLowerCase();
    if (!gameTitle.includes(input)) {
      x[i].style.display = "none";
    } else {
      x[i].style.display = "block";
    }
  }
}
