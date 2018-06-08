const webview = document.querySelector('webview')
const indicator = document.querySelector('.indicator')
const shell = require('electron').shell

onload = () => {
    // open link target="_blank"
    webview.addEventListener('new-window', (event:Event) => {
        shell.openExternal(event.url)
    })
}