// ...
gameCards.forEach(function(card) {
    var title = card.querySelector('h2').textContent.toLowerCase(); // Get the game title
    var starIcons = card.querySelectorAll('i.fa-solid.fa-star'); // Get all the star icons
    var viewMore = card.querySelector('h5.view-more'); // Get the view more element

    // Check if the game title contains the search term
    if (title.includes(searchTerm)) {
        card.style.display = 'block'; // Show the card if it matches the search term
        // Show the star icons and view more element
        starIcons.forEach(function(icon) {
            icon.style.display = 'block';
        });
        if (viewMore) viewMore.style.display = 'block';
    } else {
        card.style.display = 'none'; // Hide the card if it doesn't match
        // Hide the star icons and view more element
        starIcons.forEach(function(icon) {
            icon.style.display = 'none';
        });
        if (viewMore) viewMore.style.display = 'none';
    }
});
// ...





