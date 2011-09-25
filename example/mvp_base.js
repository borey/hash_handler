var BasePresenter = function(){
	return {
		baseMethod: function(){
			BaseView.renderBase();
		},
		
		idMethod: function(param){
			BaseView.renderId(param);
		},
		
		anyMethod: function(param){
			BaseView.renderAny(param);
		},
		
		pageNotFoundMethod: function() {
			BaseView.renderPageNotFound();
		}
	}
}();

var BaseView = function(){
	return {
		renderBase: function(){
			console.log("render route \"base\"")
		},
		
		renderId: function(param){
			console.log("render route \"base/:\"");
		},
		
		renderAny: function(){
			console.log("render route \"base/*\"");
		},
		
		renderPageNotFound: function(){
			console.log("Page Not Found!")
		}
	}
}();
