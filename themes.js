// Function to save the custom background to local storage
document.getElementById('save-button').addEventListener('click', function () {
    const backgroundImageUrl = document.getElementById('background-input').value;
    localStorage.setItem('customBackground', backgroundImageUrl);
    applyCustomBackground(backgroundImageUrl);
});

// Function to reset the custom background to the default
document.getElementById('reset-button').addEventListener('click', function () {
    localStorage.removeItem('customBackground');
    applyCustomBackground(null); // Reset to default
});

// Function to apply the custom background
function applyCustomBackground(backgroundImageUrl) {
    const body = document.body;
    if (backgroundImageUrl) {
        body.style.backgroundImage = `url('${backgroundImageUrl}')`;
        body.style.backgroundSize = 'cover';
    } else {
        // Reset to default background
        body.style.backgroundImage = 'none';
        body.style.backgroundColor = '#fff';
    }
}

// Check if a custom background is stored in local storage and apply it
const savedBackground = localStorage.getItem('customBackground');
if (savedBackground) {
    document.getElementById('background-input').value = savedBackground;
    applyCustomBackground(savedBackground);
}
