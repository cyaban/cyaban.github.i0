document.addEventListener("DOMContentLoaded", function() {
  var saveButton = document.getElementById("save-button");
  var resetButton = document.getElementById("reset-button");
  var backgroundInput = document.getElementById("background-input");
  var cardContainer = document.querySelector(".card-container");

  // Function to set the background image and save it to localStorage
  function setBackground(imageURL) {
    if (imageURL !== "") {
      localStorage.setItem("backgroundImage", imageURL);
      document.body.style.backgroundImage = "url('" + imageURL + "')";
      backgroundInput.value = "";
    }
  }

  // Event listener for the Save button
  saveButton.addEventListener("click", function() {
    var imageURL = backgroundInput.value;
    setBackground(imageURL);
  });

  // Event listener for the Reset button
  resetButton.addEventListener("click", function() {
    localStorage.removeItem("backgroundImage");
    document.body.style.backgroundImage = "url('default-background.jpg')";
  });

  // Check if there's a saved background image and set it
  var savedBackgroundImage = localStorage.getItem("backgroundImage");
  if (savedBackgroundImage) {
    setBackground(savedBackgroundImage);
  }
});
