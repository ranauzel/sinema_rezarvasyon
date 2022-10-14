const { app, BrowserWindow } = require('electron')
const createWindow = () => {
    const win = new BrowserWindow({
      width: 600,
      height: 700,
      frame: false
    })
  
    win.loadFile('index.html')
  }
  app.whenReady().then(() =>{
      createWindow()
  })


