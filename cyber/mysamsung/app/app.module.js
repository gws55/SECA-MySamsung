(function() {
    'use strict';

    angular.module('App', [
        /*
         * Order is not important. Angular makes a
         * pass to register all of the modules listed
         * and then when app.dashboard tries to use app.data,
         * its components are available.
         */

        /*
         * Ng modules
         */ 
        'ngRoute', 'ngResource',

        /*
         * Everybody has access to these.
         * We could place these under every feature area,
         * but this is easier to maintain.
         */ 
        'App.router',

        /*
         * Feature areas
         */
        'App.layout',
        'App.pages'
    ]);

})();
