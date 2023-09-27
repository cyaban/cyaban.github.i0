function openSiteInBlob(type) {
  // Create a blob object from the website's URL.
  const blob = new Blob([`<iframe src="${type}" width="100%" height="100%"></iframe>`], {
    type: "text/html",
  });

  // Create a new URL object from the blob.
  const blobUrl = URL.createObjectURL(blob);

  // Create a new window and navigate it to the blob URL.
  const newWindow = window.open(blobUrl);

  // Close the blob URL when the new window is closed.
  newWindow.addEventListener("close", () => {
    URL.revokeObjectURL(blobUrl);
  });
}
