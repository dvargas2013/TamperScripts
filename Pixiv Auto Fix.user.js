// ==UserScript==
// @name         Pixiv Auto Fix
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://www.pixiv.net/stacc/my/home/all/activity/*
// @match        https://www.pixiv.net/stacc/my/home/all/activity/*
// @grant        none
// ==/UserScript==

setTimeout(function(){
    'use strict';
    pixiv.stacc.env.state.main.cache.stacc.next_max_sid=$('.stacc_more_link a')[0].href.match('\\d+')[0];
}, 2000);