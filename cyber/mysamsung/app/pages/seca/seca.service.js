(function() {
    'use strict';

    angular.module('App.pages')
        .service('secaService', SecaService);
    
    SecaService.$inject = ['$resource'];

    function SecaService($resource) {
        var vm = this;

        // public functions
        vm.getMyAccount = getMyAccount;
        vm.getStores = getStores;
        vm.throwException = throwException;

        ///////////////////////////////////////////////////////

        /*
            >> hostfile configuration <<

            127.0.0.1          support-ca.samsung.com    # local
            206.67.236.110     stgwebca.samsung.com      # staging
        */

        function getMyAccount() {
            //var url = 'http://support-ca.samsung.com/api/myaccount/get';
            var url = 'http://stgwebca.samsung.com/seca/api/myaccount/get';

            var resource = $resource(url, {
                'api_key': '55a75e7599d56ed685ebc035d642b38aa9ce4507',
                'prof_id': 'ddb9b3352227bbb3aa72752438805f9485a7848339d9f54d0067d4966d972fc2',
                'language': 'fr'
            });

            return resource.get().$promise;
        }

        function getStores() {      
            //var url = 'http://support-ca.samsung.com/api/product/stores/get'
            var url = 'http://stgwebca.samsung.com/seca/api/product/stores/get'

            var resource = $resource(url, {
                'api_key': '55a75e7599d56ed685ebc035d642b38aa9ce4507'
            });

            return resource.get().$promise;
        }

        function throwException() {
            //var url = 'http://support-ca.samsung.com/test/throwException/test'
            var url = 'http://stgwebca.samsung.com/test/throwException/test'

            var resource = $resource(url);

            return resource.get().$promise;

        }
    }

})();