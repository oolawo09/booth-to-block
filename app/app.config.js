"use strict";

angular.module("myApp")
    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');

        $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
            .state('home', {
            url: '/home',
            templateUrl: 'partial-home.html',
            controllerAs: "vm", 
            controller: "HomeController"
        })

       

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('bookings', {
            url: '/bookings',
            views: {
                '': { templateUrl: 'partial-bookings.html' },
                'columnOne@about': { template: '' }
            }

        });

    });
