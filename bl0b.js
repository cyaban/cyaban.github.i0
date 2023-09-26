function createBlobUrl(siteUrl) {
  // Create a Blob object from the site URL.
  const blob = new Blob([siteUrl], { type: 'text/plain' });

  // Create a URL object from the Blob object.
  const url = URL.createObjectURL(blob);

  return url;
}
