"use strict";

angular.module("profile")

.config(["$stateProvider", "$urlRouterProvider", 
    function config($stateProvider, $urlRouterProvider) {


        $stateProvider

        //PROFILE STATES AND NESTED VIEWS ========================================
            .state("profile", {
            url: "/profile",
            templateUrl: "profile/profile.template.html",
            controllerAs: "vm",
            controller: "ProfileController",
            resolve:  { 
                block : function(AuthenticationService){ 
                    return AuthenticationService.blockRouteUntilAuthenticated()
                }
            }
        })
    }
])
