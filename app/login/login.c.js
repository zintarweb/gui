// LMED GUI
// loginController
// sample taken from https://medium.com/opinionated-angularjs/techniques-for-authentication-in-angularjs-applications-7bbf0346acec
thisApp.controller('loginController', function( $location, $scope, $rootScope, AUTH_EVENTS, loginFactory){

  $scope.credentials = {
    username: '',
    password: ''
  };

  $scope.login = function (credentials) {

    loginFactory.login(credentials).then(function (data) {
      $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
	  $scope.users = data;
	  $scope.ready = true;
    }, function () {
      $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
    });
  };
});

