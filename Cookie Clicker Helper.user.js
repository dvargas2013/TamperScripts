// ==UserScript==
// @name         Cookie Clicker Helper
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  helps make cookie clicker
// @author       You
// @match        http://orteil.dashnet.org/cookieclicker/
// @grant        none
// ==/UserScript==

function upgradeFind(i) { return i.pool !== "toggle" && i.canBuy(); }

function upgr() {
    var b = Game.UpgradesInStore.find(upgradeFind);
    if (b) b.buy();
}

function gold() {
    if (Game.shimmers.length) Game.shimmers[0].pop();
}

function buyable(a) { return a.getPrice() < Game.cookies; }
function takesASec(a) { return a.getPrice() < Game.cookies && a.getPrice() < Game.cookiesPs; }
function minPCS(a,b) { return (a.getPrice()*b.storedCps < b.getPrice()*a.storedCps)?a:b; }

function buyy() {
    var b = Game.ObjectsById.filter(takesASec);
    if (b.length) b[b.length-1].buy();

    b = Game.ObjectsById.reduce(minPCS);
    if (buyable(b)) b.buy();
}

document.onkeydown = function(e) {
    switch (e.which) {
        case 32: /*space*/ gold(); break;
        case 37: /* left*/ upgr(); break;
        case 39: /*right*/ buyy(); break;
    }
}

setInterval(function() { gold(); upgr(); buyy(); } , 1000);

//setInterval(Game.ClickCookie,100);

//setInterval(function(){ Game.Earn(Game.cookiesPs) },50);

//setInterval(gold,5000);