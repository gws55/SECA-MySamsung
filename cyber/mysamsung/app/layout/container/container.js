(function() {
    'use strict';

    angular.module('App.layout')
		.directive('container', container);

	function container() {
        var directive = {
            templateUrl: './app/layout/container/container.html'
        };

        return directive;
	}
})();
