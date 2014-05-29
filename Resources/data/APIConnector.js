var apiConnector = (function() {
	
	
	
	return{
		getJSON:function(url, data, callback){
			return getJSON (url, data, callback);
		},
	};
	
	function getJSON (url, data, callback){
		if (typeof(data) == "function"){
					callback = data;
				}else if(data){
					var datastring = "?";
					var i = 0;
					for (var name in data) {
						if(i>0) datastring=datastring+"&";
						datastring=datastring+name;
						if(data[name])datastring=datastring+"="+data[name];
						i++;
					}
					url = url+datastring;
					
		}
		
		var client = Ti.Network.createHTTPClient({
			onload :function(e){
				if(callback){
					try{
						var res = this.responseText;
						var obj = JSON.parse(res);
						callback(obj);
					}
					catch(err){
						throw err;
					}
				}
			},
			onerror: function(err){
				Ti.API.info(err);
			}
		});
		client.open("GET", url);
		client.send();
	}
	
}());
module.exports = apiConnector;
