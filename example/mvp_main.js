var MainPresenter = function(){
	return {
		presenterMethod: function(){
			MainModel.modelMethod();
		}
	}
}();

var MainView = function(){
	return {
		viewMethod: function(){
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
		modelMethod: function(){
			console.log("ajax...");
			MainView.viewMethod();
		}
	}
}();

