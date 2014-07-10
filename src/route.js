HH.Route = function(){
  var interval = null,
    isTriggerUpdateUrl = true;

	return {
    destroy: function() {
      HH.Event.clear();
    },

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
				interval = setInterval(function () {
					if (window.location.hash != hashStorage) {
						hashStorage = window.location.hash;
						HH.Event.handleRouteChange();
					}
				}, 100);
			}
				
			HH.Event.handleRouteChange();
		},

    updateUrl: function (url) {
      if (!url) {
        return;
      }

      HH.Event.updateTrigger(false);
      var callback = function(){
        window.removeEventListener("hashchange", callback)
        HH.Event.updateTrigger(true);
      };

      var hashChange = window.addEventListener("hashchange", callback, false);

      window.location.href = url;
    }
	};
}();


