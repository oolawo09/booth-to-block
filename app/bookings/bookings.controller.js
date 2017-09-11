"use strict";

angular.module("bookings")
    .controller("BookingsController", function($state) {
        var vm = this;

        vm.bookingDetails = {};


        vm.book = function(bookingDetails) {
        	$state.go("payments")
        }
    })
