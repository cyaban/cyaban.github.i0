// JavaScript
document.addEventListener("DOMContentLoaded", function () {
    const card = document.querySelector(".card");
    const backgroundInput = document.getElementById("background-input");
    const saveButton = document.getElementById("save-button");
    const resetButton = document.getElementById("reset-button");

    // Function to set the background image
    function setBackgroundImage(url) {
        card.style.backgroundImage = `url(${url})`;
    }

    // Event listener for the Save button
    saveButton.addEventListener("click", function () {
        const imageUrl = backgroundInput.value;
        setBackgroundImage(imageUrl);
    });

    // Event listener for the Reset button
    resetButton.addEventListener("click", function () {
        backgroundInput.value = "";
        card.style.backgroundImage = "none";
    });
});
