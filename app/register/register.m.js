// LMED WS
// registration model
//
thisApp.factory('registerFactory', function(){
	var factory = {};
	factory.addUser = function($http, $scope){
		var url = config.wsUrl + '/register';
		return $http.post(url, $scope.user).then( function(response){
		  return response.data;
		});
	}
	return factory;
});


