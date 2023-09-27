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

function BlobPopout(){
let e = document.querySelector('.cardButton.install-button').getAttribute('src');
var t=window.open(URL.createObjectURL(new Blob(['<html><body></body></html>'],{type:'text/html'})),'_blank'),o=document.createElement('iframe');
o.src=window.location.origin+e,o.style.width='100%',o.style.height='100%',o.style.border='none',o.style.overflow='hidden',t.onload=function(){t.onload=null,t.document.body.style.background='black',t.document.body.appendChild(o),t.document.body.style.width='100%',t.document.body.style.height='100%',t.document.body.style.margin='0',t.document.body.style.padding='0'};
}

