function createIframeBlob(siteUrl) {
  // Create a Blob object from the site URL.
  const blob = new Blob([siteUrl], { type: 'text/html' });

  // Create a URL object from the Blob object.
  const url = URL.createObjectURL(blob);

  // Create an iframe element.
  const iframe = document.createElement('iframe');

  // Set the iframe's src attribute to the URL of the Blob object.
  iframe.src = url;

  // Append the iframe element to the document body.
  document.body.appendChild(iframe);
}

// Add an event listener to the button to call the createIframeBlob() function when the button is clicked.
const button = document.querySelector('.install-button');
button.addEventListener('click', () => {
  createIframeBlob(button.dataset.type);
});

