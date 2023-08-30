
function redirectToWebsite() {
  const keyInput = document.getElementById('key-input');
  const websiteInput = document.getElementById('website-input');
  const storedKey = localStorage.getItem('panicKey');
  const storedWebsite = localStorage.getItem('panicWebsite');
  const defaultKey = storedKey || ']';
  const defaultWebsite = storedWebsite || 'https://classroom.google.com';
  keyInput.value = defaultKey;
  websiteInput.value = defaultWebsite;

  keyInput.addEventListener('input', function() {
    localStorage.setItem('panicKey', keyInput.value);
  });

  websiteInput.addEventListener('input', function() {
    localStorage.setItem('panicWebsite', websiteInput.value);
  });

  document.addEventListener('keyup', function(event) {
    if (event.key.toLowerCase() === keyInput.value.toLowerCase()) {
      let url = websiteInput.value.trim();
      if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'http://' + url;
      }
      window.location.href = url;
    }
  });
}

redirectToWebsite();
