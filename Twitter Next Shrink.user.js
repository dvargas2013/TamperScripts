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
    for (var i=0; i<document.styleSheets.length; i++) {
        try {
            document.styleSheets[i].addRule('div.GalleryNav--next','width: 33%');
            console.log(""+i+" worked :thumbsup:");
            break;
        } catch (e) {
            console.log(""+i+" didnt work >n>");
        }
    }
}, 2000);