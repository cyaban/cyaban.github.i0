const installButton = document.querySelector('.blank-button');

installButton.addEventListener('click', () => {
  // Open the site in about blank.
  window.open('about:blank', '_blank', 'noreferrer noopener');

  // Redirect to ixl.com.
  window.location.href = 'https://www.ixl.com/';
});
