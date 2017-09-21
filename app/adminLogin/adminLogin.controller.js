"use strict";

angular.module("adminLogin")
    .controller("adminLoginController", function($stateParams, $window, $state, userManagementService, sessionService, $rootScope) {
        var vm = this;

        vm.user = {
            username: "",
            password: ""
        }

        vm.login = function(username, password) {
            userManagementService.login(username, password)
                .success(function(data) {
                    sessionService.initAdminSession(data)
                    $rootScope.$broadcast('loggedIn', {})
                    $state.go('blog')
                }).error(function(status, data) {
                    console.log(status);
                    console.log(data);
                })
        }
    })