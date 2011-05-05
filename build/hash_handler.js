var HashHandler = HH = {};
HH.Util ={
	getParams: function(s){
		a = s.match(/[^&?=]*=[^&?=]*/g);
		r = {};

		if(!a) {
			return r;
		}

		for (i=0; i<a.length; i++) {
			r[a[i].match(/[^&?=]*/)[0]] = a[i].match(/=([^&?]*)/)[0].replace('=', '');
		}
		return r;
	}
};
HH.Route = function(){
	return {
		register : function(route){
			for(var hash in route){
				HH.Event.register(hash, route[hash]);
			}
		},

		activate: function(){
			if ("onhashchange" in window) { // event supported?
				window.onhashchange = HH.Event.handleRouteChange;
			} else { // event not supported:
				var hashStorage = window.location.hash;
				setInterval(function () {
					if (window.location.hash != hashStorage) {
						hashStorage = window.location.hash;
						HH.Event.handleRouteChange();
					}
				}, 100);
			}

			HH.Event.handleRouteChange();
		}
	};
}();


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
