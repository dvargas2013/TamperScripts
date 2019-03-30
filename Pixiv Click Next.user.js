// ==UserScript==
// @name         Pixiv Click Next
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.pixiv.net/bookmark_new_illust*
// @match        https://www.pixiv.net/search.php?*
// @grant        none
// ==/UserScript==

setTimeout(function(){
    'use strict';
    document.body.onkeydown = function(e) {
        if (e.which === 39)
            document.querySelector('.next a').click();
    };
}, 2000);