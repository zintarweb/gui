// LMED WS
// profile controller
//

thisApp.controller('profilesController', function($scope,$http, $routeParams, profilesFactory){

    $scope.profiles = [];
    $scope.update = function() {
		profilesFactory.updateProfile($http, $scope).then(function(data){
			$scope.profiles = data;
			$scope.ready = true;           
		});

	};

    function init(){
		profilesFactory.getProfiles($http, $routeParams).then(function(data) {
           //this will execute when the 
           //AJAX call completes.
           $scope.profiles = data;
           $scope.ready = true;           
        });
    }    
});

