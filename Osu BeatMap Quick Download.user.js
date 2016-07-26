// ==UserScript==
// @name         Osu BeatMap Quick Download
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://osu.ppy.sh/b/*
// @match        https://osu.ppy.sh/s/*
// @grant        none
// ==/UserScript==

var blah=true;
document.body.onkeyup = function(e) {
if (e.keyCode === 27) blah=false;
};

setTimeout(function(){
    'use strict';
     if (blah) $('.beatmap_download_link')[0].click();
}, 2000);