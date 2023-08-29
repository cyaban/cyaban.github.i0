document.addEventListener('DOMContentLoaded', function () {
    // Retrieve user-defined panic key and website URL from local storage
    var storedPanicKey = localStorage.getItem('panicKey');
    var storedWebsiteURL = localStorage.getItem('websiteURL');

    // Initialize input fields for panic key and website URL
    var panicKeyInput = document.getElementById('panicKeyInput');
    var websiteURLInput = document.getElementById('websiteInput');

    // Set the input fields to the stored values if available
    if (storedPanicKey) {
        panicKeyInput.value = storedPanicKey;
    }
    if (storedWebsiteURL) {
        websiteURLInput.value = storedWebsiteURL;
    }

    // Add an event listener for any key press
    document.addEventListener('keydown', function (event) {
        // Get the user-defined panic key and website URL
        var panicKey = panicKeyInput.value.trim().toLowerCase();
        var websiteURL = websiteURLInput.value.trim();

        // Check if the entered key matches the panic key
        if (event.key.toLowerCase() === panicKey && websiteURL !== '') {
            // Redirect to the specified website URL
            window.location.href = websiteURL;
        }
    });

    // Add an event listener to update the stored values when the user changes them
    panicKeyInput.addEventListener('change', function () {
        localStorage.setItem('panicKey', panicKeyInput.value.trim().toLowerCase());
    });

    websiteURLInput.addEventListener('change', function () {
        localStorage.setItem('websiteURL', websiteURLInput.value.trim());
    });
});
