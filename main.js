const { app, BrowserWindow } = require("electron");

function createWindow() {
  const mainWindow = new BrowserWindow();
  mainWindow.loadFile("index.html");
}

app.whenReady().then(() => {
  createWindow();
});
