// ==UserScript==
// @name         Agario Settings
// @version      0.1
// @description  Create Default for settings agario
// @author       You
// @match        http://agar.io/*
// @grant        none
// ==/UserScript==

setTimeout(
function(){
arr = [0,0,0,1,0,1];
items = document.body.getElementsByTagName('label');

for (var i=0; i<items.length; i++) {
    thing = items[i].getElementsByTagName('input')[0];
    while ( arr[i]?!thing.checked:thing.checked ) { thing.click(); }
}
nick.value = ":D";
}, 2000);
//'noskin';
//'noname';
//'shocolors';;
//'shomass';
//'darktheme';
//'skipstat';