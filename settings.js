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

    // Function to check if the entered key matches the panic key
    function checkPanicKey(event) {
        // Get the user-defined panic key and website URL
        var panicKey = panicKeyInput.value.trim().toLowerCase();
        var websiteURL = websiteURLInput.value.trim();

        // Check if the entered key matches the panic key
        if (event.key.toLowerCase() === panicKey && websiteURL !== '') {
            // Redirect to the specified website URL
            window.location.href = websiteURL;
        }
    }

    // Add an event listener for any key press
    document.addEventListener('keydown', checkPanicKey);

    // Add an event listener to update the stored values when the user changes them
    panicKeyInput.addEventListener('change', function () {
        localStorage.setItem('panicKey', panicKeyInput.value.trim().toLowerCase());
    });

    websiteURLInput.addEventListener('change', function () {
        localStorage.setItem('websiteURL', websiteURLInput.value.trim());
    });

    // Add an event listener for a click anywhere on the page
    document.addEventListener('click', function (event) {
        // Check if the clicked element is not the panicKeyInput or websiteURLInput fields
        if (event.target !== panicKeyInput && event.target !== websiteURLInput) {
            // Check the panic key when the user clicks anywhere on the page
            checkPanicKey(event);
        }
    });
});
