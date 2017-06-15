"use strict";

angular.module("songs")
    .config(function($stateProvider, $sceDelegateProvider) {

        //allow urls from other sites 
        $sceDelegateProvider.resourceUrlWhitelist([
            // Allow same origin resource loads.
            'self',
            // Allow loading from our assets domain.  Notice the difference between * and **.
            '*://www.youtube.com/**'
        ])


        $stateProvider

        // Article detail pages ========================================
            .state("songs", {
            url: "/songs/:songId",
            templateUrl: "songs/songs.html",
            controllerAs: "vm",
            controller: "SongsController"
        });
    });
