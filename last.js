<script>
    // Function to set the last played game
    function setLastPlayedGame(gameName) {
        localStorage.setItem('lastPlayedGame', gameName);
    }

    // Function to get the last played game from local storage
    function getLastPlayedGame() {
        return localStorage.getItem('lastPlayedGame');
    }

    // Function to update the recent activity
    function updateRecentActivity() {
        const recentActivityElement = document.getElementById('recent-activity');
        const lastGameElement = document.getElementById('last-game');

        const lastPlayedGame = getLastPlayedGame();

        if (lastPlayedGame) {
            lastGameElement.textContent = lastPlayedGame;
        } else {
            lastGameElement.textContent = 'No recent activity';
        }
    }

    // Call the function to update recent activity when the page loads
    updateRecentActivity();
</script>
