// UsersController
//
thisApp.controller('usersController', function($scope,$http, $routeParams, usersFactory){

    $scope.users = [];
    init();

    function init(){

        // As we need to wait for $http.get 
        // request data to be ready we are 
        // using .then on the promisse received
        // from factory
        usersFactory.getUsers($http, $routeParams).then(function(data) {
           //this will execute when the AJAX call completes.
           $scope.users = data;
           $scope.ready = true;           
        });

    }    
});

