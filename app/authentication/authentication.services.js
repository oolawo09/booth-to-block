"use strict";

angular.module("authentication")
    .factory("authenticationService", function() {
        var auth = {
            isAuthenticated: false,
            isAdmin: false
        }

        return auth;

    });