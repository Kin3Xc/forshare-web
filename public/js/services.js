var app = angular.module('forshareApp.services', [])

// factory para gestionar los usuarios
app.factory('Users', function($http){
	return{
		// función para crear una cuenta
		signup: function(user){
			return $http.post('/users/signup', user);
		}
	};
});
