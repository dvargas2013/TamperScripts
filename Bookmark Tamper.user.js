// ==UserScript==
// @name         Bookmark Tamper
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Copy code and physically paste cause chrome://* is protected 
// @author       You
// @match        chrome://bookmarks/*
// @grant        none
// ==/UserScript==

a=Array.from(document.getElementsByClassName("url")).filter(function(t){ return !!t.innerText; });
a[Math.floor(Math.random()*a.length)];
window.open(a[Math.floor(Math.random()*a.length)].innerText);