const { BrowserWindow, app } = require('electron');

function createWindow() {
	const win = new BrowserWindow({
		width: 1200,
		height: 800,
		backgroundColor: 'white',
		webPreferences: {
			nodeIntegrations: false,
			worldSafeExecuteJavaScript: true,
			contextIsolation: true,
		},
	});

	win.loadFile('dist/index.html');
}

app.whenReady().then(createWindow);
