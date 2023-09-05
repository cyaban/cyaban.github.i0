document.addEventListener("DOMContentLoaded", function() {
  var saveButton = document.getElementById("save-button");
  saveButton.addEventListener("click", function() {
    var backgroundInput = document.getElementById("background-input");
    var imageURL = backgroundInput.value;

    if (imageURL !== "") {
      localStorage.setItem("backgroundImage", imageURL);
      document.querySelector(".allcards").style.backgroundImage = "url('" + imageURL + "')";
      backgroundInput.value = "";
    } else {
      alert("Please enter a valid image URL.");
    }
  });

  var resetButton = document.getElementById("reset-button");
  resetButton.addEventListener("click", function() {
    localStorage.removeItem("backgroundImage");
    document.querySelector(".allcards").style.backgroundImage = "none";
  });

  var savedBackgroundImage = localStorage.getItem("backgroundImage");
  if (savedBackgroundImage) {
    document.querySelector(".allcards").style.backgroundImage = "url('" + savedBackgroundImage + "')";
  }
});
