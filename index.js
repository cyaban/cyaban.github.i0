"use strict";
/**
 * @type {HTMLFormElement}
 */
const form = document.getElementById("uv-form");
/**
 * @type {HTMLInputElement}
 */
const address = document.getElementById("uv-address");
/**
 * @type {HTMLInputElement}
 */
const searchEngine = document.getElementById("uv-search-engine");
/**
 * @type {HTMLParagraphElement}
 */
const error = document.getElementById("uv-error");
/**
 * @type {HTMLPreElement}
 */
const errorCode = document.getElementById("uv-error-code");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const url = search(address.value, searchEngine.value);
  if (localStorage.getItem('openiframe')==="false"){
    if (localStorage.getItem('searchmode')==="proxy"){
    

      try {
        await registerSW();
      } catch (err) {
        error.textContent = "Failed to register service worker.";
        errorCode.textContent = err.toString();
        throw err;
      }
        location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
      }else{
        window.open(url)
      }
  }
  if (localStorage.getItem('openiframe')==="true"){
    if (localStorage.getItem('searchmode')==="proxy"){
    

      try {
        await registerSW();
      } catch (err) {
        error.textContent = "Failed to register service worker.";
        errorCode.textContent = err.toString();
        throw err;
      }
        location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
      }else{
        location.href = url
      }
  }
 
  
});

function openURL(value) {
  window.navigator.serviceWorker.register("/uv/sw.js", {
    scope: __uv$config.prefix
  })
  .then(() => {
    console.log("Service worker registration successful");

    let url = value.trim();
    if (!(url.startsWith("https://") || url.startsWith("http://"))) {
      url = "https://" + url;
    }
    location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
  })
  .catch((error) => {
    console.error("Failed to register service worker.", error);
  });
}