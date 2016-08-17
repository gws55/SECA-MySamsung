(function() {
    'use strict';
	
	angular.module('App.router')
		.config(router);

    router.$inject = ['$routeProvider'];

	function router($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: '/cyber/mysamsung/app/pages/seca/seca.html'
			})
			.otherwise({
				redirectTo: '/'
			});
	}
})();
