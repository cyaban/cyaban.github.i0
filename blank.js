function openTabAndRedirectToIxl() {
  console.log('openTabAndRedirectToIxl() called');

  // Create a new window object.
  var win = window.open();

  // Set the margin of the new window body to 0.
  win.document.body.style.margin = '0';

  // Set the height of the new window body to 100vh.
  win.document.body.style.height = '100vh';

  // Create an iframe element.
  var iframe = win.document.createElement('iframe');

  // Set the border of the iframe element to none.
  iframe.style.border = 'none';

  // Set the width of the iframe element to 100%.
  iframe.style.width = '100%';

  // Set the height of the iframe element to 100%.
  iframe.style.height = '100%';

  // Set the margin of the iframe element to 0.
  iframe.style.margin = '0';

  // Set the source of the iframe element to the current URL.
  iframe.src = url;

  // Append the iframe element to the body of the new window.
  win.document.body.appendChild(iframe);

  // Replace the current page in the browser history with the ixl.com website.
  window.location.replace("https://ixl.com");

  // Create an interval to check if the new tab has been closed.
  var interval = setInterval(function() {
    if (win.closed) {
      // Clear the interval if the new tab has been closed.
      clearInterval(interval);

      // Set the win variable to undefined.
      win = undefined;
    }
  }, 500);
}


