const { app, BrowserWindow, ipcMain } = require('electron');
const isDev = require('electron-is-dev');
const path = require('path');

require('fs');
const downloadsFolder = require('downloads-folder');

function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 700,
    minHeight: 500,
    //maxWidth: 900,
    //maxHeight: 800,
    titleBarStyle: "hidden",
    webPreferences: {
      enableRemoteModule: true,
      nodeIntegration: true,
      nodeIntergrationInWorker: true
    }
  })

  mainWindow.setMenuBarVisibility(false);

  mainWindow.loadURL(
    isDev
    ? 'http://localhost:3000'
    : `file://${path.join(__dirname, '../build/index.html')}`,
  );

}

app.whenReady().then(() => {
  createWindow();
  
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
})

ipcMain.on('getDLPath', (event, _) => {
  const dlFolder = downloadsFolder();
  event.reply('returnDLPath', dlFolder);
})