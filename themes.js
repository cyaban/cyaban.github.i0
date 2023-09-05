// Function to save background image URL to local storage
document.getElementById('save-button').addEventListener('click', function () {
    const backgroundImageURL = document.getElementById('background-input').value;
    localStorage.setItem('customBackground', backgroundImageURL);
    // Apply the background image to your theme here
    document.body.style.backgroundImage = `url('${backgroundImageURL}')`;
});

// Function to reset background image and clear local storage
document.getElementById('reset-button').addEventListener('click', function () {
    localStorage.removeItem('customBackground');
    // Reset the background image to the default here
    document.body.style.backgroundImage = 'none';
    document.getElementById('background-input').value = '';
});

// Check if there's a saved background image in local storage
const savedBackground = localStorage.getItem('customBackground');
if (savedBackground) {
    // Apply the saved background image to your theme here
    document.body.style.backgroundImage = `url('${savedBackground}')`;
    document.getElementById('background-input').value = savedBackground;
}
