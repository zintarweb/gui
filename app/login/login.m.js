// LMED GUI
// login model 

thisApp.factory('loginFactory', function ($http, Session) {
  return {
    login: function (credentials) {
      return $http
        .post(config.wsUrl + '/login', credentials)
        .then(function (res) {
          Session.create(res.id, res.userid, res.role, res.Email);
		  return res.data;
        });
    },
    isAuthenticated: function () {
      return !!Session.userId;
    },
    isAuthorized: function (authorizedRoles) {
      if (!angular.isArray(authorizedRoles)) {
        authorizedRoles = [authorizedRoles];
      }
      return (this.isAuthenticated() &&
        authorizedRoles.indexOf(Session.userRole) !== -1);
    }
  };
});


