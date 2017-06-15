"use strict"; 

angular.module("about")
	.config(function($stateProvider) {

        $stateProvider

        // ABOUT PAGE ========================================
            .state("about", {
            url: "/about", 
            templateUrl: "about/about.html", 
            controllerAs: "vm", 
            controller: "AboutController"
        }); 
     }); 