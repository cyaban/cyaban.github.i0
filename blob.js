function openBlob() {
    // Create some sample data to be included in the blob (replace this with your actual data)
    const data = "This is the content of the blob.";

    // Create a Blob object
    const blob = new Blob([data], { type: 'text/plain' });

    // Create a URL for the blob
    const blobURL = URL.createObjectURL(blob);

    // Open the blob URL in a new window/tab
    window.open(blobURL);

    // Revoke the blob URL after use to free up resources
    URL.revokeObjectURL(blobURL);
}
