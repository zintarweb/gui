// LMED gui
// upload model
//
thisApp.factory('uploadFactory', function(){
	var factory = {};
	factory.addMedia = function($http, $scope){
		var url = config.wsUrl + '/upload';
		return $http.post(url, $scope.user).then( function(response){
		  return response.data;
		});
	}
	return factory;
});


