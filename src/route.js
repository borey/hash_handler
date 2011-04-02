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
				
			if(location.hash) HH.Event.handleRouteChange();
		}
	};
}();


