"use strict";

angular.module("alu-apply")
    .controller("ApplicationController", [ "$scope",
        function( $scope) {

            $scope.currentUser = null;

            $scope.setCurrentUser = function(user) {
                $scope.currentUser = user;
            };
        }
    ]);
