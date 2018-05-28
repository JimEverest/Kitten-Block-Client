const {app, BrowserWindow, ipcMain} = require('electron')
const path = require('path')
const url = require('url')
const cp = require('child_process');
const {autoUpdater} = require("electron-updater");
const isDev = require('electron-is-dev');
const os = require('os');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let splash;
let win;
let devmng;
let devmngPoll;
let wsPort;
let mainFrameLoaded = false;
function randomInt(minInclusive, maxInclusive) {
    if (minInclusive > maxInclusive) {
        const tmp = minInclusive;
        minInclusive = maxInclusive;
        maxInclusive = tmp;
    }
    return Math.floor(Math.random() * (maxInclusive - minInclusive + 1)) + minInclusive;
}

app.commandLine.appendSwitch('ignore-gpu-blacklist', 'true')

autoUpdater.autoDownload = false;
autoUpdater.on('checking-for-update', () => {
  console.log('Checking for update...');
})
autoUpdater.on('update-available', (info) => {
  console.log('Update available.');
  win.webContents.send('updatevalid', info.version);
})
autoUpdater.on('update-not-available', (info) => {
  console.log('Update not available.');
})
autoUpdater.on('error', (err) => {
  console.log('Error in auto-updater.');
})
autoUpdater.on('download-progress', (progressObj) => {
  win.webContents.send('updateprogress', progressObj.percent);
})
autoUpdater.on('update-downloaded', (info) => {
  console.log('Update downloaded');
  setTimeout(function() {
    autoUpdater.quitAndInstall();  
  }, 3000)
});

ipcMain.on('update', (event, msg) => {
	if(msg == 'downloadupdate'){
		autoUpdater.downloadUpdate();
	}else if(msg == 'quitandinstall'){
		autoUpdater.quitAndInstall();
	}
});
ipcMain.on('quitapp', (event, msg) => {
	app.exit(0);
});
ipcMain.on('devmng', (event, msg) => {
	if(msg == 'restart'){
		wsPort = randomInt(49152, 65530);
		startDevManger(wsPort);
		setTimeout(()=>{
			sendStartConfig();
		}, 1000);
	}
});

const isSecondInstance = app.makeSingleInstance((commandLine, workingDirectory) => {
  // Someone tried to run a second instance, we should focus our window.
  if (win) {
    if (win.isMinimized()) win.restore()
    win.focus()
  }
})

if (isSecondInstance) {
  app.quit()
}

function sendStartConfig(){
	const startConfig = {
		wsPort
	};
	win.webContents.send("start", startConfig);
}

function startDevManger(port) {
  let devManagerPath = isDev ? "E:\\KittenblockV3\\devManager\\dist\\" : path.resolve(app.getAppPath(), '..');
  let basePath = isDev ? "E:\\KittenblockV3\\devManager\\" : path.resolve(app.getAppPath(), '..');
  console.log("Manager Path ", devManagerPath);
  devmng = cp.spawn('./devManager',['-p',wsPort, '-b', basePath],{
    encoding: 'utf8',
    cwd: devManagerPath
  });
  
  devmng.stdout.on('data', function (data) {
	console.log("dev mng"+data.toString());
  });
  
  devmng.stdout.on('end', function () {
	console.log("dev mng end");
  });
  
  devmng.stderr.on('data', function (data) {
	console.log("dev mng err"+data.toString());
	win.webContents.send('devmngerr', data.toString());
  });
  console.log("dev port", port);
}

function createWindow () {
  console.log("cwd", app.getAppPath());
  // start devmanager
  wsPort = randomInt(49152, 65535);
  startDevManger(wsPort);
  splash = new BrowserWindow({
	  width: 640,
	  height: 480,
	  backgroundColor: '#31C7D5',
	  frame: false
  })
  splash.loadURL(url.format({
    pathname: path.join(__dirname, 'loading.html'),
    protocol: 'file:',
    slashes: true
  }))
  
  // Create the browser window.
  win = new BrowserWindow({
	  width: 1400,
	  height: 775,
      minWidth: 1200,
      minHeight: 775,
	  backgroundColor: '#31C7D5',
	  show: false
  })

  // and load the index.html of the app.
  let indexPath = isDev ? "E:\\KittenblockV3\\scratch-gui\\build\\index.html" : path.join(__dirname, 'index.html');
  console.log("index path", indexPath);
  win.loadURL(url.format({
    pathname: indexPath,
    protocol: 'file:',
    slashes: true
  }))
 
  win.setMenu(null);
  
  win.webContents.on("did-stop-loading", () => {
	if(!mainFrameLoaded){ // fix for frame switching
		sendStartConfig();
		if (isDev) {
			win.webContents.openDevTools({ mode: "detach" });
		}
		mainFrameLoaded = true;
	}	
  });
  
  win.once('ready-to-show', () => {
    win.show()
	splash.close();
	if(!isDev){
      autoUpdater.checkForUpdates();
	}
  });

  win.on('close', function(e){
	console.log("close notify");
	e.preventDefault();
	win.webContents.send('closeapp', '');
  });

  // Emitted when the window is closed
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })
  
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  console.log("#quit", devmng.pid);
  if(os.platform() === 'win32'){
	var killcmd = 'taskkill /F /IM devManager.exe'
	cp.exec(killcmd, (msg) => {
		console.log('taskkill', msg)
	})
  }else{
	devmng.kill();
  }
  
  //if (process.platform !== 'darwin') {
  app.quit()
  //}
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})
