// ==UserScript==
// @name         TumblrPanorama
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include      https://www.tumblr.com/*
// @grant        none
// ==/UserScript==

try{
document.styleSheets[0].addRule('body.identity','overflow-x:auto; width: 97%');
document.styleSheets[0].addRule('.pinned_sidebar_footer','display:none');
document.styleSheets[0].addRule('.post_full.is_photoset .post_media .photoset .photoset_row, .post_full.is_photo .post_media .post_media_photo, .post_full.is_video .crt-video, .post_full .post_wrapper .post_content .post_media, .post_full.is_link .post_media .link-button .thumbnail','margin:auto');
console.log("tumblrPanorama sheeted");
} catch(e) { console.log("Sheeting Error I gues or something"); }