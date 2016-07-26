// ==UserScript==
// @name         CookieAutoUpgrade
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://orteil.dashnet.org/cookieclicker/beta/
// @grant        none
// ==/UserScript==

cookieCheat = -1;
timeTilLast = 100;
num = 10;
rotater = 1;
clickStuf = function() { 
    var a = document.getElementsByClassName('crate enabled');
    var b = document.getElementsByClassName('product enabled');
    if (a.length) {
        a[a.length-1].click(); 
   } else if (b.length) {
       b[b.length-1].click();
   } else return 0
    return 1
}
magic = function() {
if (clickStuf()) { timeTilLast = rotater*(timeTilLast/num); rotater = 1; }
else rotater += 1;
}
timerate = function() { magic(); cookieTimeout = setTimeout(timerate, timeTilLast/num) }
timerate()

cheaton = function() { cookieCheat = setInterval(function(){bigCookie.click()},1); this.onkeyup = cheatoff; }
cheatoff = function() { clearInterval(cookieCheat); this.onkeyup = cheaton; }
document.onkeyup = cheaton