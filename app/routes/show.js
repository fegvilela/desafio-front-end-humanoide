module.exports = function(application){

	application.get('/show', function(req, res){
		application.app.controllers.show.show(application, req, res);
	});

}