// ==UserScript==
// @name         Paperclip Hax
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://www.decisionproblem.com/paperclips/index2.html
// @grant        none
// ==/UserScript==

qclick = function () {
    var q = 0; for (var i = 0; i<qChips.length; i++){
        q = q+qChips[i].value;
    }
    if (q>0) qComp();
};
setTimeout(function(){
    'use strict';
    setInterval(qclick,50);
}, 2000);