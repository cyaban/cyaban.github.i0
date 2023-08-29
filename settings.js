// Function to set the page title and store it in local storage
        function setTitle(title) {
            document.title = title;
            localStorage.setItem('pageTitle', title);
        }

        // Function to reset the page title and clear it from local storage
        function resetTab() {
            document.title = ''; // Set an empty title
            localStorage.removeItem('pageTitle'); // Remove the stored title
            document.getElementById('title').value = ''; // Clear the input field
        }

        // Initialize the page title from local storage if available
        document.addEventListener('DOMContentLoaded', function () {
            var storedTitle = localStorage.getItem('pageTitle');
            if (storedTitle) {
                setTitle(storedTitle);
                document.getElementById('title').value = storedTitle;
            }
        });
      <script>
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

                    if (event.key === panicKey) {
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
        </script>
