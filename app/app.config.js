"use strict";

//configuration options 
var options = {};
options.api = {};
options.api.base_url = "http://localhost:3001";

angular.module("myApp")
    .config(function($mdThemingProvider) {
        $mdThemingProvider.theme("default")
            .primaryPalette('pink')
            .accentPalette('orange')
    });


