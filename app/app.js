const electron = require('electron');

const app = electron.app;

let BrowserWindow = electron.BrowserWindow;

let mainWindow;
let contents;
app.on('window-all-closed', ()=> {
    app.quit();
});

// This method will be called when Electron has done everything
// initialization and ready for creating browser windows.
app.on('ready', ()=> {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 800, height: 600});

  // and load the index.html of the app.
  mainWindow.loadURL('file://' + __dirname + '/index.html');
  mainWindow.webContents.openDevTools()


  //contents = mainWindow.webContents;
  // Emitted when the window is closed.
  mainWindow.on('closed', ()=> {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    db ? db.close() :'';
    mainWindow = null;
  });
});


