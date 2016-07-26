/*global console, $ */
// ==UserScript==
// @name         Split The Screen
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Tol editor for textem
// @author       You
// @include      http://www.textem.net/faq.php
// @include      http://textem.net/faq.php
// @grant        none
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

"use strict";

var makeFrame = function (index) {
    var frame = $('<iframe />').css({
            height: '100%',
            width: '100%'
        }).appendTo('body'),
        doc = frame[0].contentDocument;
    doc.open();
    doc.write(decodeURI("%3C!DOCTYPE%20html%3E%3Chtml%3E%3Chead%3E%3C/head%3E%3Cbody%3E%3C/body%3E%3C/html%3E"));
    doc.close();
    return frame;
};

var middle = makeFrame(),
    insertAll = function ($frame) {
        $('head').children().appendTo($frame.contents().find('head'));
        $('body').children().not($frame).appendTo($frame.contents().find('body'));
    };
insertAll(middle);

//Define main
var tryReload;
var main = function () {
    document.title = "Reloaded";
    tryReload = 1;
    if (inbox[0].contentDocument.title.includes('new')) {
        inbox[0].src = "inbox.php";
        document.title = "ReloadingInbox";
        tryReload = 0;
    }
};

var getLinks = function (boxDoc) {
    var Links = [];
    ($(boxDoc).find(".inbox td a")).each(function (ind, i) {
        if (i.attributes.alt) {
            Links.push(i);
        }
    });
    return Links;
};

//Make the frames

var inboxLinks, outboxLinks, inbox = makeFrame();
inbox[0].onload = function () {
    inboxLinks = getLinks(inbox[0].contentDocument);
    main();
};
inbox[0].src = "inbox.php";
var outbox = makeFrame();
outbox[0].onload = function () {
    outboxLinks = getLinks(outbox[0].contentDocument);
    main();
};
outbox[0].src = "outbox.php";
middle[0].onload = function() { $(this.contentDocument).find("#msg").last()[0].focus(); $(this.contentDocument).find("#send").last()[0].scrollIntoView(); }
middle[0].src = "index.php??label=senpai&mobile1=802&mobile2=753&mobile3=6044&provider=vzw"; //label=caidenmom&mobile1=413&mobile2=652&mobile3=5908&provider=vzw"; //

//Make the tables

var table = $("<table style='width:100%;height:100%'> <thead> <tr> <th><button onclick='this.parentElement.parentElement.parentElement.parentElement.children[1].children[0].children[0].children[0].contentWindow.location.reload();'>Inbox</button></th> <th>Sending</th> <th>Outbox</th> </tr> </thead> <tbody> <tr> <td id='inbox'></td> <td id='main'></td> <td id='outbox'></td> </tr> </tbody> </table>").appendTo('body');
table.find("#inbox").append(inbox);
table.find("#main").append(middle);
table.find("#outbox").append(outbox);

//Loop
setInterval(function () {
    if (tryReload) {
        if (document.title === "Looping") { document.title = "Looping..."; } else { document.title = "Looping"; }
        if (inbox[0].contentDocument.title.includes('new')) {
            setTimeout(function(){
               if (inbox[0].contentDocument.title.includes('new')) {
                   inbox[0].src = "inbox.php";
                   document.title = "ReloadingInbox";
               } else { tryReload = 1; } 
            },5000);
            tryReload = 0;
        }
        if ($(middle[0].contentDocument).find(".main-right")[0].textContent.includes("Message sent!")) {
            outbox[0].src = "outbox.php";
            middle[0].contentWindow.location.reload();
            document.title = "ReloadingOutbox";
            tryReload = 0;
        }
    } else {
        document.title = "Waiting";
    }
}, 1000);