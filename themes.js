document.addEventListener("DOMContentLoaded", function() {
  var saveButton = document.getElementById("save-button");
  var resetButton = document.getElementById("reset-button");
  var allCards = document.querySelector(".allcards");

  // Load the saved background image from localStorage
  var savedBackgroundImage = localStorage.getItem("backgroundImage");
  if (savedBackgroundImage) {
    allCards.style.backgroundImage = "url('" + savedBackgroundImage + "')";
  }

  // Save button click event
  saveButton.addEventListener("click", function() {
    var backgroundInput = document.getElementById("background-input");
    var imageURL = backgroundInput.value;

    if (imageURL !== "") {
      localStorage.setItem("backgroundImage", imageURL);
      allCards.style.backgroundImage = "url('" + imageURL + "')";
      backgroundInput.value = "";
    } else {
      alert("Please enter a valid image URL.");
    }
  });

  // Reset button click event
  resetButton.addEventListener("click", function() {
    localStorage.removeItem("backgroundImage");
    allCards.style.backgroundImage = "none";
  });
});
