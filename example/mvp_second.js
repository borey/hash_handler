var SecondPresenter = function(){
	return {
		process: function(){
			SecondModel.model_method();
		}
	}
}();

var SecondView = function(){
	return {
		view_method: function(){
			var content = document.getElementById("content");
			content.innerHTML ="";
			var li = document.createElement("li");
			var link = document.createElement("a");
			link.innerHTML = "Main"
			link.href = "#main";
			li.appendChild(link);
			content.appendChild(li);
		}
	}
}();

var SecondModel = function(){
	return {
		model_method: function(){
			console.log("ajax...");
			SecondView.view_method();
		}
	}
}();

