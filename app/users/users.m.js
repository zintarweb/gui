thisApp.factory('usersFactory', function(){
	var factory = {};
	factory.getUsers = function($http, $routeParams){
		if ($routeParams.id) 
			var url = config.wsUrl + '/users/' + $routeParams.id;
		else
			var url = config.wsUrl + '/users';

		return $http.get(url).then( function(response){
		  return response.data;
		})
	}
	return factory;
});

