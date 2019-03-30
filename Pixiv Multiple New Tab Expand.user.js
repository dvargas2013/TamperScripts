// ==UserScript==
// @name         Pixiv Multiple New Tab Expand
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://www.pixiv.net/member_illust.php?mode=medium&illust_id=*
// @match        https://www.pixiv.net/member_illust.php?mode=medium&illust_id=*
// @grant        none
// ==/UserScript==


var blah=true;
document.body.onkeyup = function(e) {
if (e.keyCode === 27 || e.keyCode === 46) blah=false;
};

var main = function(){
    'use strict';
    if (blah) {
        var wd = document.querySelector("div[role=presentation]");
        if (wd) {
            var a = wd.getElementsByTagName('a')[0];
            console.log(a);
            if (a) {
                if (!a.href.includes('ugoira') && !a.href.includes('big') && !a.href.includes('img-original')) window.location = a.href;
                else wd.scrollIntoView();
            } else setTimeout(main, 1000);
        } else setTimeout(main, 1000);
    }
}

setTimeout(main, 5000);