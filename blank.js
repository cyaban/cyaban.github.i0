const installButton = document.querySelector('.blank-button');

installButton.addEventListener('click', () => {
  // Open https://fusionw.pages.dev/ in about blank.
  window.open('https://fusionw.pages.dev/', '_blank', 'noreferrer noopener');

  // Redirect to ixl.com after 1 second.
  setTimeout(() => {
    window.location.replace('https://www.ixl.com/');
  }, 1000);
});


