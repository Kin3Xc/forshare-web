var app = angular.module('forshareApp.controllers', ['ui.router', 'ngAnimate', 'satellizer'])

// para enviar el token con cada peticion http
app.config(['$httpProvider', 'satellizer.config', function($httpProvider, config) {
      $httpProvider.interceptors.push(['$q', function($q) {
        var tokenName = config.tokenPrefix ? config.tokenPrefix + '_' + config.tokenName : config.tokenName;
        return {
          request: function(httpConfig) {
            var token = localStorage.getItem(tokenName);
            if (token && config.httpInterceptor) {
              token = config.authHeader === 'Authorization' ? 'Bearer ' + token : token;
              httpConfig.headers[config.authHeader] = token;
            }
            return httpConfig;
          },
          responseError: function(response) {
            return $q.reject(response);
          }
        };
      }]);
}]);



// controlador para inicio de sesión
app.controller('loginCtrl', ['$auth', '$state', function($auth, $state){
	var vm = this;

	vm.login = function(){
		console.log(vm.user);

		$auth.login(vm.user)
		.then(function(data){
			console.log(data);
			$state.go('dashboard');
		})
		.catch(function(response){
			// si ha habido errores
			console.log(response);
		});
	}


	this.authenticate = function(provider) {
      $auth.authenticate(provider)
        .then(function(data) {
			console.log(data);
			$state.go('dashboard');
        })
        .catch(function(response) {
        	console.log(response);
        });
    };

}]);






// controlador para registro de usaurios
app.controller('signupCtrl', ['$auth', '$state', function($auth, $state){
	// $scope
	var vm = this;

	// objeto usuario
	vm.user = {};

	this.signup = function(){
		$auth.signup(vm.user)
		.then(function(data){
			console.log(data);
			$state.go('dashboard');
		})
		.catch(function(response){
			// si ha habido errors, llegaremos a esta función 
			console.log(response);

		});
	}

}]);



app.controller('dashboardCtrl', ['$auth', '$state', function($auth, $state){
	// valido que el usuario este logueado en el sistema
	if (!$auth.isAuthenticated()) {
		console.log('No estas logueado');
		$state.go('login');
	}
}]);