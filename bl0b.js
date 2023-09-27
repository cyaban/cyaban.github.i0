function handleFullscreenClick(){
  let e = document.querySelector('.cardButton.install-button');
  e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen();
}

function Popout(){
  let e = document.querySelector('.cardButton.install-button').getAttribute('src');
  window.open(e);
}

function ABPopout(){
  let e = document.querySelector('.cardButton.install-button').getAttribute('src');
  var t=window.open('about:blank'),o=document.createElement('iframe');
  o.src=window.location.origin+e,o.style.width='100%',o.style.height='100%',o.style.border='none',o.style.overflow='hidden',t.document.body.appendChild(o);
}

function openSiteInBlob(){
  let e = document.querySelector('.cardButton.install-button').getAttribute('src');
  openSiteInBlob(window.location.origin+e);
}
