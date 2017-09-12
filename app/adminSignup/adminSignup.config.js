"use strict";

angular.module("adminSignup")
    .config(function($stateProvider, $sceDelegateProvider) {

        $stateProvider

        // adminUser pages ========================================
            .state("adminSignup", {
            url: "/adminSignup",
            templateUrl: "adminSignup/adminSignup.html",
            controllerAs: "vm",
            controller: "adminSignupController"
        });


    });
