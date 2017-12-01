// ==UserScript==
// @name         dA Friendship Manage
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://www.deviantart.com/watching*
// @grant        none
// ==/UserScript==

var hundred;

setTimeout(function(){
    'use strict';
    document.body.onkeydown = function(e) {
        if (e.which !== 84) return;
        hundred = document.querySelectorAll('tbody.grp tr.friend');
        for (var i=0; i<hundred.length; i++) {
            hundred[i].children[4].children[0].classList.remove('checked');
            hundred[i].children[5].children[0].classList.remove('checked');
            hundred[i].children[6].children[0].classList.remove('checked');
            hundred[i].children[7].children[0].classList.remove('checked');
            hundred[i].children[8].children[0].classList.remove('checked');
            hundred[i].children[8].children[0].click();
        }
    };
}, 2000);