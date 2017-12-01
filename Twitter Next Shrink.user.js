// ==UserScript==
// @name         Twitter Next Shrink
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Shrink the Right Selector on Images
// @author       You
// @match        https://twitter.com/*
// @grant        none
// ==/UserScript==

setTimeout(function(){
    'use strict';
    document.styleSheets[0].addRule('div.GalleryNav--next','width: 33%');
}, 2000);