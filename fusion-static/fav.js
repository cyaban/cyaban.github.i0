// Get all the favorite buttons
const favoriteButtons = document.querySelectorAll('.favorite-button');

// Function to handle the favorite button click
function handleFavoriteClick(event) {
    const gameID = event.target.getAttribute('data-game-id');

    // Check if the game is already favorited
    if (favoriteGames.includes(gameID)) {
        // Remove the game from favorites
        favoriteGames = favoriteGames.filter(id => id !== gameID);
        alert('Removed from favorites');
    } else {
        // Add the game to favorites
        favoriteGames.push(gameID);
        alert('Added to favorites');
    }

    // You can store the favoriteGames array in localStorage for persistence
    localStorage.setItem('favoriteGames', JSON.stringify(favoriteGames));

    // Redirect to the favorites page
    window.location.href = 'favorites.html';
}

// Attach the click event listener to all favorite buttons
favoriteButtons.forEach(button => {
    button.addEventListener('click', handleFavoriteClick);
});

// Check if there are any favorites stored in localStorage
const storedFavorites = localStorage.getItem('favoriteGames');
if (storedFavorites) {
    favoriteGames = JSON.parse(storedFavorites);
    // You can update the UI to show which games are favorited based on favoriteGames array
}
