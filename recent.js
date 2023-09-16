document.addEventListener('DOMContentLoaded', function () {
    // Get all game links with the class "box-btn"
    const gameLinks = document.querySelectorAll('.box-btn');

    // Function to add a recent activity entry
    function addRecentActivity(title, imageUrl) {
        const recentContent = document.querySelector('.recent-content');

        // Create elements for the recent activity entry
        const recentActivityItem = document.createElement('div');
        recentActivityItem.classList.add('recent-activity-item');

        const image = document.createElement('img');
        image.src = imageUrl;
        image.alt = title;

        const titleElement = document.createElement('h3');
        titleElement.textContent = title;

        // Append elements to the recent activity entry
        recentActivityItem.appendChild(image);
        recentActivityItem.appendChild(titleElement);

        // Prepend the recent activity entry to the recent content container
        recentContent.prepend(recentActivityItem);
    }

    // Add click event listeners to each game link
    gameLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            // Get the game information from the clicked link's parent element
            const gameBox = link.closest('.box');
            const gameTitle = gameBox.querySelector('h2').textContent;
            const gameImage = gameBox.querySelector('img').src;

            // Add the recent activity entry to the "recent.html" page
            addRecentActivity(gameTitle, gameImage);
        });
    });
});
