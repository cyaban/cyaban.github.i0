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

// Function to set mobile favicon
function setMobileFavicon(iconUrl) {
    const mobileFaviconLink = document.createElement("link");
    mobileFaviconLink.rel = "apple-touch-icon";
    mobileFaviconLink.href = iconUrl;

    // Find the existing mobile favicon link and remove it
    const existingMobileFavicon = document.querySelector("link[rel='apple-touch-icon']");
    if (existingMobileFavicon) {
        existingMobileFavicon.remove();
    }

    // Append the new mobile favicon link to the head of the document
    document.head.appendChild(mobileFaviconLink);
}

// Add event listeners
const iconInput = document.getElementById("icon");
iconInput.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) { // Check if Enter key was pressed
        event.preventDefault(); // Prevent the default Enter key action (form submission)
        setFavicon(this.value.trim());
        setMobileFavicon(this.value.trim());
    }
});

iconInput.addEventListener("change", function () {
    setFavicon(this.value.trim());
    setMobileFavicon(this.value.trim());
});

document.getElementById("resetBtn").addEventListener("click", resetTab);

// Rest of your favicon cloaker code
// ...
