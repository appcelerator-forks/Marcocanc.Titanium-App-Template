var AppGlobals = (function() {
	
	
	
	
	return{
		osname:Ti.Platform.osname,
		version:Ti.Platform.version,
		height:Ti.Platform.displayCaps.platformHeight,
		width:Ti.Platform.displayCaps.platformWidth,
		iOS7: isiOS7Plus(),
		iOS:isiOS(),
		android:isAndroid()
		
	};
		
	

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
	function isiOS(){
		return Ti.Platform.name === 'iPhone OS';
	}
	function isAndroid (){
		return Ti.Platform.name === 'android';
	}	
})();

module.exports = AppGlobals;