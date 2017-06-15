"use strict";

angular.module("home")

.config(["$stateProvider", "$urlRouterProvider",
function config($stateProvider, $urlRouterProvider) {

    $stateProvider

    //PROFILE STATES AND NESTED VIEWS ========================================
        .state("home", {
            url: "/home",
            templateUrl: "home/home.template.html",
            controllerAs: "vm",
            controller: "HomeController" //,
                //resolve:  { 
                //  block : function(AuthenticationService){ 
                //    return AuthenticationService.blockRouteUntilAuthenticated()
                //}
        //}
    })
}])
