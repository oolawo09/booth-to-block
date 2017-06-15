"use strict";

angular.module("about")
    .controller("Bookings", function($state) {
        var vm = this;

        vm.bookingDetails = {};


        vm.book = function(bookingDetails) {
        	console.log("here")
        	$state.go("home")
        }
    })
