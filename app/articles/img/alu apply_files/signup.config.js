"use strict";

angular.module("signup")

.config(["$stateProvider", "$urlRouterProvider",

    function config($stateProvider, $urlRouterProvider) {

        $stateProvider


        //SIGNUP PAGE ============================================================
            .state("signup", {
            url: "/signup",
            templateUrl: "signup/signup.template.html",
            controllerAs: "vm",
            controller: "SignupController"
        })

    }
]);