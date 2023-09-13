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
}

// Function to reset the input field
function resetTab() {
    document.getElementById("icon").value = "";
    setFavicon("default-favicon.ico"); // Reset the favicon
}

// Add event listeners
document.getElementById("icon").addEventListener("keyup", function () {
    setFavicon(this.value.trim());
});

document.getElementById("resetBtn").addEventListener("click", resetTab);
