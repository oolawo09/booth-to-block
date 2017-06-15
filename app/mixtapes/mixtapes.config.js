"use strict";

angular.module("mixtapes")
    .config(function($stateProvider, $sceDelegateProvider) {

        //allow urls from other sites 
        $sceDelegateProvider.resourceUrlWhitelist([
            // Allow same origin resource loads.
            'self',
            // Allow loading from our assets domain.  Notice the difference between * and **.
            '*://www.youtube.com/**'
        ])




        $stateProvider

        // Article detail pages ========================================
            .state("mixtapes", {
            url: "/mixtapes/:mixtapeId",
            templateUrl: "mixtapes/mixtapes.html",
            controllerAs: "vm",
            controller: "MixtapesController"
        });
    });
