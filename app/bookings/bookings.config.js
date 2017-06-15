"use strict"; 

angular.module("bookings")
	.config(function($stateProvider) {


        $stateProvider

        // ABOUT PAGE ========================================
            .state("bookings", {
            url: "/bookings", 
            templateUrl: "bookings/bookings.html", 
            controllerAs: "vm", 
            controller: "BookingsController"
        }); 
     }); 