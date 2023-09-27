// Handles the click event for the fullscreen button.
function handleFullscreenClick() {
  // Get the fullscreen button element.
  const fullscreenButton = document.querySelector('.cardButton.install-button');

  // Check if the browser supports the fullscreen API.
  if (fullscreenButton.requestFullscreen) {
    // Request fullscreen mode.
    fullscreenButton.requestFullscreen();
  } else if (fullscreenButton.mozRequestFullScreen) {
    // Request fullscreen mode (Firefox).
    fullscreenButton.mozRequestFullScreen();
  } else if (fullscreenButton.webkitRequestFullscreen) {
    // Request fullscreen mode (Chrome, Safari).
    fullscreenButton.webkitRequestFullscreen();
  } else if (fullscreenButton.msRequestFullscreen) {
    // Request fullscreen mode (Edge).
    fullscreenButton.msRequestFullscreen();
  }
}

// Opens a new window with the specified URL.
function Popout() {
  // Get the URL of the install button.
  const url = document.querySelector('.cardButton.install-button').getAttribute('src');

  // Open a new window with the specified URL.
  window.open(url);
}

// Opens a new window with the specified URL in an iframe.
function ABPopout() {
  // Get the URL of the install button.
  const url = document.querySelector('.cardButton.install-button').getAttribute('src');

  // Create a new window.
  const window = window.open('about:blank', '_blank');

  // Create an iframe.
  const iframe = document.createElement('iframe');

  // Set the iframe's src attribute to the install button URL.
  iframe.src = window.location.origin + url;

  // Set the iframe's width and height to 100%.
  iframe.style.width = '100%';
  iframe.style.height = '100%';

  // Set the iframe's border to none.
  iframe.style.border = 'none';

  // Set the iframe's overflow to hidden.
  iframe.style.overflow = 'hidden';

  // Append the iframe to the window's document body.
  window.document.body.appendChild(iframe);
}

// Opens a new window with the specified URL in an iframe using a Blob object.
function BlobPopout() {
  // Get the URL of the install button.
  const url = document.querySelector('.cardButton.install-button').getAttribute('src');

  // Create a new Blob object with the specified HTML code.
  const blob = new Blob(['<html><body></body></html>'], { type: 'text/html' });

  // Create a new window.
  const window = window.open(URL.createObjectURL(blob), '_blank');

  // Create an iframe.
  const iframe = document.createElement('iframe');

  // Set the iframe's src attribute to the install button URL.
  iframe.src = window.location.origin + url;

  // Set the iframe's width and height to 100%.
  iframe.style.width = '100%';
  iframe.style.height = '100%';

  // Set the iframe's border to none.
  iframe.style.border = 'none';

  // Set the iframe's overflow to hidden.
  iframe.style.overflow = 'hidden';

  // Add an event listener to the window's load event.
  window.onload = function() {
    // Remove the event listener.
    window.onload = null;

    // Set the window's document body's background color to black.
    window.document.body.style.background = 'black';

    // Append the iframe to the window's document body.
    window.document.body.appendChild(iframe);

    // Set the window's document body's width and height to 100%.
    window.document.body.style.width = '100%';
    window.document.body.style.height = '100%';

    // Set the window's document body's margin and padding to 0.
    window.document.body.style.margin = '0';
    window.document.body.style.padding = '0';
  };
}
