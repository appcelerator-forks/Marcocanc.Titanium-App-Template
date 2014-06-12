	var App={};
	
	//Global variables and settings
	App.G = require("/Globals");
	//APIs
	App.API = require("/data/APIConnector");
	//Database
	App.DB = require("/data/DBConnector");


     if (App.G.osname === 'iphone') {		 
		//UI object
		App.UI = {};
		//Windows
		App.UI.masterWindow = require('/ui/handheld/ios/MasterWindow');
		
		//Views
		App.UI.loadingView = require('/ui/handheld/ios/LoadingView');
		
		
		//UNCOMMENT FOR NAVIGATION APP
		/*
		//create iOS specific NavGroup UI
		App.UI.navWin = Ti.UI.iOS.createNavigationWindow({
			window:App.UI.masterWindow
		});
		*/
		
		
		//single Window App
		App.UI.masterWindow.open();
     } else {
     //android
     }


