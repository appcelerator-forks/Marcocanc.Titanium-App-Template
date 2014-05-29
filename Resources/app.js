	var App={};
	
	//Global variables and settings
	App.Globals = require("/Globals");
	App.G = new App.Globals();
	//APIs
	App.DataObj = require("/data/APIConnector");
	App.API = new App.DataObj();
	//Database
	App.DatabaseObj = require("/data/DBConnector");
	App.DB = new App.DatabaseObj();



     if (App.G.osname === 'iphone') {
     	//REQUIRES
     	//Windows
     	var MasterWindow = require('/ui/handheld/ios/MasterWindow');
     	
		//Views
		var LoadingView = require('/ui/handheld/ios/LoadingView');
		
		 
		//UI object
		App.UI = {};
		//Windows
		App.UI.masterWindow = new MasterWindow();
		
		//Views
		App.UI.loadingView = new LoadingView();
		
		
		//UNCOMMENT FOR NAVIGATION APP
		/*
		//create iOS specific NavGroup UI
		App.UI.navWin = Ti.UI.iOS.createNavigationWindow({
			window:ApplaudTruck.UI.masterWindow
		});
		*/
		
		
		//single Window App
		App.UI.masterWindow.open();
     } else {
     //android
     }


