function AppGlobals(){
	this.osname = Ti.Platform.osname;
    this.version = Ti.Platform.version;
    this.height = Ti.Platform.displayCaps.platformHeight,
    this.width = Ti.Platform.displayCaps.platformWidth;
		
	//check if device has iOS7 or greater
	this.iOS7 = isiOS7Plus();
	
	
	this.iOS=false;
	if (Titanium.Platform.name === 'iPhone OS'){
		this.iOS=true;
	}
	this.isAndroid=false;
	if (Titanium.Platform.name === 'android'){
		this.isAndroid=true;
	}

//FUNCTIONS
	// Function to test if device is iOS 7 or later
	function isiOS7Plus()
	{ 		// iOS-specific test
		if (Titanium.Platform.name == 'iPhone OS')
		{
			var version = Titanium.Platform.version.split(".");
			var major = parseInt(version[0],10);
	
			// Can only test this support on a 3.2+ device
			if (major >= 7)
			{
				return true;
			}
		}
		return false;
	}	
}

module.exports = AppGlobals;