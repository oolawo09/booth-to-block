"use strict";

angular.module("adminLogin")
    .controller("adminLoginController", function($stateParams, $window, $state, userManagementService, sessionService) {
        var vm = this;

        vm.user = {
            username: "",
            password: ""
        }

        vm.login = function(username, password) {
            userManagementService.login(username, password)
                .success(function(data) {
                    sessionService.initAdminSession(data); 
                    $state.go('blog')
                }).error(function(status, data) {
                    console.log(status);
                    console.log(data);
                })
        }
    })