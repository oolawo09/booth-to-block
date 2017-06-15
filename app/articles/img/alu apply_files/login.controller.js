"use strict";

angular.module("login")
    .controller("LoginController", function($http, AuthenticationService, $scope, $state) {
        var vm = this;
        //TODO find out why RELATIVE_URIS is undefined  


        // The model object that we reference 
        // in the markup 
        vm.credentials = {};

        // An array of our form fields with configuration
        // and options set. We make reference to this in
        // the 'fields' attribute on the  element
        $http.get("login/login.fields.json")
            .success(function(data, status) {
                vm.fields = data
            }).error(function() {});



        //POST credentials to the backend 
        //Redirect if successful 
        //Post error message otherwise 
        vm.login = function() {
            AuthenticationService.login(vm.credentials).then(
                function(user) {
                    $scope.setCurrentUser(user);
                    $state.go("home");
                },
                function() {
                    //TODO flesh out 
                    //
                });
        }





    });
