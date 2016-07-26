// ==UserScript==
// @name         Let Me Drag Again
// @namespace    http://your.homepage/
// @version      0.1
// @description  Makes UserSelectable Again
// @author       You
// @match        https://www.fanfiction.net/*
// @match        http://www.quotev.com/*
// @grant        none
// ==/UserScript==

setTimeout(function() {
    try { //Fanfiction
        document.getElementById('storytextp').style.webkitUserSelect = "";

    } catch (e) { //Quotev
        document.getElementById('restxt').style.webkitUserSelect = "";
        document.styleSheets[0].addRule('::selection','color:red');
        document.body.onselectstart = null;
    }

    console.log('yes')
}, 1000);