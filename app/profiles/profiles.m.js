// LMED gui
// profile model
//

thisApp.factory('profilesFactory', function(){
	var factory = {};
	factory.getProfiles = function($http, $routeParams){
	if ($routeParams.id) {
		var url = config.wsUrl + '/profiles/' + $routeParams.id;
		console.log ("get one");
	} else {
		var url = config.wsUrl + '/profiles' ;
		console.log ("get all");
	}

	return $http.get(url).then( function(response){
		return response.data;
	})
    }
	factory.updateProfile = function($http, $scope){
		var url = config.wsUrl + '/profile';
		return $http.post(url, $scope.profile).then( function(response){
		  return response.data;
		});
	}
    return factory;
});
