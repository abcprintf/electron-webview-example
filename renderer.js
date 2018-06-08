onload = () => {
  const webview = document.querySelector('webview')
  const indicator = document.querySelector('.indicator')
  const shell = require('electron').shell

  // open link target="_blank"
  webview.addEventListener('new-window', function(event) {
    shell.openExternal(event.url)
  })
}