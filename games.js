let menu=document.querySelector('.menu-icon');
let navbar=document.querySelector('.menu');
menu.onclick=()=>{
    navbar.classList.toggle('active');
    menu.classList.toggle('move');
}
var swiper = new Swiper(".trending-content", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
    delay:3000,
    disableOnInteraction: true,
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





