var masterWindow = (function() {
	//create object instance, parasitic subclass of Observable
	var self = Ti.UI.createWindow({
		backgroundColor:"#407C58"
	});

	return self;
})();

module.exports = masterWindow;