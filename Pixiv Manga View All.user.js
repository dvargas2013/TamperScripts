// ==UserScript==
// @name         Pixiv Manga View All
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://www.pixiv.net/member_illust.php?mode=manga&illust_id=*
// @match        https://www.pixiv.net/member_illust.php?mode=manga&illust_id=*
// @grant        none
// ==/UserScript==

var clicker = function(){
    'use strict';
    var x = document.querySelector('.page-button.switch ._icon-thumbnail-view');
    console.log(x);
    if (x) x.click();
    else setTimeout(clicker,2000);
}
setTimeout(clicker, 2000);

setTimeout(function(){
    var a = document.querySelectorAll('.item-container img');
    console.log(a.length);
    for (var i=0; i<a.length; i++) {
        if (a[i].src !== a[i].attributes.getNamedItem('data-src').value)
            a[i].src = a[i].attributes.getNamedItem('data-src').value;
    }
},5000);