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

// Create an iframe for the site https://example.com.
createIframeBlob('https://example.com');
