"use strict";

angular.module("adminLogin")
    .controller("adminLoginController", function($stateParams, $window, $state, authenticationService, userManagementService) {
        var vm = this;

        vm.user = {
            username: "",
            password: ""
        }

        vm.login = function(username, password) {
            userManagementService.login(username, password)
                .success(function(data) {
                    authenticationService.isAuthenticated = true

                    $window.sessionStorage.token = data.token;
                    $state.go('admin')
                }).error(function(status, data) {
                    console.log(status);
                    console.log(data);
                })
        }
    })