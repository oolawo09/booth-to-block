
"use strict";

angular.module("formGeneration")

.config(["$stateProvider", "$urlRouterProvider",
function config($stateProvider, $urlRouterProvider) {

    $stateProvider

    //PROFILE STATES AND NESTED VIEWS ========================================
        .state("formGeneration", {
            url: "/formGeneration",
            templateUrl: "formGeneration/formGeneration.template.html",
            controllerAs: "vm",
            controller: "FormGenerationController" //,
                //resolve:  { 
                //  block : function(AuthenticationService){ 
                //    return AuthenticationService.blockRouteUntilAuthenticated()
                //}
        //}
    })
}])

