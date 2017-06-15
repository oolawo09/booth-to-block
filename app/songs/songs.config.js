"use strict"; 

angular.module("songs")
	.config(function($stateProvider) {

        $stateProvider

        // Article detail pages ========================================
        .state("songs", {
          url: "/songs/:songId", 
          templateUrl: "songs/songs.html", 
          controllerAs: "vm", 
          controller: "SongsController"
        }); 
     }); 