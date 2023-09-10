document.addEventListener('DOMContentLoaded', function () {
    // Get all game links with the class "box-btn"
    const gameLinks = document.querySelectorAll('.box-btn');

    // Add click event listeners to each game link
    gameLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            // Get the game information from the clicked link's parent element
            const gameBox = link.closest('.box');
            const gameTitle = gameBox.querySelector('h2').textContent;
            const gameImage = gameBox.querySelector('img').src;

            // Create an array to hold recent activities (if it doesn't exist yet)
            let recentActivities = JSON.parse(localStorage.getItem('recentActivities')) || [];

            // Add the current game to the recent activities list
            recentActivities.unshift({ title: gameTitle, imageUrl: gameImage });

            // Limit the list to a certain number of items (e.g., 5)
            const maxRecentItems = 5;
            recentActivities = recentActivities.slice(0, maxRecentItems);

            // Store the updated recent activities list in localStorage
            localStorage.setItem('recentActivities', JSON.stringify(recentActivities));

            // Redirect to the iframe page (if needed)
            const iframeUrl = link.getAttribute('href');
            if (iframeUrl) {
                window.location.href = iframeUrl;
            }
        });
    });
});
