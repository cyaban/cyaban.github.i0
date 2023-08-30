document.addEventListener('DOMContentLoaded', function () {
    var storedPanicKey = localStorage.getItem('panicKey');
    var storedWebsiteURL = localStorage.getItem('websiteURL');

    var panicKeyInput = document.getElementById('panicKeyInput');
    var websiteInput = document.getElementById('websiteInput');

    // Set the input fields to the stored values if available
    if (storedPanicKey) {
        panicKeyInput.value = storedPanicKey;
    }
    if (storedWebsiteURL) {
        websiteInput.value = storedWebsiteURL;
    }

    document.addEventListener('keydown', function (event) {
        var panicKey = panicKeyInput.value.trim().toLowerCase();
        var pressedKey = event.key.toLowerCase(); // Convert pressed key to lowercase

        if (pressedKey === panicKey) {
            var websiteURL = websiteInput.value.trim();

            if (websiteURL !== '') {
                // Redirect to the entered URL
                window.location.href = websiteURL;

                localStorage.setItem('panicKey', panicKey);
                localStorage.setItem('websiteURL', websiteURL);
            }
        }
    });
});

document.addEventListener('keydown', function (event) {
    console.log('Keydown event:', event);
    const target = event.target;
    const customCSS = localStorage.getItem('panicKey');
    if (customCSS && (!target || (target.nodeName !== 'INPUT' || target.getAttribute('id') !== 'uv-address'))) {
      const pressedKey = event.key.toLowerCase();
      const emergencyHotkey = localStorage.getItem('panicKey');

      if (pressedKey === emergencyHotkey) {
        const emergencyURL = localStorage.getItem('websiteURL');

        if (emergencyURL) {
          window.location.href = emergencyURL;
        }
      }
    }
  });