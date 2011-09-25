HH.Route.register({
	"main": MainPresenter.presenterMethod,
	"": MainPresenter.presenterMethod,

	"second": SecondPresenter.process,
	
	"base": BasePresenter.baseMethod,
	"base/:": BasePresenter.idMethod,
	"base/*": BasePresenter.anyMethod,
	"404": BasePresenter.pageNotFoundMethod
});
