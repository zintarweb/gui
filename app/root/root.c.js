
// RootController
//
thisApp.controller('rootController', function($scope, rootFactory){

    // Controller is going to set recommendedMovies
    // variable for the $scope object in order for view to
    // display its contents on the screen as html 
    $scope.rootList = [];

    // Just a housekeeping.
    // In the init method we are declaring all the
    // neccesarry settings and assignments
    init();

    function init(){
        $scope.rootList = rootFactory.getRecommended();
    }    
});

