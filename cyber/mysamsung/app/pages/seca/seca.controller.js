(function() {
    'use strict';

    angular.module('App.pages')
    	.controller('SecaController', SecaController);
    
    SecaController.$inject = ['secaService', '$timeout'];

    function SecaController(secaService, $timeout) {
    	var vm = this;
    	var self = this;

    	// private variables and functions
    	self.dummy = {};

    	// public variables and functions
        vm.meta = {};
		vm.data = {};
		
		// init
        getMyAccount();
        // getStores();
        // throwException();
		
		///////////////////////////////////////////////////////

		function getMyAccount() {
            loadingToggleOn();

            secaService.getMyAccount()
				.then(function(response) {
                    vm.meta = response.meta;
					vm.data = response.data;

					loadingToggleOff();
				}
            );
        }

        function getStores() {
            loadingToggleOn();

            secaService.getStores()
                .then(function(response) {
                    vm.meta = response.meta;
                    vm.data = response.data;

                    loadingToggleOff();
                }
            );
        }

        function throwException() {
            loadingToggleOn();
            
            secaService.throwException()
                .then(function(response) {
                    vm.meta = response.meta;
                    vm.data = response.data;

                    loadingToggleOff();
                }
            );
		}

    }

})();