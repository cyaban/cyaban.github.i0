// Function to set the favicon
function setFavicon(iconUrl) {
    // Check if the input is empty
    if (iconUrl === "") {
        return;
    }

    // Create a link element for the favicon
    const faviconLink = document.getElementById("favicon");
    if (faviconLink) {
        faviconLink.href = iconUrl;

        // Save the favicon URL to local storage
        localStorage.setItem("faviconUrl", iconUrl);
    }
}

// Function to reset the input field and the favicon
function resetTab() {
    document.getElementById("icon").value = "";
    setFavicon("default-favicon.ico"); // Reset the favicon to the default
    localStorage.removeItem("faviconUrl"); // Remove the stored favicon URL
}

// Load the stored favicon URL from local storage on page load
window.addEventListener("load", function () {
    const storedFaviconUrl = localStorage.getItem("faviconUrl");
    if (storedFaviconUrl) {
        document.getElementById("icon").value = storedFaviconUrl;
        setFavicon(storedFaviconUrl);
    }
});

// Add event listeners after the document has loaded
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("icon").addEventListener("keyup", function () {
        setFavicon(this.value.trim());
    });

    document.getElementById("resetBtn").addEventListener("click", resetTab);
});
