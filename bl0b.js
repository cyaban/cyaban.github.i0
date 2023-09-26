function installWebsite(url) {
  // Create a blob of the website's HTML code.
  let blob = new Blob(["<html><body><iframe src='{}' style='width: 100%; height: 100%; border: none; overflow: hidden;'></iframe></body></html>".format(url)], "text/html");

  // Create a URL for the blob.
  let blobUrl = URL.createObjectURL(blob);

  // Set the `src` attribute of an iframe element to the blob URL.
  let iframe = document.createElement("iframe");
  iframe.src = blobUrl;

  // Request fullscreen mode for the iframe element.
  iframe.requestFullscreen();

  // Append the iframe element to the document body.
  document.body.appendChild(iframe);
}


