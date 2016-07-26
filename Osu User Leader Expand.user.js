// ==UserScript==
// @name         Osu User Leader Expand
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://osu.ppy.sh/u/*
// @grant        none
// ==/UserScript==

setTimeout(function(){
    expandProfile('leader');
}, 2000);
