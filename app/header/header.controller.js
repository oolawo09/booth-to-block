"use strict";

angular.module("header")
    .controller("headerController", function(sessionService, $state, $scope, $rootScope) {
        var vm = this;
        vm.logout = function() {
            sessionService.destroyAdminSession();
            vm.isAdmin = false
            $rootScope.$broadcast('loggedOut', {})
        }

        $scope.$on("loggedIn", function(event) {
            vm.isAdmin = sessionService.isAdmin();
            vm.session = sessionService.getAdminSession();

        })

    })