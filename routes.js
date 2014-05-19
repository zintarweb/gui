var config = {}
config.wsUrl = 'http://localhost:1337';

var thisApp = angular.module('thisApp',['ngRoute']);

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




