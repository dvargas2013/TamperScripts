// ==UserScript==
// @name         Pixiv Auto Bookmark
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://www.pixiv.net/bookmark_add.php?type=illust*
// @match        https://www.pixiv.net/bookmark_add.php?type=illust*
// @grant        none
// ==/UserScript==

setTimeout(function(){
    'use strict';
    var a = document.querySelector('div.submit-container input._button-large');
    if (a) a.click();
}, 2000);