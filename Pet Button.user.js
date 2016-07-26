// ==UserScript==
// @name         Pet Button
// @version      0.1
// @author       You
// @match        https://please.pet/*
// @grant        none
// ==/UserScript==

var caller, t = 1.01, topetornottopet=false;
// proper domain of t is (1,∞)
// closer to 1 means smaller numbers more often
// closer to ∞ means bigger numbers more often

var a = t*(t-1);
function getTimeout() {
    return 100+parseInt(1000*a/(t-Math.random()) +1-t);
}

setTimeout(function(){
    'use strict';
    document.body.onkeypress = function(e) {topetornottopet = !topetornottopet; caller();};
    caller = function(){
        if (topetornottopet)
        setTimeout(function(){
            caller();
            pet();
        }, getTimeout() );
    };
}, 2000);