import { createBlobURL } from 'blob-util';

function BlobPopout(){
  let e = document.querySelector('.cardButton.install-button').getAttribute('src');
  const blobUrl = createBlobURL(`<html><body></body></html>`);
  window.open(blobUrl, '_blank');
}
