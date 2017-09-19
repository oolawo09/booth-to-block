"use strict";

angular.module("userManagement")
    .factory("userManagementService", function($http) {
        return {
            login: function(username, password) {
                return $http.post(options.api.base_url + '/user/signin', { username: username, password: password });
            },

            logout: function() {
                return $http.get(options.api.base_url + '/user/logout');
            },

            register: function(username, password, passwordConfirmation) {
                return $http.post(options.api.base_url + '/user/register', { username: username, password: password, passwordConfirmation: passwordConfirmation });
            }
        }

    });