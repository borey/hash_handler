var MainPresenter = function(){
	return {
		presenter_method: function(){
			MainModel.model_method();
		}
	}
}();

var MainView = function(){
	return {
		view_method: function(){
			var content = document.getElementById("content");
			content.innerHTML ="";
			var li = document.createElement("li");
			var link = document.createElement("a");
			link.innerHTML = "Second"
			link.href = "#second";
			li.appendChild(link);
			content.appendChild(li);
		}
	}
}();

var MainModel = function(){
	return {
		model_method: function(){
			console.log("ajax...");
			MainView.view_method();
		}
	}
}();

