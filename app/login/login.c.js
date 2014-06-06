// LMED GUI
// loginController
//
thisApp.controller('loginController', function($scope, $rootScope, AUTH_EVENTS, loginFactory){

  $scope.credentials = {
    username: '',
    password: ''
  };

  $scope.login = function (credentials) {
    loginFactory.login(credentials).then(function () {
      $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
    }, function () {
      $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
    });
  };
});
