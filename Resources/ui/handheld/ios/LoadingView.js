function LoadingView() {
	//create object instance, parasitic subclass of Observable
	var self = Ti.UI.createView({
		backgroundColor:"black",
		height:125,
		width:125,
		borderRadius:10,
		opacity:0.8,
		zIndex:1,
	});
	
	var loadingActInd = Ti.UI.createActivityIndicator({
		style:Titanium.UI.iPhone.ActivityIndicatorStyle.BIG,  //NEEDS TO BE CHANGED FOR ANDROID
		top:30
	});
	
	var loadingLabel = Ti.UI.createLabel({
		text:L("loading"),
		color:"white",
		bottom:15
	});
	
	loadingActInd.show();
	self.add(loadingActInd);
	self.add(loadingLabel);
	self.hide();
	
	return self;
};

module.exports = LoadingView;