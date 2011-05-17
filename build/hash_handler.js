var HashHandler = HH = {};

var console = console || {};
console.log = console.log || function(){};
console.warn = console.warn || function(){};
console.error = console.error || function(){};
HH.Util ={
	getParams: function(s){
		s = s || window.location.hash;
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
	var routeCallbacks = {},
		option = "option",
		all = "all",
		none = "none",
		idFormat = /\/\:/,
		anyFormat = /\/\*/;

	return {
		register: function(route, callback){
			var hash = route.split("/")[0];
			routeCallbacks[hash] = routeCallbacks[hash] || {};

			if(idFormat.test(route)) {
				if(!callback) {
					console.warn("callback for \"" + route + "/:\" route is undefined");
					return;
				}

				routeCallbacks[hash][option] = routeCallbacks[hash][option] || [];
				routeCallbacks[hash][option].push(callback);
			} else if((anyFormat).test(route)) {
				if(!callback) {
					console.warn("callback for \"" + route + "/*\" route is undefined");
					return;
				}

				routeCallbacks[hash][all] = routeCallbacks[hash][all] || [];
				routeCallbacks[hash][all].push(callback);
			} else {
				if(!callback) {
					console.warn("callback for \"" + route + "\" route is undefined");
					return;
				}

				routeCallbacks[hash][none] = routeCallbacks[hash][none] || [];
				routeCallbacks[hash][none].push(callback);
			}
		},

		handleRouteChange: function(){
			if(!routeCallbacks)return;
			var hashWithQuery = location.hash.slice(1).split("?"),
				hashes = hashWithQuery[0].split("/"),
				param = hashWithQuery[1],
				len = hashes.length,
				callbackLen;

			if(len == 1) {
				if (!routeCallbacks[hashes[0]][none]) {
					console.error("callback for \"" + hashes[0] +"/:\" was not set");
					return;
				}

				callbackLen = routeCallbacks[hashes[0]][none].length;
				for(var i = 0; i < callbackLen; i++) {
					routeCallbacks[hashes[0]][none][i](param);
				}
			} else if(len == 2){
				if (!routeCallbacks[hashes[0]][option]) {
					console.error("callback for route \"" + hashes[0] +"/:\" was not set");
					return;
				}

				callbackLen = routeCallbacks[hashes[0]][option].length;
				for(var i = 0; i < callbackLen; i++) {
					routeCallbacks[hashes[0]][option][i](hash[1], param);
				}
			} else {
				if (!routeCallbacks[hashes[0]][all]) {
					console.error("callback for route \"" + hashes[0] +"/*\" was not set");
					return;
				}

				callbackLen = routeCallbacks[hashes[0]][all].length;
				for(var i = 0; i < callbackLen; i++) {
					routeCallbacks[hashes[0]][all][i](hashes, param);
				}
			}
		}
	}
}();
