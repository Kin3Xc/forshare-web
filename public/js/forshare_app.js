var app = angular.module('forshareApp', ['forshareApp.controllers', 'forshareApp.services']);



//Configuración de rutas de la aplicacion web
app.config(function($stateProvider, $authProvider, $urlRouterProvider){

	// $authProvider.unlinkUrl = '/auth/unlink/';
 	$authProvider.authHeader = 'Authorization';
	$authProvider.withCredentials = false; // Send POST request with credentials

	// parametros de configuracion
	$authProvider.loginUrl = "/users/login";
	$authProvider.signupUrl = "/users/signup";

	$authProvider.tokenName = "token";
	$authProvider.tokenPrefix = "forshare_App";

	// defino rutas 
	$stateProvider
		.state('dashboard',{
			url:'/dashboard',
			templateUrl: '/templates/dashboard.html',
			controller: 'dashboardCtrl'
		})

		.state('login', {
			url:'/login',
			templateUrl: '/templates/login.html',
			controller: 'loginCtrl',
			controllerAs: 'login'
		})

		.state('signup', {
			url: '/signup',
			templateUrl: '/templates/signup.html',
			controller: 'signupCtrl',
			controllerAs: 'signup'
		});

		$urlRouterProvider.otherwise('/');

		$authProvider.facebook({
	      // clientId: '104801699865242' //ID test
	      clientId: '104799146532164' //ID Production
	    });
});