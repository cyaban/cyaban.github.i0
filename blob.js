// Function to reset the input field and open a website in a new tab
function resetTab() {
    // Create a Blob URL for the site you want to open
    const siteURL = 'https://example.com'; // Replace with the URL you want to open

    // Fetch the website as a blob
    fetch(siteURL)
        .then(response => response.blob())
        .then(blob => {
            const blobURL = URL.createObjectURL(blob);

            // Open the Blob URL in a new tab
            const newTab = window.open(blobURL, '_blank');

            // Revoke the Blob URL after opening
            URL.revokeObjectURL(blobURL);
        })
        .catch(error => {
            console.error('Error fetching the site:', error);
        });
}

// Add event listener for the reset button
document.getElementById("resetBtn").addEventListener("click", resetTab);

