// ==UserScript==
// @name         DeleteTheThings
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Smol editor for textem
// @author       You
// @include      http://www.textem.net/inbox.php
// @include      http://www.textem.net/outbox.php
// @include      http://textem.net/inbox.php
// @include      http://textem.net/outbox.php
// @grant        none
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

$(".inbox th").last()[0].scrollIntoView();

more25 = function () {
    var send = 0, hasID=[], a=$('.inbox input'); 
    for (i=0; i<a.length; i++) { if (a[i].id) { hasID.push(a[i]); } };
    for (i=25; i<hasID.length; i++) { hasID[i].click(); send = 1; };
    return send;
}
unreaded = function() {
    var send=0, a=$('.inbox-read td input'); 
    for (i=0; i<a.length; i++) { if (a[i].id) { a[i].click(); send=1; } };
    return send;
}

if (unreaded()) {   
    a=$('td input'); submitter= [];
    for (i=0; i<a.length; i++) { if (a[i].value==="mark selected read") { submitter.push(a[i]) } };
    submitter[0].click();
} else if (more25()) {
    a=$('td input'); submitter= [];
    for (i=0; i<a.length; i++) { if (a[i].value==="delete selected") { submitter.push(a[i]) } };
    //submitter[0].click();
}