document.addEventListener('DOMContentLoaded', function () {
    var storedPanicKey = localStorage.getItem('panicKey');
    var storedWebsiteURL = localStorage.getItem('websiteURL');

    var panicKeyInput = document.getElementById('panicKeyInput');
    var websiteInput = document.getElementById('websiteInput');

    // Set the input fields to the stored values if available
    if (storedPanicKey) {
        panicKeyInput.value = storedPanicKey;
    }
    if (storedWebsiteURL) {
        websiteInput.value = storedWebsiteURL;
    }

    document.addEventListener('keydown', function (event) {
        var panicKey = panicKeyInput.value.trim().toLowerCase();
        var pressedKey = event.key.toLowerCase(); // Convert pressed key to lowercase

        if (pressedKey === panicKey) {
            var websiteURL = websiteInput.value.trim();

            if (websiteURL !== '') {
                // Redirect to the entered URL
                window.location.href = websiteURL;

                localStorage.setItem('panicKey', panicKey);
                localStorage.setItem('websiteURL', websiteURL);
            }
        }
    });
});
