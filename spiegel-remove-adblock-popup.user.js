// ==UserScript==
// @name         Remove Spiegel Ad Blocker Popup
// @namespace    http://tampermonkey.net/
// @version      0.1
// @author       azettl
// @match        *://*.spiegel.de/*
// @grant        none
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';
    $(document).ready(function() {
        $('.ua-detected').remove();
        $('#wrapper-content').removeAttr('style');
    });
})();
