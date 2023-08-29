<script>
    document.addEventListener('DOMContentLoaded', function () {
        // Get references to DOM elements
        var panicKeyInput = document.getElementById('panicKeyInput');
        var websiteInput = document.getElementById('websiteInput');

        // Load stored values
        loadStoredValues();

        // Add event listener for keydown event
        document.addEventListener('keydown', function (event) {
            handleKeyPress(event);
        });

        // Function to load stored values from localStorage
        function loadStoredValues() {
            var storedPanicKey = localStorage.getItem('panicKey');
            var storedWebsiteURL = localStorage.getItem('websiteURL');

            // Set the input fields to the stored values if available
            if (storedPanicKey) {
                panicKeyInput.value = storedPanicKey;
            }
            if (storedWebsiteURL) {
                websiteInput.value = storedWebsiteURL;
            }
        }

        // Function to handle key press event
        function handleKeyPress(event) {
            var panicKey = panicKeyInput.value.trim().toLowerCase();

            if (event.key === panicKey) {
                var websiteURL = websiteInput.value.trim();

                if (websiteURL !== '') {
                    // Redirect to the entered URL
                    window.location.href = websiteURL;

                    // Store values in localStorage
                    localStorage.setItem('panicKey', panicKey);
                    localStorage.setItem('websiteURL', websiteURL);
                }
            }
        }
    });
</script>
