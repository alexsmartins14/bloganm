angular.module('bloganm.users', []);

angular.module('bloganm.users').config(function($routeProvider){
	$routeProvider
	.when('users/registre', {
		controller: 'RegistreUsersController',
		templateUrl: 'static/modules/users/registre/view.html'
	})

});
