HH.Event = function(){
	var routeCallbacks = {};
	return {
		register: function(hash, callback){
			routeCallbacks[hash] = routeCallbacks[hash] || [];
			routeCallbacks[hash].push(callback);
		},
		
		handleRouteChange: function(){
			if(!routeCallbacks)return;
			
			var hash = location.hash.slice(1).split("/")[0]; 
			var afterHashString = location.hash.split("/");
			var param = afterHashString.slice(1);
			var len = routeCallbacks[hash].length;
			if(len){
				for(var i = 0; i < len; i++){
					routeCallbacks[hash][i](param);
				}
			} 
		}
	}
}();
