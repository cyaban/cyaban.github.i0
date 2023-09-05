<script>
    // Function to set the background image
    function setCustomBackground() {
        const backgroundInput = document.getElementById("background-input");
        const allCards = document.querySelector(".allcards");

        // Get the URL entered by the user
        const imageUrl = backgroundInput.value;

        // Check if the URL is not empty
        if (imageUrl.trim() !== "") {
            allCards.style.backgroundImage = `url('${imageUrl}')`;
        } else {
            alert("Please enter a valid image URL.");
        }

        // Clear the input field
        backgroundInput.value = "";
    }

    // Function to reset the background to default
    function resetBackground() {
        const allCards = document.querySelector(".allcards");
        allCards.style.backgroundImage = "none";
    }

    // Event listener for the "Save" button
    const saveButton = document.getElementById("save-button");
    saveButton.addEventListener("click", setCustomBackground);

    // Event listener for the "Reset" button
    const resetButton = document.getElementById("reset-button");
    resetButton.addEventListener("click", resetBackground);
</script>
