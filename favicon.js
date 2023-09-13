// Function to set the favicon
function setFavicon(iconUrl) {
    // Check if the input is empty
    if (iconUrl === "") {
        return;
    }

    // Create a link element for the favicon
    const faviconLink = document.createElement("link");
    faviconLink.rel = "shortcut icon";
    faviconLink.href = iconUrl;

    // Find the existing favicon link and remove it
    const existingFavicon = document.querySelector("link[rel='shortcut icon']");
    if (existingFavicon) {
        existingFavicon.remove();
    }

    // Append the new favicon link to the head of the document
    document.head.appendChild(faviconLink);

    // Save the favicon URL to local storage
    localStorage.setItem("faviconUrl", iconUrl);
}

// Function to reset the input field and the favicon
function resetTab() {
    document.getElementById("icon").value = "";
    setFavicon(""); // Reset the favicon
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

// Add event listeners
document.getElementById("icon").addEventListener("keyup", function () {
    setFavicon(this.value.trim());
});

document.getElementById("resetBtn").addEventListener("click", resetTab);
