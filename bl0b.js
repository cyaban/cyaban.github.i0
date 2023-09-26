function openSiteInBlob(url) {
  let button = document.querySelector('.cardButton.install-button');
  let viewport = document.querySelector('#theaterViewport');

  // Get the URL of the site to install from the button's `data-type` attribute.
  let siteUrl = button.dataset.type;

  // Create a blob of the site's HTML code.
  let blob = new Blob(["<html><body><iframe src='{}' style='width: 100%; height: 100%; border: none; overflow: hidden;'></iframe></body></html>".format(siteUrl)], "text/html");

  // Create a URL for the blob.
  let blobUrl = URL.createObjectURL(blob);

  // Set the `src` attribute of the viewport iframe to the blob URL.
  viewport.src = blobUrl;

  // Request fullscreen mode for the viewport.
  viewport.requestFullscreen();
}

// Add the following event listener to the button:
document.querySelector('.cardButton.install-button').addEventListener('click', openSiteInBlob);

