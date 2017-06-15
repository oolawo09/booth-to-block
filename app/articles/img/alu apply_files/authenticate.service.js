"use strict";


angular.module("core.authenticate")
    .factory("AuthenticationService", function authenticate($http, Session, API_ENDPOINTS, HTTP_HEADERS, $q, $state) {

        function isAuthenticated() {

            return !!Session.authorisationToken;
        }

        function signup(user) {
            return $http
                .post(API_ENDPOINTS.signup, user)
                .then(function(response) {
                    //create a user object from the server response 
                    var user = response.config.data;

                    //initialise the session 
                    Session.create("dummy authenticationToken");

                    //return the user object 
                    return user;
                });
        }

        function blockRouteUntilAuthenticated() {
            if (isAuthenticated()) {
                // Resolve the promise successfully
                return $q.when()
            } else {
                // This code runs after the authentication promise has been rejected.
                // Go to the log-in page
                console.log("ni hapa mboss")
                $state.go("login")
            }
        }

        function login(credentials) {
            return $http
                .post(API_ENDPOINTS.login, credentials)
                .then(function(response) {
                    //create a user object from the server response 
                    var user = response.config.data;

                    //initialise the session 
                    Session.create("dummy authenticationToken")

                    //return the user object 
                    return user;
                });
        }

        function logout() {
            //TODO fill this out 
        }

        return {
            isAuthenticated: isAuthenticated,
            signup: signup,
            login: login,
            logout: logout,
            blockRouteUntilAuthenticated: blockRouteUntilAuthenticated

        };
    });
