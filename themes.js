const cardContainer = document.getElementById('card-container');
        const backgroundInput = document.getElementById('background-input');
        const saveButton = document.getElementById('save-button');
        const resetButton = document.getElementById('reset-button');

        // Function to set the background of the card container
        function setBackground(backgroundURL) {
            cardContainer.style.backgroundImage = `url(${backgroundURL})`;
        }

        // Event listener for the Save button
        saveButton.addEventListener('click', () => {
            const imageURL = backgroundInput.value;
            setBackground(imageURL);
        });

        // Event listener for the Reset button
        resetButton.addEventListener('click', () => {
            backgroundInput.value = ''; // Clear the input field
            cardContainer.style.backgroundImage = 'none'; // Reset background
        });
