var MainPresenter = function(){
	return {
		presenterMethod: function(){
			MainModel.modelMethod();
		},

    updateUrl: function() {
      url = "#updated_url"
      HH.Route.updateUrl(url)
    }
	}
}();

var MainView = function(){
  var createLink = function (href, text) {
    var li = document.createElement("li");
    var link = document.createElement("a");
    link.innerHTML = "Second";
    link.href = "#second";
    li.appendChild(link);
    return li;
  };

  var createUpdateUrlLink = function () {
    var li = document.createElement("li");
    var link = document.createElement("a");
    link.id = "update-url"
    link.innerHTML = "Update Url";
    link.href = "";
    li.appendChild(link);
    _applyEventToUpdateUrlLink(link);
    return li;
  };

  _applyEventToUpdateUrlLink = function (link) {
    link.addEventListener("click", function(e) {
      MainPresenter.updateUrl();
      e.preventDefault();
    }, false)
  }

	return {
		viewMethod: function(){
			var content = document.getElementById("content");
			content.innerHTML = "";
      var li = createLink();
      var updateUrlLink = createUpdateUrlLink()
			content.appendChild(li);
      content.appendChild(updateUrlLink)
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

