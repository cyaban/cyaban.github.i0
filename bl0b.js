function BlobPopout() {
  // Get the URL of the install button.
  const url = document.querySelector('.cardButton.install-button').getAttribute('src');

  // Create a new Blob object with the specified HTML code.
  const blob = new Blob(['<html><body></body></html>'], { type: 'text/html' });

  // Create a new window.
  const window = window.open(URL.createObjectURL(blob), '_blank');

  // Create an iframe.
  const iframe = document.createElement('iframe');

  // Add an event listener to the iframe's load event.
  iframe.onload = function() {
    // Set the iframe's src attribute to the install button URL.
    iframe.src = window.location.origin + url;
  };

  // Append the iframe to the window's document body.
  window.document.body.appendChild(iframe);
}

