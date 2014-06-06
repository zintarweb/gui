var config = {}
config.wsUrl = 'http://localhost:1337';
var thisApp = angular.module('thisApp',['ngRoute']);

thisApp.constant('AUTH_EVENTS', {
  loginSuccess: 'auth-login-success',
  loginFailed: 'auth-login-failed',
  logoutSuccess: 'auth-logout-success',
  sessionTimeout: 'auth-session-timeout',
  notAuthenticated: 'auth-not-authenticated',
  notAuthorized: 'auth-not-authorized'
})
thisApp.constant('USER_ROLES', {
  all: '*',
  admin: 'admin',
  editor: 'editor',
  guest: 'guest'
})
thisApp.service('Session', function () {
  this.create = function (sessionId, userId, userRole) {
    this.id = sessionId;
    this.userId = userId;
    this.userRole = userRole;
  };
  this.destroy = function () {
    this.id = null;
    this.userId = null;
    this.userRole = null;
  };
  return this;
})
thisApp.controller('AppController', function ($scope,
                                               USER_ROLES,
                                               loginFactory) {
  $scope.currentUser = null;
  $scope.userRoles = USER_ROLES;
  $scope.isAuthorized = loginFactory.isAuthorized;
})

////////// ROUTING /////////////////////////
// Deffining $routeProvider for Pomidoro applicatiom module
//
thisApp.config(function ($routeProvider) {
    $routeProvider
        // main route
        //
        .when('/',
        {
            controller: 'rootController',
            templateUrl: 'app/root/root.html'
        })

	// Login
		.when ('/login', 
		{
			controller: 'loginController',
			templateUrl: 'app/login/login.html'
		})
	// Register
		.when ('/register', 
		{
			controller: 'registerController',
			templateUrl: 'app/register/register.html'
		})
	// Users
        .when('/users',
        {
            controller: 'usersController',
            templateUrl: 'app/users/users.html'
        })
        .when('/users/:id',
        {
            controller: 'usersController',
            templateUrl: 'app/users/users.html'
        })

	// Profiles
        .when('/profiles',
        {
            controller: 'profilesController',
            templateUrl: 'app/profiles/profiles.html'
        })
        .when('/profiles/:id',
        {
            controller: 'profilesController',
            templateUrl: 'app/profiles/profiles.html'
        })

        // settings page
        //
        .when('/settings',
        {
            controller: 'settingsController',
            templateUrl: 'app/settings/settings.html'
        })

        // if non of the above routes
        // are matched we are setting router
        // to redirect to the RootController
        .otherwise({ redirectTo: '/'});
});




