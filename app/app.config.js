"use strict";

angular.module("myApp")
    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');

        $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
            .state('home', {
            url: '/home',
            templateUrl: 'home.html',
            controllerAs: "vm",
            controller: "HomeController"
        })


    })
    .config(function($mdThemingProvider) {
        $mdThemingProvider.theme("default")
            .primaryPalette('pink')
            .accentPalette('orange')
    });
