"use strict";
var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;
var path = require('path');
var url = require('url');
var Menu = electron.Menu, ipcMain = electron.ipcMain, systemPreferences = electron.systemPreferences;
var mainWindow;
function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1152,
        height: 864,
        fram: false,
        webPreferences: {
            nodeIntegration: true,
            nativeWindowOpen: true
        },
        nativeWindowOpen: true,
        backgroundColor: '#2e2c29',
        icon: __dirname + '/favicon.ico'
    });
    mainWindow.setMenu(null);
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));
    mainWindow.on('closed', function () {
        mainWindow = null;
    });
    mainWindow.once('ready-to-show', function () {
        mainWindow.show();
    });
}
app.on('ready', createWindow);
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
app.on('activate', function () {
    if (mainWindow === null) {
        createWindow();
    }
});
//# sourceMappingURL=main.js.map