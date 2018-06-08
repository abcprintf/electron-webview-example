const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')

const {
  Menu,
  ipcMain,
  systemPreferences
} = electron

let mainWindow

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1152,
    height: 864,
    // maxWidth: 1152, // fix maxwidth
    // maxHeight: 864, // fix maxheight
    fram: false,
    webPreferences: {
      nodeIntegration: true,
      nativeWindowOpen: true
    },
    nativeWindowOpen: true,
    backgroundColor: '#2e2c29',
    icon: __dirname + '/favicon.ico',
    // kiosk: true // FullScreen
  })
  mainWindow.setMenu(null)

  // and load the index.html of the app.
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    mainWindow = null
  })

  mainWindow.once('ready-to-show', () => {
      mainWindow.show()
  })

}

app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})