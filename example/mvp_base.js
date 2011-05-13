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
		}
	}
}();
