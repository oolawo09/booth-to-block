"use strict"; 

angular.module("home")
    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');

        $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
            .state('home', {
            url: '/home',
            templateUrl: 'home/home.html',
            controllerAs: "vm",
            controller: "HomeController"
        })


    })
    .config(function($mdThemingProvider) {
        $mdThemingProvider.theme("default")
            .primaryPalette('pink')
            .accentPalette('orange')
    });
