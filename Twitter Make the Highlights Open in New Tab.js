// ==UserScript==
// @name         Twitter Make the Highlights Open in New Tab
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://twitter.com/i/notifications
// @grant        none
// ==/UserScript==

var putLinkYeah = function putLinkYeah(link, elem) {
    Array.from(elem.children).forEach(function(e){
        link.appendChild(e);
    })
    elem.appendChild(link);
};

setTimeout(function(){
    'use strict';
    var toChange = document.getElementsByClassName('has-clickAction');
    Array.from(toChange).forEach(function(elem,ind){
        var linkUrl = elem.getAttribute("data-click-action");
        if (!linkUrl) return;
        elem.classList.remove('has-clickAction')
        var link = document.createElement('a');
        link.href = linkUrl;
        putLinkYeah(link,elem);
    });
}, 2000);