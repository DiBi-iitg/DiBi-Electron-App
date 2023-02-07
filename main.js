const { app, BrowserWindow, Menu, Notification } = require("electron");
const path = require('path');
const isDev = !app.isPackaged;
const {getTransactions} = require('./api/api');

const { template } = require("./data/menu");

const createWindow = () => {
  const window = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
    },
  });

  window.loadFile("index.html");
  window.maximize();

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
};

if(isDev){
  require("electron-reload")(__dirname, {
    electron: "node_modules/.bin/electron",
  });
}

app.whenReady().then(() => {
  getTransactions();
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
