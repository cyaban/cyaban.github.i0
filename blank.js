const installButton = document.querySelector('.blank-button');

installButton.addEventListener('click', () => {
  // Get the URL of the plugin to install.
  const pluginUrl = installButton.dataset.url;

  // Create a new script element.
  const scriptElement = document.createElement('script');

  // Set the source of the script element to the plugin URL.
  scriptElement.src = pluginUrl;

  // Append the script element to the head of the document.
  document.head.appendChild(scriptElement);

  // Redirect to ixl.com after the plugin has been loaded.
  scriptElement.onload = () => {
    window.location.replace('https://www.ixl.com/');
  };
});


