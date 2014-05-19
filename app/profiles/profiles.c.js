
thisApp.controller('profilesController', function($scope,$http, $routeParams, profilesFactory){

    $scope.profiles = [];
    init();

    function init(){
	profilesFactory.getProfiles($http, $routeParams).then(function(data) {
           //this will execute when the 
           //AJAX call completes.
           $scope.profiles = data;
           $scope.ready = true;           
        });
    }    
});


