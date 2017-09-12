"use strict";

angular.module("adminSignup")
    .controller("adminSignupController", function($stateParams, $window, $state, authenticationService, userManagementService) {
        var vm = this;

        vm.user = {
            username: "",
            password: "", 
            confirmPassword: ""
        }

        vm.signup = function(username, password, confirmPassword) {
            userManagementService.register(username, password, confirmPassword)
                .success(function(data) {
                    authenticationService.isAuthenticated = true
                    console.log(data)
                    $window.sessionStorage.token = data.token;
                    $state.go('admin')
                }).error(function(status, data) {
                    console.log(status);
                    console.log(data);
                })
        }
    })