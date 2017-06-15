"use strict";


angular.module("signup")
    .controller("SignupController",
        function($http, AuthenticationService, $rootScope, $scope, $state) {

            var vm = this; //TODO find out why constants can't be injected in here 

            // The model object that we reference 
            // in the markup 
            vm.user = {};

            // An array of our form fields with configuration
            // and options set. We make reference to this in
            // the 'fields' attribute on the  element
            $http.get("signup/signup.fields.json")
                .success(function(data, status) {
                    vm.fields = data

                    //TODO logic to handle different responses 
                }).error(function(response) {});



            //POST credentials to the backend 
            //Redirect if successful 
            //Post error message otherwise 
            var config = {
                headers: "application/json"
            };

            //signing up via the form gives the user editor privileges 
            //a special invitation has to be made for admins. 

            vm.signup = function(user) {
                AuthenticationService.signup(user).then(
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
