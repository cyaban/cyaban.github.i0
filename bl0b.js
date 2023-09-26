function openSiteInBlob(url) {
  // Create a new Blob object with the contents of the site.
  var blob = new Blob([document.documentElement.outerHTML], { type: "text/html" });

  // Create a new window with the Blob object as the URL.
  var window = window.open(URL.createObjectURL(blob), "_blank");

  // Set the window's title to the title of the site.
  window.document.title = document.title;

  // Set the window's size to the size of the viewport.
  window.innerWidth = window.outerWidth;
  window.innerHeight = window.outerHeight;

  // Remove the browser's user interface.
  window.document.body.style.margin = "0";
  window.document.body.style.padding = "0";
  window.document.body.style.overflow = "hidden";
}

// Add an event listener to the button to open the site in a blob.
document.querySelector(".cardButton.install-button").addEventListener("click", function() {
  openSiteInBlob(this.dataset.type);
});



