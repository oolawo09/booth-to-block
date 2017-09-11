"use strict";

angular.module("payments")
    .config(function($stateProvider) {


        $stateProvider

            // ABOUT PAGE ========================================
            .state("payments", {
                url: "/payments",
                templateUrl: "payments/payments.html",
                controllerAs: "vm",
                controller: "PaymentsController"
            });

    });