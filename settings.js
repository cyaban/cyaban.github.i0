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
