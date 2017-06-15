"use strict";

angular.module("login")

.config(["$stateProvider", "$urlRouterProvider",

    function config($stateProvider, $urlRouterProvider) {


        $stateProvider


        //LOGIN PAGE =============================================================
            .state("login", {
            url: "/login",
            templateUrl: "login/login.template.html", 
            controllerAs: "vm", 
            controller: "LoginController"
        });



    }
]);
