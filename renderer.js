"use strict";
var webview = document.querySelector('webview');
var indicator = document.querySelector('.indicator');
var shell = require('electron').shell;
onload = function () {
    webview.addEventListener('new-window', function (event) {
        shell.openExternal(event.url);
    });
};
//# sourceMappingURL=renderer.js.map