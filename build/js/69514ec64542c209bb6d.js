var {
  app,
  BrowserWindow,
  Menu,
  Notification
} = require("electron");
var path = require('path');
var isDev = !app.isPackaged;
var {
  template
} = require("./data/menu");
var createWindow = () => {
  var window = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true
    }
  });
  window.loadFile("index.html");
  window.maximize();
  var menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
};
if (isDev) {
  require("electron-reload")(__dirname, {
    electron: "node_modules/.bin/electron"
  });
}
app.whenReady().then(() => {
  createWindow();

  // const notification = new Notification({
  //   title: "hello world",
  //   body: "My test Message",
  //   silent: true,
  // });
  // notification.show();
});

app.on("window-all-closed", () => {
  if (process.platform === "darwin") {
    //  app.quit();
  }
});
app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});