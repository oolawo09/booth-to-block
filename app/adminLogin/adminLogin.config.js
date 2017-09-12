"use strict";

angular.module("adminLogin")
    .config(function($stateProvider, $sceDelegateProvider) {

        $stateProvider

        // adminUser pages ========================================
            .state("adminLogin", {
            url: "/adminLogin",
            templateUrl: "adminLogin/adminLogin.html",
            controllerAs: "vm",
            controller: "adminLoginController"
        });


    });
