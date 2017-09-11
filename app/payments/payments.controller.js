"use strict";

angular.module("payments")
    .controller("PaymentsController", function($state, $http, PAYMENTS_API_ENDPOINTS) {
        var vm = this;

        vm.chargeCustomer = function() {
            $state.go("home")
        }





    })