function openSiteInBlob(siteUrl) {
  // Create a Blob object from the site URL.
  const blob = new Blob([siteUrl], { type: 'text/plain' });

  // Create a URL object from the Blob object.
  const url = URL.createObjectURL(blob);

  // Open the URL in a new browser tab.
  window.open(url);
}

// Open https://fusionw.pages.dev/time in blob
openSiteInBlob('https://fusionw.pages.dev/time');
