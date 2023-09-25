var urlObj = new window.URL(window.location.href);
var url = window.location;

if (url) {
  var win;

  document.querySelector('button').onclick = function() {
    if (win) {
      // Get the button element.
      var button = document.querySelector('button');

      // Create a new button element.
      var newButton = document.createElement('button');
      newButton.className = 'cardButton blank-button';
      newButton.textContent = 'Install';

      // Replace the existing button element with the new button element.
      button.parentNode.replaceChild(newButton, button);
    } else {
      win = window.open();
      win.document.body.style.margin = '0';
      win.document.body.style.height = '100vh';
      var iframe = win.document.createElement('iframe');
      iframe.style.border = 'none';
      iframe.style.width = '100%';
      iframe.style.height = '100%';
      iframe.style.margin = '0';
      iframe.src = url;
      win.document.body.appendChild(iframe);
      window.location.replace("https://ixl.com");

      var interval = setInterval(function() {
        if (win.closed) {
          clearInterval(interval);
          win = undefined;
        }
      }, 500);
    }
  };
}
