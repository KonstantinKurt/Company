;
"use strict";
let onloads = [];
let doc = document; // Кэшируем документ;
///////////////////////////

onloads.push();
///////////////////////////
window.onload = function() {
    for (let i in onloads) {
        onloads[i]();
    }
};