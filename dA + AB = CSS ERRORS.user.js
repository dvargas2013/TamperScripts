// ==UserScript==
// @name         dA + AB = CSS ERRORS
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://www.deviantart.com/notifications/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.styleSheets[0].addRule('.mc-ad-chrome','display:none');
})();