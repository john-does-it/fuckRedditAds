// ==UserScript==
// @name         FuckAds On Reddit - Hide ads on Reddit feed
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Hide ads on Reddit feed
// @author       John Doe
// @match        *://www.reddit.com/*
// @grant        none
// @license      MIT
// ==/UserScript==

(function() {
  console.log('test')
  
  function hideAds () { 
      let adscript = document.querySelectorAll('shreddit-ad-post')

      for (let i = 0; i < adscript.lenght; i++) {
          console.log('ad detected' + i)
      }
  }

  setInterval(hideAds, 2000)
})();