thisApp.factory('registerFactory', function(){
	var factory = {};
	factory.addUser = function($http, $scope){
		alert("model" + $scope.user);
		return $http.post('', $scope.user).then( function(response){
		  return response.data;
		})
	}
	return factory;
});

