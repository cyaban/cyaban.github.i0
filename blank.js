function openInIframe(siteUrl) {
  // Create a new iframe element.
  const iframe = document.createElement('iframe');

  // Set the iframe's src attribute to the site's URL.
  iframe.src = siteUrl;

  // Set the iframe's sandbox attribute to restrict the iframe's access to the parent page.
  iframe.sandbox = 'allow-scripts';

  // Append the iframe element to the document body.
  document.body.appendChild(iframe);

  // Open the about:blank page.
  window.open('about:blank');
}
