document.addEventListener("DOMContentLoaded", function() {
    const themeLink = document.getElementById('maincss');
    const themeValue = localStorage.getItem('websiteCSS');
  
    if (themeValue) {
      themeLink.href = themeValue;
    }
  });
  