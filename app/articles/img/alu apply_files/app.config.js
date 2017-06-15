"use strict";

angular.module("alu-apply")

.config(["$stateProvider", "$urlRouterProvider",

    function config($stateProvider, $urlRouterProvider) {


        $urlRouterProvider.otherwise("/profile");
    }
])

